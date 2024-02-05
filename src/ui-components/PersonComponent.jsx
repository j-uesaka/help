/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function PersonComponent(props) {
  const { person, overrides, ...rest } = props;
  return (
    <View
      width="738px"
      height="167px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "PersonComponent")}
      {...rest}
    >
      <Text
        fontFamily="Inria Serif"
        fontSize="32px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="38.36800003051758px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="14px"
        left="19px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={person?.name}
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
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="14px"
        left="661px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={person?.age}
        {...getOverrideProps(overrides, "age")}
      ></Text>
      <Text
        fontFamily="Inria Serif"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="19.18400001525879px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="84px"
        left="20px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={person?.email}
        {...getOverrideProps(overrides, "email")}
      ></Text>
      <Text
        fontFamily="Inria Serif"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="19.18400001525879px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="130px"
        left="20px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={person?.tel}
        {...getOverrideProps(overrides, "tel")}
      ></Text>
    </View>
  );
}
