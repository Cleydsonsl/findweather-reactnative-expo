import { ReactNode } from "react";
import { TextStyle } from "react-native";
import styled from "styled-components/native";

export interface TextProps {
    children: ReactNode;
    color?: string;
    fontFamily?: string;
    fontSize?: number;
    fontWeight?: TextStyle['fontWeight'];
    letterSpacing?: number;
    lineHeight?: number;
    textAlign?: TextStyle['textAlign'];
}

export const Container = styled.Text<TextProps>`
  color: ${({ color, theme }) => color || theme.colors.white};
  font-family: ${({ fontFamily, theme }) => fontFamily || theme.fonts.light};
  font-size: ${({ fontSize }) => fontSize || 16}px;
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || 0}px;
  line-height: ${({ lineHeight }) => lineHeight || 22}px;
  text-align: ${({ textAlign }) => textAlign || 'left'};
`;
