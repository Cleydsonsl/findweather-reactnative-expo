import React from "react";
import {
    BrandImage,
    CardCity,
    City,
    ClimateText,
    ContentCard,
    ContentTemperature,
    Grau,
    HeaderCard,
    Temperature
} from "./styles";
import {Text} from "../../atoms/Text";

export interface ICardResult {
    location: {
        name: string;
        region: string;
        country: string;
    };
    current: {
        temp_c: number;
    };
    condition: {
        text: string;
        icon: string;
    };
}

interface ICardResultData {
    data: ICardResult;
}

export function CardSearch({data}: ICardResultData) {
    const { location, current, condition } = data;

    return (
        <ContentCard>
            <CardCity>
                <HeaderCard>
                    <ContentTemperature>
                        <Temperature>{current && Math.floor(current.temp_c)}</Temperature>
                        <Grau>°</Grau>
                    </ContentTemperature>
                    <BrandImage source={{uri: `https:${condition.icon}`}} />
                </HeaderCard>
                <ClimateText>{condition?.text}</ClimateText>
                <City>{location.name}, {location.region && location.region + ","}{" "}{location.country}</City>
            </CardCity>
        </ContentCard>
    )
}
