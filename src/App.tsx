import * as React from 'react';
import Box, { AlignItems, JustifyContent } from './components/box/box';
import DataListContainer from './container/datalist-container';
import Input from './container/input-container';

class App extends React.Component {

  public state: any = {
    data: [],
    value: ""
  }
  
  public render() {
    return (
      <Box 
        alignItems={AlignItems.Center}
        col={true}
        flex={true}
        height="100vh" 
        justifyContent={JustifyContent.Center}
      >
        <Input
          placeholder="Add ToDo"
          onChange={e => this.handleChange(e)}
          onKeyPress={e => this.addToDo(e)}
          value={this.state.value}
        />
        <DataListContainer 
          data={this.state.data} 
          onClick={e => this.deleteToDo(e)}
        />
      </Box>
    );
  }

  private addToDo(e: any) {  
    // only write data when pressing enter & don't allow empty values
    if (e.key === 'Enter' && this.state.value !== "") {
      // push input value to data array
      this.state.data.push(e.target.value);
      this.setState(this.state.data);

      // empty input field
      this.state.value="";
    }
  }

  private deleteToDo(e: any) {
    // get id from clicked item
    const value = e.target.id;

    // remove id from data-array
    this.state.data = this.state.data.filter((item:any) => item !== value)

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