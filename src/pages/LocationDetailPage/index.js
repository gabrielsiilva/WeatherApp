import React, { useState, useEffect } from 'react';
import { Icon } from 'react-native-elements'
import { ActivityIndicator, Dimensions } from 'react-native';
import moment from 'moment';

import WeatherList from '../../components/WeatherList';

import {
  Container,
  ImageBackground,
  BackgroundDetailsBox,
  InfoContainer,
  CityName,
  ContainerFlex,
  WeatherDetail,
  WeatherTemp,
  WeatherTempDetail,
  LoadingContainer,
  LoadingText,
  IconContainer,
  WeatherContainer,
  WeatherTime
} from './styles';

import Wave from '../../../assets/wave.svg';
import themeData from '../../util/theme-data';

export default function LocationDetailPage({ route, navigation }) {

  const [locationTheme, setLocationTheme] = useState();
  const [cityWeatherInfo, setCityWeatherInfo] = useState();
  const [pageLoaded, setPageLoaded] = useState(false);
  let width = Dimensions.get("window").width + 300;

  useEffect(() => {
    receiveDataFromSearch();
    setLocationTheme(themeData[Math.floor(Math.random() * themeData.length)]);
    setPageLoaded(true);
  }, []);

  receiveDataFromSearch = () => {
    const { responseWeather } = route.params;

    const { data } = responseWeather;
    let weatherResponse = {};
    weatherResponse['latestWeather'] = data.list[0];
    weatherResponse['dayWeather'] = data.list.splice(1, 5);
    weatherResponse['cityName'] = data.city.name;

    setCityWeatherInfo(weatherResponse);
  }

  formatDateWeatherReceived = () => {
    return moment(cityWeatherInfo?.latestWeather?.dt_txt).format('HH:mm');
  }

  if (!pageLoaded) {
    return (
      <LoadingContainer>
        <ActivityIndicator
          size="small"
          color="#b9b9b9"
        />
        <LoadingText>Loading...</LoadingText>
      </LoadingContainer>
    )
  }

  return (
    <>
      <Container>
        <BackgroundDetailsBox>

          <ImageBackground
            resizeMode="cover"
            imageStyle={{ width: width }}
            source={locationTheme.backgroundImage}
          >

            <WeatherDetail>
              <WeatherTime>{formatDateWeatherReceived()}</WeatherTime>
              <WeatherTempDetail>{cityWeatherInfo?.latestWeather?.weather[0]?.description}</WeatherTempDetail>
              <WeatherTemp>{Math.round(cityWeatherInfo?.latestWeather?.main?.temp)}°</WeatherTemp>
            </WeatherDetail>
            <Wave width={800} height={100} />

          </ImageBackground>


        </BackgroundDetailsBox>
      </Container>

      <ContainerFlex>
        <InfoContainer>

          <IconContainer>
            <Icon
              raised
              reverse
              type='font-awesome'
              name='plus'
              color={locationTheme.color}
              reverseColor='#fff'
            />
          </IconContainer>

          <CityName color={locationTheme.color}>{cityWeatherInfo?.cityName}</CityName>

          <WeatherContainer>
            <WeatherList dayWeather={cityWeatherInfo?.dayWeather} />
          </WeatherContainer>

        </InfoContainer>

      </ContainerFlex>
    </>
  );

}