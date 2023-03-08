import {ContentInput, InputProps} from "./styles";
import React from "react";

export function Input({ value, placeholder, onSubmitEditing, onChangeText }: InputProps) {
    return (
        <ContentInput value={value} placeholder={placeholder} onSubmitEditing={onSubmitEditing} onChangeText={onChangeText} />
    );
};
