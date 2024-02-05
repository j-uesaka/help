/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type PersonComponentOverridesProps = {
    PersonComponent?: PrimitiveOverrideProps<ViewProps>;
    name?: PrimitiveOverrideProps<TextProps>;
    age?: PrimitiveOverrideProps<TextProps>;
    email?: PrimitiveOverrideProps<TextProps>;
    tel?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PersonComponentProps = React.PropsWithChildren<Partial<ViewProps> & {
    person?: any;
} & {
    overrides?: PersonComponentOverridesProps | undefined | null;
}>;
export default function PersonComponent(props: PersonComponentProps): React.ReactElement;
