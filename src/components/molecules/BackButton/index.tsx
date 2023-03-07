import {Container, IconButton} from "./styles";
import {Ionicons} from "react-native-vector-icons";

export function BackButton() {
    return (
        <Container>
            <IconButton name="md-chevron-back-outline" component={Ionicons} />
        </Container>
    )
}
