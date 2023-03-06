import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Image } from "../../atoms/Image";
import { Text } from "../../atoms/Text";

export const Container = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${RFValue(15, 800)}px;
`;

export const ContentHeader = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  margin-bottom: ${RFValue(105, 800)}px;
`;

export const BrandImage = styled(Image).attrs({
  resizeMode: "contain",
})`
  width: ${RFValue(256, 800)}px;
  height: ${RFValue(243, 800)}px;
`;

export const SelectCityContent = styled(TouchableOpacity)`
  margin-top: ${RFValue(105, 800)}px;
`;

export const TextCityContent = styled(Text)`
  text-align: center;
  text-decoration: underline ${({ theme }) => theme.colors.gray_100};
  color: ${({theme}) => theme.colors.gray_100};
  font-size: ${({theme}) => theme.size["1xl"]}
`;
