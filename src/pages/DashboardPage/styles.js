import styled from 'styled-components';

export const Container = styled.View`
  width: 95%;
  align-self: center;
  flex: 1;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoadingText = styled.Text`
  margin-top: 20px;
  font-size: 15px;
`;

export const ScrollContainer = styled.ScrollView`
  align-content: center;
`;

export const SearchLocationContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px 0px;
`;

export const SearchLocationInput = styled.TextInput`
  flex: 3;
  background-color: #e5e4ea;
  height: 40px;
  border-radius: 10px;
  color: #000;
  padding: 10px;
`;

export const SearchLocationButton = styled.TouchableOpacity`
  flex: 1;
  margin-left: 10px;
  align-items: center;
  justify-content: center;
  border: 1px solid blue;
  height: 40px;
  border-radius: 10px;
`;

export const SearchLocationButtonText = styled.Text`
  color: blue;
`;

export const LocationsContainer = styled.View`
  flex: 1;
  width: 100%;
  align-self: center;
`;

export const LocationText = styled.Text`
  color: #939393;
  font-weight: 600;
  font-size: 15px;
  margin-bottom: 15px;
`;
