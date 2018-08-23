import * as React from 'react';
import styled, { css } from 'styled-components';

export interface BoxProps {
  alignContent?: AlignContent;
  alignItems?: AlignItems;
  alignSelf?: AlignSelf;
  background?: string | "transparent";
  basis?: string;
  children?: React.ReactNode;
  className?: string;
  col?: boolean;
  flex?: boolean;
  grow?: string;
  height?: string;
  justifyContent?: JustifyContent;
  order?: string;
  shrink?: string;
  width: string;
  wrap?: boolean;
}

export enum AlignContent {
  Start,
  End,
  Center,
  SpaceBetween,
  SpaceAround,
  Stretch
}

export enum AlignItems {
  Start,
  End,
  Center,
  Baseline,
  Stretch
}

export enum AlignSelf {
  Auto,
  Start,
  End,
  Center,
  Baseline,
  Stretch
}

export enum JustifyContent {
  Start,
  End,
  Center,
  SpaceBetween,
  SpaceAround,
  SpaceEvenly
}

const StyledBox = styled.div`
  ${(props: BoxProps) => props.flex ? `display: flex;` : `display: block;`};
  ${(props: BoxProps) => props.width && `width:` + props.width};
  ${(props: BoxProps) => props.height && `height:` + props.height};
  ${(props: BoxProps) => props.col && props.flex ? `flex-direction: column` : `flex-direction: row`}
  background-color: ${(props: BoxProps) => props.background};
  ${(props: BoxProps) => props.wrap && props.flex && `flex-wrap: wrap`};

  ${(props: BoxProps) => {
    switch (props.justifyContent) {
      case JustifyContent.Start:
      default:
        return css`justify-content: flex-start;`;
      case JustifyContent.End:
        return css`justify-content: flex-end;`;
      case JustifyContent.Center:
        return css`justify-content: center`;
      case JustifyContent.SpaceBetween:
        return css`justify-content: space-between`;
      case JustifyContent.SpaceAround:
        return css`justify-content: space-around`;
      case JustifyContent.SpaceEvenly:
        return css`justify-content: space-evenly`;
    }
  }};

  ${(props: BoxProps) => {
    switch (props.alignItems) {
      case AlignItems.Start:
        return css`align-items: flex-start;`;
      case AlignItems.End:
        return css`align-items: flex-end;`;
      case AlignItems.Center:
        return css`align-items: center`;
      case AlignItems.Baseline:
        return css`align-items: baseline`;
      case AlignItems.Stretch:
      default:
        return css`align-items: stretch`;
    }
  }};

  ${(props: BoxProps) => {
    switch (props.alignContent) {
      case AlignContent.Start:
        return css`align-content: flex-start;`;
      case AlignContent.End:
        return css`align-content: flex-end;`;
      case AlignContent.Center:
        return css`align-content: center`;
      case AlignContent.SpaceBetween:
        return css`align-content: space-between`;
      case AlignContent.SpaceBetween:
        return css`align-content: space-around`;
      case AlignContent.Stretch:
      default:
        return css`align-content: stretch`;
    }
  }};
  
  ${(props: BoxProps) => {
    switch (props.alignSelf) {
      case AlignSelf.Auto:
      default:
        return css`align-self: auto;`;
      case AlignSelf.Start:
        return css`align-self: flex-start;`;
      case AlignSelf.End:
        return css`align-self: flex-end;`;
      case AlignSelf.Center:
        return css`align-self: center`;
      case AlignSelf.Baseline:
        return css`align-self: baseline`;
      case AlignSelf.Stretch:
        return css`align-self: stretch`;
    }
  }};
`;

const Box: React.StatelessComponent<BoxProps> = (props): JSX.Element => (
  <StyledBox {...props}>
    {props.children}
  </StyledBox>
);

export default Box;