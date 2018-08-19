import * as React from 'react';
import InputComponent from '../components/input/input';

export interface InputContainerProps {
  id?: string;
  value?: string;
  placeholder?: string;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
}

export class Input extends React.Component<InputContainerProps, {value: string}> {
  
  public state = {
    value: this.props.value || ""
  }

  public render (): JSX.Element {
    return (
      <InputComponent 
        className={this.props.className}
        id={this.props.id}
        onChange={this.props.onChange}
        onKeyPress={this.props.onKeyPress}
        placeholder={this.props.placeholder}
        value={this.props.value}
      />
    );
  }

};

export default Input;