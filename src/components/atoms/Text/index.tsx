import { Container, TextProps } from "./styles";

export function Text({children, ...rest}: TextProps){
    return (
        <Container {...rest}>{children}</Container>
    )
}
