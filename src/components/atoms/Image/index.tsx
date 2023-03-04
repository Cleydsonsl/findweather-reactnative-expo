import { Container, IImageProps } from "./styles";

export function Image({...rest}: IImageProps) {
    return (
        <Container {...rest}>
        </Container>
    )
}
