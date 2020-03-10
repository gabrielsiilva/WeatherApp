import React from 'react';
import moment from 'moment';

import {
  Container,
  WeatherBlock,
  WeatherInfoText
} from './styles';

import SunnyCloud from '../../../assets/sunnycloud.svg';
import Sunny from '../../../assets/sunny.svg';
import PartialyRain from '../../../assets/partialyrain.svg';
import Rain from '../../../assets/rain.svg';
import Moon from '../../../assets/moon.svg';


export default function WeatherInfo({ data }) {

  const formatDateWeatherReceived = () => {
    return moment(data.dt_txt).format('HH:mm');
  }

  const getWeatherIcon = (temp) => {
    if (temp > 25) return <Sunny width={30} height={30} />
    if (temp > 20) return <SunnyCloud width={30} height={30} />
    if (temp >= 13) return <PartialyRain width={30} height={30} />
    if (temp > 9) return <Rain width={30} height={30} />
  }


  return (
    <Container>
      <WeatherBlock>
        <WeatherInfoText>{~~data.main.temp}°</WeatherInfoText>
        {getWeatherIcon(~~data.main.temp)}
        <WeatherInfoText>{formatDateWeatherReceived()}</WeatherInfoText>
      </WeatherBlock>
    </Container>
  );
}
