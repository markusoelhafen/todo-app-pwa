import * as React from 'react'
import styled from 'styled-components'

export interface HeaderProps {
  title?: string
}

const StyledHeader = styled.div`
  background-color: #e90f73;
  color: white;
  padding: 15px;
  text-align: center;
  width: 100%;
  margin-bottom: 30px;
  box-shadow: 0px 2px 6px 0 rgba(0,0,0,.3);
  box-sizing: border-box;
`;

const header: React.StatelessComponent<HeaderProps> = (props): JSX.Element => (
  <StyledHeader>{props.title}</StyledHeader>
)

export default header;