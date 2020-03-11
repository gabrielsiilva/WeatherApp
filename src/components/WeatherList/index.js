import React from 'react';

import WeahterInfo from '../../components/WeatherInfo';

import {
  WeatherFlatList
} from './styles';

export default function WeatherList({ dayWeather }) {

  return (
    <>
        <WeatherFlatList
          data={dayWeather}
          keyExtractor={item => item.dt.toString()}
          horizontal={true}
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <WeahterInfo data={item} />
          )}
        />
    </>
  );
}
