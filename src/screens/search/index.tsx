import {
    ButtonSearch,
    Container,
    ContentSearch,
    Header,
    IconButton,
    Invisible,
    Title
} from "./styles";
import { Entypo } from "react-native-vector-icons";
import {InputSearch} from "../../components/molecules/InputSearch";
import {BackButton} from "../../components/molecules/BackButton";
import {useNavigation} from "@react-navigation/native";
import { useState } from "react";
import {FindWeatherAPI} from "../../services/findweather-api";
import {ISearchData} from "../../utils/search.interface";
import {CardSearch, ICardResult} from "../../components/organisms/CardSearch";
import {ErrorContent} from "../../components/templates/ErrorContent";

export function Search() {
    const [isError, setIsError] = useState(false);
    const [textTyped, setTextTyped] = useState("");
    const [response, setResponse] = useState<ISearchData>(null);
    const [dataCard, setDataCard] = useState({} as ICardResult);

    const [isLoading, setIsLoading] = useState(false);

    const handleCallAPI = async () => {
        FindWeatherAPI.getForecast(textTyped)
            .then((res) => {
                setIsLoading(true);
                setTextTyped("");
                setResponse(res.data);

                const { location, current } = res.data;

                setDataCard({
                    location: {
                        name: location.name,
                        region: location.region,
                        country: location.country,
                    },
                    current: {
                        temp_c: current.temp_c,
                    },
                    condition: {
                        text: current.condition.text,
                        icon: current.condition.icon,
                    },
                });
                setIsLoading(false);
            })
            .catch((error) => {
                console.log("Error to get api data: ", error);

                setIsError(true);
                setTextTyped("");
                setIsLoading(false);
            });
    };

    const navigation = useNavigation<any>();

    function handleClick(){
        navigation.navigate("Home")
        console.log(handleCallAPI())
    }

    return (
        <Container>
            <Header>
                <BackButton onPress={handleClick} />
                <Title>Busca</Title>
                <Invisible/>
            </Header>

            <ContentSearch>
                <InputSearch
                    value={textTyped}
                    onChangeText={(text) => {
                        setTextTyped(text);
                        setIsError(false);
                        setResponse(null);
                    }}
                    onSubmitEditing={handleCallAPI}
                />
                <ButtonSearch onPress={handleCallAPI}>
                    <IconButton name="location-pin" component={Entypo} />
                </ButtonSearch>
            </ContentSearch>
            {isError && <ErrorContent/>}
            {response && !isError && !isLoading && (
                <CardSearch data={dataCard}/>
            )}
        </Container>
    )
}
