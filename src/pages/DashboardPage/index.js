import React, { useState } from 'react';

import LocationCard from '../../components/LocationCard';

import {
  Container,
  LocationsContainer,
  LocationText,
  SearchLocationButton,
  SearchLocationContainer,
  SearchLocationInput,
  SearchLocationButtonText,
  ScrollContainer,
  LoadingContainer,
  LoadingText
} from './styles.js';

import { searchCityWeather } from '../../services/api';
import { ActivityIndicator } from 'react-native';

export default function DashboardPage({ navigation }) {
  const [searchText, setSearchText] = useState('');

  handleChangeText = text => {
    setSearchText(text);
  };

  searchWeather = async () => {
    showLoading()
    const response = await searchCityWeather(searchText);
    navigation.navigate('Details', { responseWeather: response });
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

  return (
    <Container>
      <SearchLocationContainer>
        <SearchLocationInput
          autoCapitalize="words"
          autoCompleteType="off"
          autoCorrect={false}
          numberOfLines={1}
          multiline
          placeholder="Search for a city"
          onChangeText={(text) => { handleChangeText(text) }}
          value={searchText}
        />
        <SearchLocationButton onPress={() => { searchWeather() }}>
          <SearchLocationButtonText>Search</SearchLocationButtonText>
        </SearchLocationButton>
      </SearchLocationContainer>

      <ScrollContainer>

        <LocationsContainer>
          <LocationText>Your Saved Locations</LocationText>
          <LocationCard navigateTo={() => navigation.navigate('Details')} />
        </LocationsContainer>
      </ScrollContainer>
    </Container>
  );
}
