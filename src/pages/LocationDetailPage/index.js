import React, { useState, useEffect } from 'react';
import { Icon } from 'react-native-elements'
import { ActivityIndicator, Dimensions, AsyncStorage } from 'react-native';
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

import { searchCityWeather } from '../../services/api';

export default function LocationDetailPage({ route, navigation }) {

  const [locationTheme, setLocationTheme] = useState();
  const [cityWeatherInfo, setCityWeatherInfo] = useState();
  const [pageLoaded, setPageLoaded] = useState(false);
  let width = Dimensions.get("window").width + 300;

  useEffect(() => {

    const { cityName } = route.params;
    cityName
      ? searchCityByName(cityName)
      : receiveDataFromSearch();
    setLocationTheme(themeData[Math.floor(Math.random() * themeData.length)]);

    setTimeout(() => {
      setPageLoaded(false);
    }, 1000);

  }, []);

  searchCityByName = async (cityName) => {
    setPageLoaded(true);
    const response = await searchCityWeather(cityName);

    handleResponse(response);
  }

  const receiveDataFromSearch = () => {
    handleResponse(route.params.responseWeather);
  }

  handleResponse = (responseWeather) => {
    const { data } = responseWeather;
    let weatherResponse = {};

    weatherResponse['latestWeather'] = data.list[0];
    weatherResponse['dayWeather'] = data.list.splice(1, 5);
    weatherResponse['cityName'] = data.city.name;
    setCityWeatherInfo(weatherResponse);
  }

  const formatDateWeatherReceived = () => {
    return moment(cityWeatherInfo?.latestWeather?.dt_txt).format('HH:mm');
  }

  const saveLocation = async () => {
    try {
      let savedLocations = await AsyncStorage.getItem('locations');
      savedLocations = JSON.parse(savedLocations);

      if (savedLocations?.length) {
        savedLocations = [...savedLocations, { cityName: cityWeatherInfo.cityName, theme: locationTheme }];
      } else {
        savedLocations = [{ cityName: cityWeatherInfo.cityName, theme: locationTheme }];
      }

      await AsyncStorage.setItem('locations', JSON.stringify(savedLocations));
      route.params.onGoBack();
      navigation.goBack();
    } catch (e) {
      console.log('error =>', e);
    }
  };

  const removeLocation = async () => {
    let savedLocations = await AsyncStorage.getItem('locations');
    savedLocations = JSON.parse(savedLocations);

    savedLocations = savedLocations.filter(location => location.cityName !== route.params.cityName);
    await AsyncStorage.setItem('locations', JSON.stringify(savedLocations));
    route.params.onGoBack();
    navigation.goBack();
  };

  showLoading = () => {
    return (
      <LoadingContainer>
        <ActivityIndicator
          size="small"
          color="#b9b9b9"
        />
        <LoadingText>Loading...</LoadingText>
      </LoadingContainer>
    );
  }

  return pageLoaded ? (showLoading())
    : (
      <>
        <Container>
          <BackgroundDetailsBox>

            <ImageBackground
              resizeMode="cover"
              imageStyle={{ width: width }}
              source={locationTheme?.backgroundImage}
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

              {route.params.cityName ?
                (<Icon
                  raised
                  reverse
                  type='font-awesome'
                  name='times'
                  color='#EE4540'
                  reverseColor='#fff'
                  onPress={() => removeLocation()}
                />)
                :
                (<Icon
                  raised
                  reverse
                  type='font-awesome'
                  name='plus'
                  color={locationTheme?.color}
                  reverseColor='#fff'
                  onPress={() => saveLocation()}
                />)}
            </IconContainer>

            <CityName color={locationTheme?.color}>{cityWeatherInfo?.cityName}</CityName>

            <WeatherContainer>
              <WeatherList dayWeather={cityWeatherInfo?.dayWeather} />
            </WeatherContainer>

          </InfoContainer>

        </ContainerFlex>
      </>
    );
}