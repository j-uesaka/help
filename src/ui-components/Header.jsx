/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Header(props) {
  const { label, overrides, ...rest } = props;
  return (
    <View
      width="691px"
      height="119px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Header")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="691px"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="0px"
        left="0px"
        border="4px SOLID rgba(24,139,5,1)"
        padding="6px 6px 6px 6px"
        backgroundColor="rgba(111,193,91,1)"
        {...getOverrideProps(overrides, "Frame 2")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="24.204544067382812px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Sample application"
          {...getOverrideProps(overrides, "Title")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="691px"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="44px"
        left="0px"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Frame 3")}
      >
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="14.522727012634277px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="This is sample component"
          {...getOverrideProps(overrides, "This is sample component")}
        ></Text>
      </Flex>
    </View>
  );
}
