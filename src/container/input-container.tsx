import * as React from 'react';
import { InputProps } from '../components/input/input';
import TaskForm from '../components/taskform/taskform';

export interface InputContainerProps extends InputProps{
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

export class Input extends React.Component<InputContainerProps> {
  public render (): JSX.Element {
    return (
      <TaskForm {...this.props}/>
    );
  }

};

export default Input;