import {
    BrandImage,
    Container,
    ContentHeader,
    ContentNextDays,
    ContentStatus,
    ContentText,
    DaysImage,
    DaysTemp,
    DaysTempO,
    DaysTime,
    IconContent,
    IconLocation,
    IconNext,
    MoreInfo,
    NextDays,
    NextFiveDays,
    Pipe,
    Temp,
    TempContent,
    TempContentDays,
    TempContentFull,
    TempMode,
    TextCity,
    TextData,
    TextTemp,
    UmdImage,
    UmdTemText,
    UmdText
} from "./styles";
import { Entypo } from "react-native-vector-icons";
import { MaterialIcons } from "react-native-vector-icons";
import storm from "../../../assets/raining.png";
import drop from "../../../assets/drop-miniature.png";
import cloud from "../../../assets/raining-cloud-miniature.png";
import wind from "../../../assets/wind-miniature.png";
import image1 from "../../../assets/image1.png";
import image2 from "../../../assets/image5.png";
import image3 from "../../../assets/image6.png";
import image4 from "../../../assets/image4.png";

export function HomeContent(){
  return (
    <Container>
      <ContentHeader>
          <IconContent>
            <IconLocation name="location-pin" component={Entypo} />
          </IconContent>
        <ContentText>
          <TextCity>A coruña, Espanha</TextCity>
          <TextData>Domingo, 03 Jan de 2023</TextData>
        </ContentText>
      </ContentHeader>
        <BrandImage source={storm} />
        <TempContent>
            <TextTemp>23</TextTemp>
            <Temp>°</Temp>
        </TempContent>
        <TempMode>Chuva Moderada</TempMode>
        <ContentStatus>
            <TempContentFull>
                <UmdImage source={drop} />
                <UmdTemText>24%</UmdTemText>
                <UmdText>Umidade</UmdText>
            </TempContentFull>
            <Pipe/>
            <TempContentFull>
                <UmdImage source={wind} />
                <UmdTemText>20km/h</UmdTemText>
                <UmdText>Veloc. Vento</UmdText>
            </TempContentFull>
            <Pipe/>
            <TempContentFull>
                <UmdImage source={cloud} />
                <UmdTemText>76%</UmdTemText>
                <UmdText>Chuva</UmdText>
            </TempContentFull>
        </ContentStatus>
        <MoreInfo>
            <UmdTemText>Hoje</UmdTemText>
            <NextFiveDays>
                <UmdText>Próximo 5 dias</UmdText>
                <IconNext name="keyboard-arrow-right" component={MaterialIcons} />
            </NextFiveDays>
        </MoreInfo>
        <ContentNextDays>
            <NextDays>
                <TempContentDays>
                    <DaysTemp>23</DaysTemp>
                    <DaysTempO>°</DaysTempO>
                </TempContentDays>
                <DaysImage source={image1} />
                <DaysTime>09:00</DaysTime>
            </NextDays>
            <NextDays>
                <TempContentDays>
                    <DaysTemp>18</DaysTemp>
                    <DaysTempO>°</DaysTempO>
                </TempContentDays>
                <DaysImage source={image2} />
                <DaysTime>13:00</DaysTime>
            </NextDays>
            <NextDays>
                <TempContentDays>
                    <DaysTemp>23</DaysTemp>
                    <DaysTempO>°</DaysTempO>
                </TempContentDays>
                <DaysImage source={image3} />
                <DaysTime>17:00</DaysTime>
            </NextDays>
            <NextDays>
                <TempContentDays>
                    <DaysTemp>28</DaysTemp>
                    <DaysTempO>°</DaysTempO>
                </TempContentDays>
                <DaysImage source={image4} />
                <DaysTime>23:00</DaysTime>
            </NextDays>
        </ContentNextDays>
    </Container>
  )
}
