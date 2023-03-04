import { ImageSourcePropType } from "react-native";
import styled from "styled-components/native";

export interface IImageProps {
    width?: number;
    height?: number;
    borderRadius?: number;
    resizeMode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center';
    source: ImageSourcePropType;
}

export const Container = styled.Image<IImageProps>`
  width: ${({ width }) => width ? `${width}px` : '100%'};
  height: ${({ height }) => height ? `${height}px` : '100%'};
  border-radius: ${({ borderRadius }) => borderRadius ? `${borderRadius}px` : '0'};
  resize: ${({ resizeMode }) => resizeMode || 'contain'};
`;
