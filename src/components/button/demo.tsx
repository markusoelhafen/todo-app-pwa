import * as React from "react";
import Box, { AlignItems, JustifyContent } from "../box/box";
import Button from "./button";


const DemoButton = () => (
  <Box flex={true} height="100vh" alignItems={AlignItems.Center} justifyContent={JustifyContent.Center}>
    <Button>
      Button
    </Button>
  </Box>
);

export default DemoButton;