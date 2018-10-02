import * as React from "react";
import styled from 'styled-components';
import Input, {InputProps} from '../input/input';

export interface TaskFormProps extends InputProps{
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

const StyledFormWrapper = styled.form`
  display: flex;
  justify-content: center;
  width: 50%;
  margin-top: 20px;

  @media (max-width: 720px) {
    position: fixed;
    bottom: 20px;
    width: 90%;
    box-sizing: border-box;
  }
`;

const StyledInput = styled(Input)`

  border-radius: 50px;

  @media (max-width: 720px) {
    height: 60px;
  }
`;

export const TaskForm: React.StatelessComponent<TaskFormProps> = (props): JSX.Element => (
  <StyledFormWrapper onSubmit={props.onSubmit}>
    <StyledInput {...props}/>
  </StyledFormWrapper>
);

export default TaskForm;