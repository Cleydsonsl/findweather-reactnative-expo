import {Container, InconSearch} from "./styles";
import {Input} from "../../atoms/Input";
import {Feather} from "react-native-vector-icons";

export function InputSearch() {
    return(
        <Container>
            <InconSearch name="search" component={Feather} size={19}/>
            <Input name="search" placeholder="Digite o nome de uma cidade"/>
        </Container>
    )
}
