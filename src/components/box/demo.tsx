import * as React from 'react';
import styled from 'styled-components';
import Box, {AlignItems, AlignSelf, JustifyContent} from "./box";

const StyledBox = styled(Box)`
  text-align: center;
  padding: 20px;
  margin-bottom: 10px;
  font-family: sans-serif;
`;

const StyledElement = styled.div`
  background-color: rgba(0,255,255,.3);
  border: 1px solid rgba(255,255,255,.6);
  padding: 5px;
`;

const DemoBox = () => (
  <React.Fragment>
    <StyledBox>
      <StyledElement>Default Box</StyledElement>
    </StyledBox>

    <StyledBox background="rgba(255,0,0,.1)">
      <StyledElement>Box with defined background color</StyledElement>
    </StyledBox>

    <StyledBox background="rgba(255,0,0,.1)" flex={true}>
      <StyledElement>Box with</StyledElement>
      <StyledElement>Flex (Row by default)</StyledElement>
    </StyledBox>

    <StyledBox background="rgba(255,0,0,.1)" flex={true} col={true}>
      <StyledElement>Box with Flex</StyledElement>
      <StyledElement>and flex-direction set to "column"</StyledElement>
    </StyledBox>

    <StyledBox background="rgba(255,0,0,.1)" flex={true} col={true} width="200px" >
      <StyledElement>Box with Flex</StyledElement>
      <StyledElement>flex-direction "column"</StyledElement>
      <StyledElement>and fixed width</StyledElement>
    </StyledBox>

    <StyledBox background="rgba(255,0,0,.1)" flex={true} width="200px" wrap={true} >
      <StyledElement>Box with Flex</StyledElement>
      <StyledElement>and fixed width</StyledElement>
      <StyledElement>and wrap</StyledElement>
    </StyledBox>

    <StyledBox background="rgba(255,0,0,.1)" flex={true} justifyContent={JustifyContent.SpaceBetween}>
      <StyledElement>Box with Flex</StyledElement>
      <StyledElement>and fixed width</StyledElement>
      <StyledElement>and wrap</StyledElement>
    </StyledBox>

    <StyledBox background="rgba(255,0,0,.1)" flex={true} col={true} alignItems={AlignItems.Start}>
      <StyledBox background="rgba(255,0,0,.1)">
        <StyledElement>Box with Flex</StyledElement>
      </StyledBox>
      <StyledBox background="rgba(255,0,0,.1)" alignSelf={AlignSelf.Center}>
        <StyledElement>Box with Flex</StyledElement>
      </StyledBox>
    </StyledBox>
  </React.Fragment>
);

export default DemoBox;