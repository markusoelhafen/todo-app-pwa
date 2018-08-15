import * as React from "react";
import Box, { AlignItems, JustifyContent } from "../box/box";
import Input from "./input";

export interface DemoInputProps {
  id?: string;
  value?: string;
  placeholder?: string;
}

class DemoInput extends React.Component<DemoInputProps, {value: string}> {
  
  public state = {
    value: this.props.value || ""
  }

  public render (): JSX.Element {
    return (
      <Box flex={true} height="100vh" alignItems={AlignItems.Center} justifyContent={JustifyContent.Center}>
        <Input 
          id={this.props.id}
          onChange={e => this.handleChange(e)}
          placeholder="Type away"
          value={this.state.value}
        />
      </Box>
    );
  }

  private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    
    this.setState({value});
  }
};

export default DemoInput;