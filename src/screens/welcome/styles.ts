import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Image } from "../../components/atoms/Image";
import { Text } from "../../components/atoms/Text";

export const Container = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({theme}) => theme.colors.dark};
  padding: ${RFValue(15)}px;
`;

export const BrandImage = styled(Image)`
  width: ${RFValue(214, 680)}px;
  height: ${RFValue(222, 680)}px;
`;

export const Title = styled(Text)`
  font-size: ${({theme}) => theme.size["5xl"]};
  font-family: ${({theme}) => theme.fonts.semib};
  margin-top: ${RFPercentage(5)}px;
  text-align: center;
`;

export const SubTitle = styled(Text)`
  font-size: ${({theme}) => theme.size["1xl"]};
  font-family: ${({theme}) => theme.fonts.light};
  color: ${({theme}) => theme.colors.gray_100};
  text-align: center;
  line-height: ${RFValue(27)}px;
`;

export const SubTitleWeight = styled(Text)`
  font-size: ${({theme}) => theme.size["1xl"]};
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.gray_100};
  text-align: center;
  line-height: ${RFValue(27)}px;
`;

export const ContentSubTitle = styled.View`
  margin-top: ${RFPercentage(3)}px;
  margin-bottom: ${RFPercentage(7)}px;
`;

export const ButtonText = styled(Text)`
  font-size: ${({theme}) => theme.size["1xl"]};
  line-height: ${RFValue(27)}px;
  font-family:${({theme}) => theme.fonts.regular};
`;
