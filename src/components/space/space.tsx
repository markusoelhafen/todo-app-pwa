import * as React from 'react';

export interface SpaceProps {
  size?: SpaceSize;
}

export enum SpaceSize {
  Size100,
  Size200,
  Size300,
  Size500,
  Size400,
  Size600,
  Size700,
  Size800,
  Size900,
  none
}

export function Space (input: SpaceSize) {
  switch(input) {
    case SpaceSize.Size100:
      return "3px";
    case SpaceSize.Size200:
      return "6px";
    case SpaceSize.Size300:
      return "9px";
    case SpaceSize.Size400:
      return "12px";
    case SpaceSize.Size500:
      return "15px";
    case SpaceSize.Size600:
      return "24px";
    case SpaceSize.Size700:
      return "30px";
    case SpaceSize.Size800:
      return "36px";
    case SpaceSize.Size900:
      return "42px";
    case SpaceSize.none:
    default:
      return "";
  } 
}

const SpaceComponent: React.StatelessComponent<SpaceProps> = (props): JSX.Element => (
  <React.Fragment>
    foo
  </React.Fragment>
)

export default SpaceComponent;