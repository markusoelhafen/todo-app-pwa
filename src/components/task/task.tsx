import * as React from 'react';
import styled from 'styled-components';
import {Space, SpaceSize} from '../space/space';

export interface TaskProps {
  data: string;
  id: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  isActive: boolean;
}

const StyledTaskContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  margin-bottom: ${Space(SpaceSize.Size200)};
  padding: ${Space(SpaceSize.Size500)} 0;
  border: 0;
  
  @media (min-width: 720px) {
    padding: ${Space(SpaceSize.Size500)};
    width: calc(100% + 30px);
    margin-left: -15px;
    transition: box-shadow .3s ease-in-out;

    border-radius: 3px;

    &:hover {
      box-shadow: 0 0 5px rgba(0,0,0,.2);
    }
  }

  ${(props: TaskProps) => {
    if (props.isActive === true) {
      return ('box-shadow: 0 0 2px 1px rgba(0,0,0,.3); &:hover {box-shadow: 0 0 2px 1px rgba(0,0,0,.3)}')
    } else { return ''}
  }};
`;

const StyledTaskField = styled.div.attrs({
})`
  font-size: ${Space(SpaceSize.Size500)};
  line-height: ${Space(SpaceSize.Size700)};
  min-width: ${Space(SpaceSize.Size700)};
  color: black;
  margin-right: 15px;
  cursor: pointer;
  width: 100%;
  outline: 0;
`;

const StyledCheckbox = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 24px;
  border: 1px solid rgba(0,0,0,.2);
  margin-right: 15px;
  flex-shrink: 0;

  &:hover {
    background-color: rgba(0,0,0,.1);
  }
`;

const StyledIcon = styled.div`
  height: 24px;
  width: 24px;
  background-color: rgba(0,0,0,.1);
  margin-left: auto;
  opacity: 0;
  transition: opacity .3s ease-in-out;
  flex-shrink: 0;

  &:hover {
    cursor: all-scroll;
  }

  ${StyledTaskContainer}:hover & {
    opacity: 1;
  }
`;

export const Task: React.StatelessComponent<TaskProps>= (props): JSX.Element => (
  <StyledTaskContainer {...props}>
    <StyledCheckbox className='checkbox' id={props.id}/>
    <StyledTaskField className='task' id={props.id} contentEditable={true} suppressContentEditableWarning={true}>{props.data}</StyledTaskField>
    <StyledIcon />
  </StyledTaskContainer>
);

export default Task;