import {ButtonSearch, Container, ContentSearch, Header, IconButton, Invisible, Title} from "./styles";
import { Entypo } from "react-native-vector-icons";
import {InputSearch} from "../../components/molecules/InputSearch";
import {BackButton} from "../../components/molecules/BackButton";


export function Search() {
    return (
        <Container>
            <Header>
                <BackButton/>
                <Title>Busca</Title>
                <Invisible/>
            </Header>

            <ContentSearch>
                <InputSearch/>
                <ButtonSearch>
                    <IconButton name="location-pin" component={Entypo} />
                </ButtonSearch>
            </ContentSearch>
        </Container>
    )
}
