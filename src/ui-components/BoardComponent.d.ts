/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Board } from "../models";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type BoardComponentOverridesProps = {
    BoardComponent?: PrimitiveOverrideProps<ViewProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    name?: PrimitiveOverrideProps<TextProps>;
    message?: PrimitiveOverrideProps<TextProps>;
    createdAt?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type BoardComponentProps = React.PropsWithChildren<Partial<ViewProps> & {
    board?: Board;
} & {
    overrides?: BoardComponentOverridesProps | undefined | null;
}>;
export default function BoardComponent(props: BoardComponentProps): React.ReactElement;
