import * as React from 'react';
import styled from 'styled-components';

export interface TaskListProps {
  children?: React.ReactNode;
  data?: object;
  className?: string;
}

const StyledTaskContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  @media (max-width: 720px) {
    width: 95%;
  }
`;


const TaskList: React.StatelessComponent<TaskListProps>= (props): JSX.Element => (
  <StyledTaskContainer {...props}>
    {props.children}
  </StyledTaskContainer>
);

export default TaskList;