import * as React from 'react';
import styled from 'styled-components';

export interface DataProps {
  children?: React.ReactNode;
  data?: object;
}

const StyledDataContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;


const DataList: React.StatelessComponent<DataProps>= (props): JSX.Element => (
  <StyledDataContainer {...props}>
    {props.children}
  </StyledDataContainer>
);

export default DataList;