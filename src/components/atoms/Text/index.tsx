import { TextProps, TextContent } from "./styles";

export function Text({children, ...rest}: TextProps){
    return (
        <TextContent {...rest}>{children}</TextContent>
    )
}
