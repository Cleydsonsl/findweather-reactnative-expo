import styled from "styled-components/native";
import {TextInput, TextInputProps, TextProps} from "react-native";
import theme from "../../../theme";

export interface InputProps extends TextProps {
    value: string
    onSubmitEditing: () => void
    placeholder: string;
    onChangeText: (value: string) => void;
}

export const ContentInput = styled(TextInput).attrs({
    placeholderTextColor: theme.colors.gray_200,
})<InputProps>`
  width: 100%;
  color: ${({theme}) => theme.colors.gray_200};
  font-family: ${({theme}) => theme.fonts.regular};
  background: transparent;
  font-size: 16px;
`;
