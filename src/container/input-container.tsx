import * as React from 'react';
import InputComponent from '../components/taskinput/taskinput';

export interface InputContainerProps {
  id?: string;
  value?: string;
  placeholder?: string;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export class Input extends React.Component<InputContainerProps> {
  public render (): JSX.Element {
    return (
      <form onSubmit={this.props.onSubmit}>
        <InputComponent {...this.props}/>
      </form>
    );
  }

};

export default Input;