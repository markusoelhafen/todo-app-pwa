import * as React from 'react';
import Copy, { Size } from '../components/copy/copy';
import Task from '../components/task/task';
import TaskListComponent from '../components/tasklist/tasklist';

export interface DataProps {
  id: string
  isActive: boolean
  timestamp: number
  value: string
}

export interface DataListProps {
  data: DataProps[];
  onClick?: React.MouseEventHandler<HTMLElement>;
  className?: string;
}

export class Tasklist extends React.Component<DataListProps> {

  public render (): JSX.Element {

    return (
      <TaskListComponent className={this.props.className}>
        {this.props.data.length > 0 ? 
          <>
            <Copy size={Size.Large}>
              My open Tasks
            </Copy>

            {this.props.data.map((item: DataProps) =>
              <Task data={item.value} id={item.id} key={item.id} onClick={this.props.onClick} isActive={item.isActive}/>
            )}

          </>
        : 
          <Copy color="#cccccc" size={Size.Large} centered={true}>
            🙌<br />
            Nothing to do, yay!
          </Copy>
        }
      </TaskListComponent>
    );
  }

};

export default Tasklist;