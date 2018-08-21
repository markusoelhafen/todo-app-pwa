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
    font-family: Renner, Futura, Verdana, Arial, sans-serif;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }
`;

const StyledMainFrame = styled(Frame)`
  @media (max-width: 720px) {
    justify-content: space-between;
    height: 100%;
  }
`;

const StyledInputFrame = styled(Frame)`
@media (max-width: 720px) {
  justify-content: space-between;
  flex-grow: 1
  align-items: center;
}
`;

const StyledInput = styled(Input)`
  order: 1;
  @media (min-width: 720px) {
    order: 0;
  }
`;

const StyledDataList = styled(DataListContainer)`
  @media (max-width: 720px) {
    width: 95%;
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
        <Header title="✏️ Memo" />
        <StyledInputFrame maxWidth={MaxWidth.half}>
          <StyledInput
            placeholder="New Task"
            onChange={e => this.handleChange(e)}
            onKeyPress={e => this.addToDo(e)}
            value={this.state.value}
          />
          <StyledDataList 
            data={this.state.data} 
            onClick={e => this.deleteToDo(e)}
          />
        </StyledInputFrame>
      </StyledMainFrame>
    );
  }

  private addToDo(e: any) {

    // only write data when pressing enter & don't allow empty values
    if (e.key === 'Enter' && this.state.value !== "") {
      
      const newData: DataProps = {
        id: Date.now(), // use Date.now() as temporary uuid
        timestamp: Date.now(), // placeholder for "created on date, time"
        value: this.state.value
      }

      // push input value to data array
      this.state.data.push(newData); // !!! DONT PUSH ON STATE

      this.setState(this.state.data);
      console.log(this.state.data)

      // empty input field
      this.state.value="";
    }
  }

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