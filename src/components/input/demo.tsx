import * as React from "react";
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
      <div>
        <Input 
          id={this.props.id}
          onChange={e => this.handleChange(e)}
          placeholder="Type away"
          value={this.state.value}
        />
      </div>
    );
  }

  private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    
    this.setState({value});
  }
};

export default DemoInput;