import React, { useState, useEffect } from 'react';
import { ActivityIndicator, AsyncStorage, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

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
  LoadingText,
  ContainerEmptyLocations,
  EmptyLocationText
} from './styles.js';

import { searchCityWeather } from '../../services/api';

export default function DashboardPage({ navigation }) {
  const [searchText, setSearchText] = useState('');
  const [savedLocations, setSavedLocations] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAsyncStorageData();
  }, []);

  searchWeather = () => {
    setLoading(true);
    searchCityWeather(searchText).then((response) => {
      navigation.navigate('Details', { responseWeather: response, onGoBack: () => this.getAsyncStorageData() });
      setLoading(false);
    });
  };

  getAsyncStorageData = async () => {
    let locations = await AsyncStorage.getItem('locations');
    locations = JSON.parse(locations);

    if (locations) {
      setSavedLocations(locations);
      setSearchText('');
    }
  }

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

  renderEmptySavedLocations = () => {
    return (
      <ContainerEmptyLocations>
        <EmptyLocationText>You dont't have saved locations yet. :(</EmptyLocationText>
      </ContainerEmptyLocations>
    );
  }

  return loading ? (showLoading())
    :
    (
      <Container>
        <SearchLocationContainer>
          <SearchLocationInput
            autoCapitalize="words"
            autoCompleteType="off"
            autoCorrect={false}
            numberOfLines={1}
            multiline
            placeholder="Search for a city"
            onChangeText={(text) => { setSearchText(text) }}
            value={searchText}
          />
          <SearchLocationButton onPress={() => { searchWeather() }}>
            <SearchLocationButtonText>Search</SearchLocationButtonText>
          </SearchLocationButton>
        </SearchLocationContainer>

        {savedLocations.length ?
          (<ScrollContainer>

            <LocationsContainer>
              <LocationText>Your Saved Locations</LocationText>
              <FlatList
                data={savedLocations}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                  <LocationCard
                    savedLocation={item}
                    navigateTo={() => navigation.navigate('Details', { cityName: item.cityName, onGoBack: () => this.getAsyncStorageData() })}
                  />
                )}
              />
            </LocationsContainer>
          </ScrollContainer >)
          : renderEmptySavedLocations()}
      </Container >
    );
}
