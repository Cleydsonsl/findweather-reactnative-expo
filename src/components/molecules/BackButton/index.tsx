import {Container, IconButton} from "./styles";
import {Ionicons} from "react-native-vector-icons";

interface IButtonProps {
    onPress: () => void;
}

export function BackButton({onPress}: IButtonProps) {
    return (
        <Container onPress={onPress}>
            <IconButton name="md-chevron-back-outline" component={Ionicons} />
        </Container>
    )
}
