import * as React from "react";
import styled from 'styled-components';

export interface InputProps {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string | 'Start typing';
  value: string;
}

const StyledInput = styled.input`
  border: 1px solid #ccc;
  height: 50px;
  padding: 5px 15px;
  box-sizing: border-box;
  border-radius: 5px;
  outline: none;
  min-width: 300px;
  width: 100%;
  color: black;

  &:focus{
    border-color: #999;
    box-shadow: 0 0 5px rgba(0,0,0,.25);
  }
`;


const Input: React.StatelessComponent<InputProps> = (props): JSX.Element => (
  <StyledInput {...props} />
);

export default Input;