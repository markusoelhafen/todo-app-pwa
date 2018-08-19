import * as React from 'react'
import styled, { css } from 'styled-components'

export interface FrameProps {
  maxWidth?: MaxWidth
  children?: React.ReactNode
  centered?: boolean
  className?: string;
}

export enum MaxWidth {
  full,
  medium,
  half,
  minimal
}

const StyledFrame = styled.div`
  display: flex;
  flex-direction: column;
  ${(props: FrameProps) => props.centered ? `align-items: center` : ``};

  ${(props: FrameProps) => {
    switch (props.maxWidth) {
      case MaxWidth.full:
      default:
        return css`width: 100%`;
      case MaxWidth.medium:
        return css`width: 75%`;
      case MaxWidth.half:
        return css`
          width: 100%;
          @media (min-width: 720px) {
            width: 50%;
          }
        `;
      case MaxWidth.minimal:
        return css`width: 25%`;
    }
  }};
`;

const Frame: React.StatelessComponent<FrameProps> = (props): JSX.Element => (
  <StyledFrame 
    centered={props.centered} 
    maxWidth={props.maxWidth}
    className={props.className}
    >
    {props.children}
  </StyledFrame>
)

export default Frame;