import styled from "styled-components/native";
import {RFValue} from "react-native-responsive-fontsize";
import {TouchableOpacity} from "react-native";
import {Icon} from "../../components/atoms/Icon";
import {Text} from "../../components/atoms/Text";
import {Image} from "../../components/atoms/Image";

export const Container = styled.View`
  flex: 1;
  background: ${({theme}) => theme.colors.dark};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: ${RFValue(15)}px;
`;

export const ContentSearch = styled.View`
  width: 80%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ButtonSearch = styled(TouchableOpacity)`
  background: ${({theme}) => theme.colors.dark_400};
  border-radius: ${RFValue(11, 800)}px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-left: ${RFValue(16, 800)}px;
`;

export const IconButton = styled(Icon)`
  color: ${({theme}) => theme.colors.white};
  font-size: 29px;
  
`;

export const Header = styled.View`
  width: 100%;
  margin-top: ${RFValue(30)}px;
  margin-bottom: ${RFValue(60)}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Title = styled(Text)`
  color: ${({theme}) => theme.colors.white};
  font-size: ${RFValue(16)}px;
`;

export const Invisible = styled.View`
  width: 40px;
`;
