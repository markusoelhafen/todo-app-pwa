import * as React from 'react';
import DataListComponent from '../components/datalist/datalist';
import DataRow from '../components/datarow/datarow';

export interface InputContainerProps {
  data: string[];
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export class Input extends React.Component<InputContainerProps, {data: string[]}> {

  public state: any = {
    data: this.props.data || []
  }

  public render (): JSX.Element {

    return (
      <DataListComponent>
        {this.props.data.map((item:any, index) =>
          <DataRow data={item} key={index} onClick={this.props.onClick}/>
        )}
      </DataListComponent>
    );
  }

};

export default Input;