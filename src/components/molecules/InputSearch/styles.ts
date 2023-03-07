import styled from "styled-components/native";
import {Icon} from "../../atoms/Icon";

export const Container = styled.View`
  width: 100%;
  padding: 15px;
  background: ${({theme}) => theme.colors.dark_400};
  border-radius: 11px;
  display: flex;
  flex-direction: row;
`;

export const InconSearch = styled(Icon)`
  color: ${({theme}) => theme.colors.white};
  font-size: 19px;
  margin-right: 16px;
`;
