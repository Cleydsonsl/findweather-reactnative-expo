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
    textAlign?: TextStyle['textAlign'];
}

export const TextContent = styled.Text<TextProps>`
  color: ${({ color, theme }) => color || theme.colors.white};
  font-family: ${({ fontFamily, theme }) => fontFamily || theme.fonts.light};
  font-size: ${({ fontSize }) => fontSize || 16}px;
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
  text-align: ${({ textAlign }) => textAlign || 'left'};
`;
