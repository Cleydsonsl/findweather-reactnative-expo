import { Container, Content, IButtonProps } from "./styles";

export function Button({ onPress, ...rest }: IButtonProps) {
    return (
        <Content>
            <Container onPress={onPress} {...rest}/>
        </Content>
    )
}
