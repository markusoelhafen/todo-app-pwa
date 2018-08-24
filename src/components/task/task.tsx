import * as React from 'react';
import styled from 'styled-components';
import {Space, SpaceSize} from '../space/space'

export interface TaskProps {
  data: string;
  id: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const StyledTaskContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  margin-bottom: ${Space(SpaceSize.Size200)};
  padding: ${Space(SpaceSize.Size500)} ${Space(SpaceSize.Size100)};
  align-items: center;
`;
  
const StyledTaskField = styled.div`
  font-size: ${Space(SpaceSize.Size500)};
  line-height: ${Space(SpaceSize.Size700)};
  min-width: ${Space(SpaceSize.Size700)};
  text-align: center;
  color: black;
`;

const StyledCheckbox = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 24px;
  border: 1px solid rgba(0,0,0,.2);
  margin-right: 15px;

  &:hover {
    background-color: rgba(0,0,0,.1);
  }
`;

export const Task: React.StatelessComponent<TaskProps>= (props): JSX.Element => (
  <StyledTaskContainer>
    <StyledCheckbox id={props.id} onClick={props.onClick}/>
      <StyledTaskField>
        {props.data}
      </StyledTaskField>
  </StyledTaskContainer>
);

export default Task;