import {
    BrandImage,
    ButtonSearch,
    CardCity, City, ClimateText,
    Container,
    ContentCard,
    ContentSearch,
    Header, HeaderCard,
    IconButton,
    Invisible, Temperature,
    Title
} from "./styles";
import { Entypo } from "react-native-vector-icons";
import {InputSearch} from "../../components/molecules/InputSearch";
import {BackButton} from "../../components/molecules/BackButton";
import cloud from "../../assets/image16.png";
import {useNavigation} from "@react-navigation/native";

export function Search() {
    const navigation = useNavigation<any>();

    function handleClick(){
        navigation.navigate("Home")
    }

    return (
        <Container>
            <Header>
                <BackButton onPress={handleClick} />
                <Title>Busca</Title>
                <Invisible/>
            </Header>

            <ContentSearch>
                <InputSearch/>
                <ButtonSearch>
                    <IconButton name="location-pin" component={Entypo} />
                </ButtonSearch>
            </ContentSearch>
            <ContentCard>
                <CardCity>
                    <HeaderCard>
                        <Temperature>13°</Temperature>
                        <BrandImage source={cloud} />
                    </HeaderCard>
                    <ClimateText>Nublado</ClimateText>
                    <City>Santiago de Compostela, Espanha</City>
                </CardCity>
                <CardCity>
                    <HeaderCard>
                        <Temperature>13°</Temperature>
                        <BrandImage source={cloud} />
                    </HeaderCard>
                    <ClimateText>Nublado</ClimateText>
                    <City>Santiago de Compostela, Espanha</City>
                </CardCity>
            </ContentCard>
        </Container>
    )
}
