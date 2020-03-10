import React from 'react';

import {
  Container,
  CardContent,
  CityInfo,
  CityName,
  CountryName
} from './styles';

import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import themeData from '../../util/theme-data';

export default function LocationCard({ navigateTo }) {

  return (
    <TouchableWithoutFeedback onPress={navigateTo}>
      <Container source={themeData[1].backgroundImage} resizeMode="cover" imageStyle={{ borderRadius: 10 }}>
        <CardContent>
          <CityInfo>
            <CityName>Campina Grande</CityName>
            <CountryName>Brasil</CountryName>
          </CityInfo>
        </CardContent>
      </Container>
    </TouchableWithoutFeedback>
  );
}
