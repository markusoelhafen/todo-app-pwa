import * as React from "react";
import Copy, { Size } from "./copy";


const DemoCopy = () => (
  <div>
    <Copy>
      Default Copy – Sans Serif | font-size: 16px | line-height: 30px | black
    </Copy>
    <Copy size={Size.Small}>
      Small Copy – Sans Serif | font-size: 12px | line-height: 18px | black
    </Copy>
    <Copy color="red" size={Size.Small}>
      Small Copy – Sans Serif | font-size: 12px | line-height: 18px | defined color
    </Copy>
  </div>
);

export default DemoCopy;