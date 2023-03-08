import {ImageProps, ImageSourcePropType} from "react-native";
import styled from "styled-components/native";

export interface IImageProps extends ImageProps{
    width?: any;
    height?: string;
    borderRadius?: number;
    resizeMode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center';
    source: ImageSourcePropType;
}

export const Container = styled.Image<IImageProps>`
  width: ${({width}) => width ? `${width}px` : '100%'};
  height: ${({height}) => height ? `${height}px` : '100%'};
  border-radius: ${({ borderRadius }) => borderRadius ? `${borderRadius}px` : '0'};
`;
