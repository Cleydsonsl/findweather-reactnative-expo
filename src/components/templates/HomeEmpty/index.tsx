import { Text } from "../../atoms/Text";
import { BrandImage, Container, ContentHeader, SelectCityContent, TextCityContent } from "./styles";
import climateBrand from "../../../assets/climate-change.png"; 
import { useNavigation } from "@react-navigation/native";

export function HomeEmpty() {
  const navigation = useNavigation<any>();

  function handleClick(){
    navigation.navigate("HomeContent")
  }

  return (
    <Container>
      <ContentHeader>
        <Text fontWeight="400" fontSize={33} >Find</Text>
        <Text fontWeight="700" fontSize={33} >Weather</Text>
      </ContentHeader>
      <BrandImage source={climateBrand} />
      <SelectCityContent onPress={handleClick} >
        <TextCityContent>Selecione aqui um local e encontre o clima em tempo real</TextCityContent>
      </SelectCityContent>
    </Container>
  )
}
