import * as React from 'react';
import { injectGlobal } from 'styled-components';
// import Frame from './components/frame/frame';
import Header from './components/header/header';
import Input from './container/input-container';
import TaskListContainer from './container/tasklist-container';

export interface AppState {
  data: DataProps[];
  value: string;
}

export interface DataProps {
  id: number
  timestamp: number
  value: string
}

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  * {
    font: 16px/30px Roboto;
    margin: 0;
    padding: 0;
    font-family: Renner, Futura, Verdana, Arial, sans-serif;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }
`;

class App extends React.Component<{}, AppState> {

  public state: AppState = {
    data: [],
    value: ""
  }
  
  public render() {
    return (
      <div>
        <Header title="✏️ Memo" />
        <Input
          placeholder="New Task"
          onChange={e => this.handleChange(e)}
          onSubmit={e => this.handleSubmit(e)}
          value={this.state.value}
        />
        <TaskListContainer
          data={this.state.data} 
          onClick={e => this.deleteToDo(e)}
        />
      </div>
    );
  }

  private handleSubmit(e: React.FormEvent<HTMLElement>) {
    e.preventDefault()

    // only write data when pressing enter & don't allow empty values
    if (this.state.value !== '') {  
      const newData: DataProps = {
        id: Date.now(), // use Date.now() as temporary uuid
        timestamp: Date.now(), // placeholder for "created on date, time"
        value: this.state.value
      }

      this.setState({
        data: [...this.state.data, newData],
        value: ''
      });
    }
  }

  private deleteToDo(e: React.MouseEvent<HTMLElement>) {
    // transform id from string to number
    const targetId = Number((e.target as HTMLElement).id)

    // update state
    this.setState({
      data: this.state.data.filter(item => targetId !== item.id),
      value: this.state.value
    })
  }

  private handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    // get value from change event on input
    const value = e.target.value;

    // update state of input container
    this.setState({
      data: this.state.data,
      value
    });
  }

}

export default App;