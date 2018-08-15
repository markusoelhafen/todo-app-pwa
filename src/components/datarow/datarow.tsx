import * as React from 'react';
import styled from 'styled-components';
import {Space, SpaceSize} from '../space/space'

export interface DataProps {
  data: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const StyledDataContainer = styled.div`
  border-radius: ${Space(SpaceSize.Size100)};
  box-shadow: 0 0 6px 1px rgba(0,0,0,.125);
  box-sizing: border-box;
  display: flex;
  margin-bottom: ${Space(SpaceSize.Size200)};
  padding: ${Space(SpaceSize.Size300)} ${Space(SpaceSize.Size500)};
`;
  
const StyledDataField = styled.div`
  font-family: sans-serif;
  font-size: ${Space(SpaceSize.Size500)};
  line-height: ${Space(SpaceSize.Size700)};
  min-width: ${Space(SpaceSize.Size700)};
  text-align: center;
  color: black;
`;

const DataRow: React.StatelessComponent<DataProps>= (props): JSX.Element => (
  <StyledDataContainer id={props.data} onClick={props.onClick}>
        <StyledDataField>
          {props.data}
        </StyledDataField>
  </StyledDataContainer>
);

export default DataRow;