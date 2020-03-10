import styled from 'styled-components';

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoadingText = styled.Text`
  margin-top: 20px;
  font-size: 15px;
`;

export const Container = styled.View`
  flex: 2;
  align-items: center;
  background-color: #fff;
`;

export const WeatherDetail = styled.View`
  bottom: 20%;
  left: 28%;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const WeatherTime = styled.Text`
  color: #fff;
  margin-bottom: 10px;
  font-size: 15px;
`;

export const WeatherTemp = styled.Text`
  color: #fff;
  font-weight: 400;
  font-size: 100px;
`;

export const WeatherTempDetail = styled.Text`
  color: #fff;
  font-size: 30px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const ContainerFlex = styled.View`
  flex: 1;
  background-color: #fff;
  width: 100%;
`;

export const BackgroundDetailsBox = styled.View`
  height: 100%;
  justify-content: flex-end;
`;

export const ImageBackground = styled.ImageBackground`
  width: 220%;
  height: 130%;
  justify-content: flex-end;
  position: relative;
`;

export const InfoContainer = styled.View`
  width: 100%;
  padding: 0px 20px;
  position: relative;
  bottom: 30%;
`;

export const CityName = styled.Text`
  font-size: 25px;
  font-weight: 800;
  color: ${props => props.color ? props.color : '#000' };
  text-transform: uppercase;
`;

export const WeatherContainer = styled.View`
  flex-direction: row;
  margin-top: 7%;
`;

export const IconContainer = styled.View`
  align-self: flex-end;
  margin-right: 9%;
`;
