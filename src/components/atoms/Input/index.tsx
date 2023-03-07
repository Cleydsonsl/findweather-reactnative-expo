import {ContentInput, InputProps} from "./styles";
import React from "react";

export function Input({ name, placeholder, ...rest }: InputProps) {
    return (
        <ContentInput name={name} placeholder={placeholder} {...rest}/>
    );
};
