import {Container, InconSearch} from "./styles";
import {Input} from "../../atoms/Input";
import {Feather} from "react-native-vector-icons";
import {TextInputProps} from "react-native";

interface Search {
    value: string;
    onSubmitEditing: () => void;
    onChangeText: (value: string) => void;
}

export function InputSearch({ value, onChangeText, onSubmitEditing, ...rest }: Search) {
    return(
        <Container>
            <InconSearch name="search" component={Feather} size={19}/>
            <Input
                placeholder="Digite o nome de uma cidade"
                value={value}
                onSubmitEditing={onSubmitEditing}
                onChangeText={onChangeText}
                {...rest}
            />
        </Container>
    )
}
