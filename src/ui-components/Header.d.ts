/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeaderOverridesProps = {
    Header?: PrimitiveOverrideProps<ViewProps>;
    "Frame 2"?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    "Frame 3"?: PrimitiveOverrideProps<FlexProps>;
    "This is sample component"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type HeaderProps = React.PropsWithChildren<Partial<ViewProps> & {
    label?: String;
} & {
    overrides?: HeaderOverridesProps | undefined | null;
}>;
export default function Header(props: HeaderProps): React.ReactElement;
