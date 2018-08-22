import * as React from "react";
import styled from 'styled-components';
import Input from '../input/input';

export interface InputProps {
  id?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
  placeholder?: string;
  value?: string;
}

const StyledInput = styled(Input)`
  order: 1;
  @media (min-width: 720px) {
    order: 0;
  }
`;

const TaskInput: React.StatelessComponent<InputProps> = (props): JSX.Element => (
  <StyledInput {...props}/>
);

export default TaskInput;