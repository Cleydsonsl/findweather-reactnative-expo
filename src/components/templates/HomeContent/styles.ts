import styled from "styled-components/native";
import { Text } from "../../atoms/Text";
import {Icon} from "../../atoms/Icon";
import {Image} from "../../atoms/Image";
import {RFPercentage, RFValue} from "react-native-responsive-fontsize";
import {RectButton, TouchableOpacity} from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;
  background: ${({theme}) => theme.colors.dark};

  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${RFValue(15)}px;
`;

export const ContentHeader = styled.View`
  display: flex;
  align-items: center;
  justify-content: center; 
  flex-direction: row;
  margin-bottom: ${RFValue(30)}px;
`;

export const ContentText = styled.View`
  display: flex;
`;

export const TextCity = styled(Text)`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.size.lg};
  line-height: ${({theme}) => theme.size["1xl"]};
`;

export const TextData = styled(Text)`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.size.md};
  color: ${({theme}) => theme.colors.gray_100};
  line-height: ${({theme}) => theme.size.xl};
`;

export const IconContent = styled.View`
  height: 100%;
  align-items: baseline;
`;

export const IconLocation = styled(Icon).attrs({
    size: 18,
})`
  color: ${({theme}) => theme.colors.white};
`;

export const BrandImage = styled(Image).attrs({
    resizeMode: "contain",
})`
  width: ${RFValue(172)}px;
  height: ${RFValue(140)}px;
`;

export const TextTemp = styled(Text)`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(72)}px;
`;

export const Temp = styled(Text)`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.size["4xl"]}; 
`;

export const TempContent = styled.View`
  margin-top: ${RFValue(5)}px;
  display: flex;
  flex-direction: row;
`;

export const TempMode = styled(Text)`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.size["4xl"]};
  color: ${({theme}) => theme.colors.gray_100};
`;

export const ContentStatus = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: ${RFValue(25)}px;
  padding: ${RFValue(8)}px;
  
  border: ${RFValue(1)}px solid ${({theme}) => theme.colors.gray_600};
  border-radius: ${RFValue(18)}px;
`;

export const TempContentFull = styled.View`
  display: flex;
  align-items: center;
  width: ${RFPercentage(14)}px;
`;

export const UmdImage = styled(Image).attrs({
    resizeMode: "contain",
})`
  height: ${RFValue(20)}px;
  margin: ${RFValue(4)}px;
`;

export const UmdTemText = styled(Text)`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.white};
  
`;

export const UmdText = styled(Text)`
  font-family: ${({theme}) => theme.fonts.light};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.gray_400};
`;

export const Pipe = styled.View`
  width: ${RFValue(1)}px;
  height: ${RFValue(32)}px;
  background: ${({theme}) => theme.colors.gray_600};
`;

export const MoreInfo = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${RFValue(25)}px;
`;

export const NextDays = styled.View`
  width: ${RFValue(68)}px;
  height: ${RFValue(90)}px;
  padding: ${RFValue(8)}px;
  background: ${({theme}) => theme.colors.dark_300};
  border: 1.5px solid ${({theme}) => theme.colors.dark_100};
  border-radius: ${RFValue(20, 800)}px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

export const NextFiveDays = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background: transparent;
`;

export const TempContentDays = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const DaysImage = styled(Image).attrs({
    resizeMode: "contain",
})`
  height: ${RFValue(30)}px;
`;

export const DaysTemp = styled(Text)`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(18, 800)}px;
  color: ${({theme}) => theme.colors.white};
`;

export const DaysTempO = styled(Text)`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(12, 800)}px;
  color: ${({theme}) => theme.colors.gray_100};
`;

export const DaysTime = styled(Text)`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(12, 800)}px;
  color: ${({theme}) => theme.colors.gray_100};
  margin-top: 9px;
`;

export const ContentNextDays = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  
  margin-top: ${RFValue(27)}px;
`;

export const IconNext = styled(Icon).attrs({
    size: 20,
})`
  color: ${({theme}) => theme.colors.gray_100};
`;
