import * as React from "react";
import Box, { AlignSelf } from "../box/box";
import Copy from "./copy";


const DemoCopy = () => (
  <Box flex={true} width="80%" height="100vh" col={true} alignSelf={AlignSelf.Center}>
    <Copy>
      Default Copy – Sans Serif | font-size: 16px | line-height: 30px | black
    </Copy>
    <Copy small={true}>
      Small Copy – Sans Serif | font-size: 12px | line-height: 18px | black
    </Copy>
    <Copy color="red" small={true}>
      Small Copy – Sans Serif | font-size: 12px | line-height: 18px | defined color
    </Copy>
  </Box>
);

export default DemoCopy;