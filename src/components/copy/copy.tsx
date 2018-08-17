import * as React from 'react';
import styled, { css } from 'styled-components';

export interface CopyProps {
  children: React.ReactNode;
  size?: Size;
  color?: string | "black";
  bold?: boolean;
}

export enum Size {
  Default,
  Small,
  Large
}

const StyledCopy = styled.div`
  color: ${(props: CopyProps) => props.color ? props.color : `black`};
  font-weight: ${(props: CopyProps) => props.bold ? `bold` : `normal`};
  display: block;
  margin-bottom: 10px;

  ${(props: CopyProps) => {
    switch (props.size) {
      case Size.Default:
      default:
        return css`font-size: 16px; line-height: 30px;`;
      case Size.Small:
        return css`font-size: 12px; line-height: 18px;`;
      case Size.Large:
        return css`font-size: 36px; line-height: 48px;`;
    }
  }};
`;

const Copy: React.StatelessComponent<CopyProps> = (props): JSX.Element => (
  <StyledCopy color={props.color} size={props.size} bold={props.bold}>
    {props.children}
  </StyledCopy>
); 

export default Copy;