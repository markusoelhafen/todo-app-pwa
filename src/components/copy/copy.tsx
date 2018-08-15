import * as React from 'react';
import styled from 'styled-components';

export interface CopyProps {
  children: React.ReactNode;
  small?: boolean;
  color?: string | "black";
}

const StyledCopy = styled.div`
  color: ${(props: CopyProps) => props.color ? props.color : `black`};
  display: block;
  font: ${(props: CopyProps) => props.small ? `12px/18px` : `16px/30px`} sans-serif;
  margin-bottom: 10px;
`;

const Copy: React.StatelessComponent<CopyProps> = (props): JSX.Element => (
  <StyledCopy color={props.color} small={props.small}>
    {props.children}
  </StyledCopy>
); 

export default Copy;