import * as React from "react";
import styled from 'styled-components';

export interface InputProps {
  id?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
  placeholder?: string;
  value?: string;
}

const StyledInput = styled.input`
  border: 1px solid #ccc;
  height: 50px;
  padding: 5px 15px;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 100;
  outline: none;
  min-width: 300px;

  &:focus{
    border-color: #999;
    box-shadow: 0 0 5px rgba(0,0,0,.25);
  }
`;


const Input: React.StatelessComponent<InputProps> = (props): JSX.Element => (
  <React.Fragment>
    <StyledInput
      id={props.id}
      onChange={props.onChange}
      onKeyPress={props.onKeyPress}
      placeholder={props.placeholder}
      value={props.value} 
    />
  </React.Fragment>
);

export default Input;