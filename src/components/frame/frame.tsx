import * as React from 'react'
import styled from 'styled-components'

export interface FrameProps {
  children?: React.ReactNode
  /**
   * Set this to change center items
   * @default false
   */
  centered?: boolean
  /**
   * Set this for a custom ClassName
   * @default emtpy
   */
  className?: string
}

const StyledFrame = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-areas:
    "header header header"
    ". form ."
    ". list .";
  width: 100%;
  height: 100%;

  @media (max-width: 720px) {
    max-height: 100vh;
    grid-template-columns: auto;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
    "header"
    "list"
    "form";
  }
`;

export const Frame: React.StatelessComponent<FrameProps> = (props): JSX.Element => (
  <StyledFrame>
    {props.children}
  </StyledFrame>
)

export default Frame;