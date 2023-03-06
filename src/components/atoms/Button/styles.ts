import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { ReactNode } from "react";

export interface IButtonProps {
    children?: ReactNode;
    background?: string;
    borderRadius?: number;
    paddingVertical?: number;
    paddingHorizontal?: number;
    border?: string;
    onPress?: () => void;
}

export const Content = styled.View`
  width: 100%;
  border: 1px solid ${({theme}) => theme.colors.gray_300};
  border-radius: ${RFValue(18)}px;
`;

export const Container = styled(RectButton)<IButtonProps>`
  min-width: 100%;
  background: ${({ background, theme }) => background || theme.colors.dark_300 };
  border: ${({ border, theme }) => border ? `${border}px` : `1px solid ${theme.colors.gray_300}`};
  padding: ${RFValue(15)}px;
  border-radius: ${RFValue(18)}px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
