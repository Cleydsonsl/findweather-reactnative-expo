import {BrandImage, ButtonText, Container, ContentSubTitle, SubTitle, SubTitleWeight, Title} from "./styles";
import brandImage from "../../assets/cloud-and-thunder.png"
import { Button } from "../../components/atoms/Button";
import { useNavigation } from "@react-navigation/native";

export function Welcome() {
    const navigation = useNavigation<any>();

    function handleClick() {
        navigation.navigate("Home")
    }

    return(
        <Container>
            <BrandImage source={brandImage} />
            <Title>Descubra o Clima na sua Cidade</Title>
            <ContentSubTitle>
                <SubTitle>Com o <SubTitleWeight>FindWeather</SubTitleWeight> nunca</SubTitle>

                <SubTitle> ficou tão fácil ter a previsão do tempo na palma da sua mão.</SubTitle>
            </ContentSubTitle>
            <Button onPress={handleClick} >
                <ButtonText>Iniciar</ButtonText>
            </Button>
        </Container>
    )
}
