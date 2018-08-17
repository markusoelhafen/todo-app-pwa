import * as React from 'react';
import styled, { injectGlobal } from 'styled-components';
import Frame, { MaxWidth } from './components/frame/frame';
import Header from './components/header/header';
import DataListContainer from './container/datalist-container';
import Input from './container/input-container';

export interface AppState {
  data?: DataProps[];
  value?: string;
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
  }
`;

const StyledMainFrame = styled(Frame)`
  @media (max-width: 720px) {
    // justify-content: space-between;
    height: 100vh;
  }
`;

const StyledInput = styled(Input)`
  order: 0;
  @media (min-width: 720px) {
    order: 0;
  }
`;

class App extends React.Component {

  public state: AppState = {
    data: [],
    value: ""
  }
  
  public render() {
    return (
      <StyledMainFrame centered={true}>
        <Header title="Tasks" />
        <Frame maxWidth={MaxWidth.half}>
          <StyledInput
            placeholder="New Task"
            onChange={e => this.handleChange(e)}
            onKeyPress={e => this.addToDo(e)}
            value={this.state.value}
          />
          <DataListContainer 
            data={this.state.data} 
            onClick={e => this.deleteToDo(e)}
          />
        </Frame>
      </StyledMainFrame>
    );
  }

  private addToDo(e: any) {  
    // only write data when pressing enter & don't allow empty values
    if (e.key === 'Enter' && this.state.value !== "" /* && !this.findDuplicate(this.state.data, value)*/) {
      
      const newData: DataProps = {
        id: this.state.data.length,
        timestamp: Date.now(),
        value: this.state.value
      }

      // push input value to data array
      this.state.data.push(newData);
      this.setState(this.state.data);
      console.log(this.state.data)

      // empty input field
      this.state.value="";
    }
  }

  // private findDuplicate(data: DataProps, value: string) {
  //   const res = data.find((item:any) => item === value);
  //   if (res !== undefined) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  private deleteToDo(e: any) {
    // transform id from string to number
    const targetId = Number(e.target.id)

    this.state.data = this.state.data.filter((item: any) => targetId !== item.id)

    // update state
    this.setState(this.state.data)
  }

  private handleChange(e: any) {
    // get value from change event on input
    const value = e.target;

    // update state of input container
    this.setState(value);
  }

}

export default App;