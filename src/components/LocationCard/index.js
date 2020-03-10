import React from 'react';

import {
  Container,
  CardContent,
  CityInfo,
  CityName
} from './styles';

import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function LocationCard({ navigateTo, savedLocation }) {

  return (
    <TouchableWithoutFeedback onPress={navigateTo}>
      <Container source={savedLocation?.theme?.backgroundImage} resizeMode="cover" imageStyle={{ borderRadius: 10 }}>
        <CardContent>
          <CityInfo>
            <CityName>{savedLocation.cityName}</CityName>
          </CityInfo>
        </CardContent>
      </Container>
    </TouchableWithoutFeedback>
  );
}
