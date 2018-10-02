import * as React from 'react';
import { injectGlobal } from 'styled-components';
import Frame from './components/frame/frame';
import Input from './container/input-container';
import TaskListContainer from './container/tasklist-container';

export interface AppState {
  data: DataProps[];
  selected?: DataProps;
  value: string;
}

export interface DataProps {
  id: string
  isActive: boolean
  timestamp: number
  value: string
}

const demoData = [
  {id: "1", isActive: false, timestamp: 1234, value: "Memo 1"},
  {id: "2", isActive: false, timestamp: 1234, value: "Memo 2"},
  {id: "3", isActive: false, timestamp: 1234, value: "Memo 3 is the longest task i have in my tasklist. And sometimes it is even a little bit longer so I can test multiple rows and so on..."}
]

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  * {
    font: 16px/30px Roboto;
    margin: 0;
    padding: 0;
    font-family: Jost-Book, Renner-Book, Futura, Verdana, Arial, sans-serif;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }
`;

class App extends React.Component<{}, AppState> {

  public state: AppState = {
    data: demoData,
    selected: undefined,
    value: ""
  }
  
  public render() {
    return (
      <Frame>
        <Input
          placeholder='New Task'
          onChange={e => this.handleChange(e)}
          onSubmit={e => this.handleSubmit(e)}
          value={this.state.value}
        />
        <TaskListContainer
          data={this.state.data} 
          onClick={e => this.handleClick(e)}
        />
      </Frame>
    );
  }

  private handleSubmit(e: React.FormEvent<HTMLElement>) {
    e.preventDefault()

    console.log('before', this.state.data.length);

    // only write data when pressing enter & don't allow empty values
    if (this.state.value !== '') {  
      const newData: DataProps = {
        id: Date.now().toString(), // use Date.now() as temporary uuid
        isActive: false,
        timestamp: Date.now(), // placeholder for "created on date, time"
        value: this.state.value
      }

      this.setState({
        data: [...this.state.data, newData],
        value: ''
      });

    }
  }

  private handleClick(e: React.MouseEvent<HTMLElement>) {
    const className = (e.target as HTMLElement).className.split(' ');

    if (className[0] === 'task') {
      console.log('click on taskname');
      this.selectItem(e.target as HTMLElement);
    } else if (className[0] === 'checkbox') {
      console.log('click on checkbox')
      this.deleteToDo(e);
    } else {
      console.log('click on something else')
    }
  }

  private selectItem(target: HTMLElement) {
    const clickedItem = this.state.data.filter(item => (target as HTMLElement).id === item.id)

    if (clickedItem[0] === this.state.selected){
      return
    } else {
      if (clickedItem[0] !== this.state.selected && this.state.selected !== undefined) {
        const currentlyActiveItem = this.state.selected
        currentlyActiveItem.isActive = false
      }
      clickedItem[0].isActive = true
  
      this.setState({
        data: this.state.data,
        selected: clickedItem[0]
      }, () => console.log('updated', this.state.data))

    }

  }

  private deleteToDo(e: React.MouseEvent<HTMLElement>) {
    // transform id from string to number
    const targetId = (e.target as HTMLElement).id

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