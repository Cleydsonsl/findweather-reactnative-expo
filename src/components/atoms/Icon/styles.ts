import styled from 'styled-components/native';

export interface StyledIconProps {
    name: string;
    size?: number;
    color?: string;
    component: React.ElementType;
}

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`;
