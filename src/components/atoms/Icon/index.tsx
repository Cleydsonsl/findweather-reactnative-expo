import { Container, StyledIconProps } from "./styles";

export function Icon({ name, component: Icon, ...rest }: StyledIconProps) {
    return (
        <Container>
            <Icon name={name} {...rest} />
        </Container>
    )
}
