/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function BoardComponent(props) {
  const { board, overrides, ...rest } = props;
  return (
    <View
      width="816px"
      height="129px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "BoardComponent")}
      {...rest}
    >
      <Image
        width="160px"
        height="129px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="638px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={board?.image}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Text
        fontFamily="Inria Serif"
        fontSize="14px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="16.785999298095703px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="541px"
        height="22px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="69px"
        left="26px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={board?.name}
        {...getOverrideProps(overrides, "name")}
      ></Text>
      <Text
        fontFamily="Inria Serif"
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="28.7760009765625px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="786px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="16px"
        left="14px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={board?.message}
        {...getOverrideProps(overrides, "message")}
      ></Text>
      <Text
        fontFamily="Inria Serif"
        fontSize="14px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="16.785999298095703px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="541px"
        height="22px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="99px"
        left="26px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={board?.createdAt}
        {...getOverrideProps(overrides, "createdAt")}
      ></Text>
    </View>
  );
}
