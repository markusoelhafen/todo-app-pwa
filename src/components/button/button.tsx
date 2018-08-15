import * as React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  children?: React.ReactNode;
}

const StyledButton = styled.div`
  background-color: black;
  color: white;
  font-size: 16px;
  line-height: 30px;
  padding: 12px;
  min-width: 200px;
  border-radius: 3px;
  font-family: sans-serif;
  text-align: center;
`;

const Button: React.StatelessComponent<ButtonProps> = (props): JSX.Element => (
  <StyledButton>
    {props.children}
  </StyledButton>
);

export default Button;