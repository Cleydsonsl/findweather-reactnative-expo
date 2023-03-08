import styled from "styled-components/native";
import {TouchableOpacity} from "react-native";
import {Text} from "../../atoms/Text";
import {Image} from "../../atoms/Image";
import {RectButton} from "react-native-gesture-handler";

export const ContentCard = styled.View`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const CardCity = styled(RectButton)`
  width: 45%;
  background: ${({theme}) => theme.colors.dark_300};
  border: 1.5px solid ${({theme}) => theme.colors.dark_100};
  border-radius: 20px;
  padding: 12px;
  
  margin-top: 42px;
`;

export const HeaderCard = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;
export const ContentTemperature = styled.View`
  flex-direction: row;
  align-items: center;
`;


export const Temperature = styled(Text)`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${({theme}) => theme.size['4xl']};
`;

export const BrandImage = styled(Image).attrs({
    resizeMode: "contain",
})`
  width: 39px;
  height: 27px;
`;

export const ClimateText = styled(Text).attrs({})`
  color: ${({theme}) => theme.colors.gray_100};
  font-size: ${({theme}) => theme.size.lg};
`;

export const City = styled(Text)`
  margin-top: 18px;
  font-size: ${({theme}) => theme.size.lg};
  line-height: 22px;
`;

export const Grau = styled(Text)`
  font-size: ${({theme}) => theme.size.lg};
  line-height: 22px;
`;
