import styled from 'styled-components';

export const Container = styled.ImageBackground`
  height: 130px;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const CardContent = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const CityInfo = styled.View``;

export const CityName = styled.Text`
  font-size: 25px;
  font-weight: 800;
  color: #fff;
`;

export const CountryName = styled.Text`
  font-size: 15px;
  font-weight: 500;
  color: #fff;
`;
