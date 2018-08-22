import * as React from "react";
import styled from 'styled-components';
import Input, {InputProps} from '../input/input';

export interface TaskFormProps extends InputProps{
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

const StyledFormWrapper = styled.form`
  width: 50%;

  @media (max-width: 720px) {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
`;

const StyledInput = styled(Input)`
  @media (max-width: 720px) {
    border-radius: 0;
    border: 0;
    border-top: 1px solid #ccc;
    height: 60px;
  }
`;

const TaskForm: React.StatelessComponent<TaskFormProps> = (props): JSX.Element => (
  <StyledFormWrapper onSubmit={props.onSubmit}>
    <StyledInput {...props}/>
  </StyledFormWrapper>
);

export default TaskForm;