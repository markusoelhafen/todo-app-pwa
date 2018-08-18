import * as React from 'react';
import Box, { AlignItems, JustifyContent } from '../components/box/box';
import Copy, { Size } from '../components/copy/copy';
import DataListComponent from '../components/datalist/datalist';
import DataRow from '../components/datarow/datarow';


export interface DataProps {
  id: number
  timestamp: number
  value: string
}

export interface DataListProps {
  data: DataProps[];
  onClick?: React.MouseEventHandler<HTMLElement>;
  className?: string;
}

export class Input extends React.Component<DataListProps, {data: string[]}> {

  public state: any = {
    data: this.props.data || []
  }

  public render (): JSX.Element {

    return (
      <DataListComponent className={this.props.className}>
        {this.props.data.length > 0 ? 
          <React.Fragment>
            <Copy bold={true} size={Size.Large}>
              Your open Tasks
            </Copy>

            {this.props.data.map((item:any) =>
              <DataRow data={item.value} id={item.id} key={item.id} onClick={this.props.onClick}/>
            )}

          </React.Fragment>
        : 
          <Box flex={true} height="50vh" col={true} alignItems={AlignItems.Center} justifyContent={JustifyContent.Center}>
            <Copy color="rgba(0,0,0,.2)" size={Size.Large}>Nothing to do, yay!</Copy>
          </Box>
        }
      </DataListComponent>
    );
  }

};

export default Input;