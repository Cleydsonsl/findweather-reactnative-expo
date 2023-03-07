import styled from "styled-components/native";
import {TextInput, TextInputProps} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";
import theme from "../../../theme";

export interface InputProps extends TextInputProps {
    name: string;
    placeholder: string;
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
