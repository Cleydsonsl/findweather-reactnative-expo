import styled from "styled-components/native";
import {TouchableOpacity} from "react-native-gesture-handler";
import {Icon} from "../../atoms/Icon";

export const Container = styled(TouchableOpacity)`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  border: 1px solid ${({theme}) => theme.colors.gray_600};
  background: transparent;
  
  align-items: center;
  justify-content: center;
`;

export const IconButton = styled(Icon)`
  color: ${({theme}) => theme.colors.white};
  font-size: 25px;
`;
