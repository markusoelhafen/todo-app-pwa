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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Frame: React.StatelessComponent<FrameProps> = (props): JSX.Element => (
  <StyledFrame>
    {props.children}
  </StyledFrame>
)

export default Frame;