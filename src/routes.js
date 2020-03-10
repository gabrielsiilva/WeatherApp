import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import DashboardPage from './pages/DashboardPage';
import LocationDetailPage from './pages/LocationDetailPage';

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName='Dashboard'
        screenOptions={{
          headerTitle: 'MyWheater App',
          headerTintColor: '#000',
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
        }}
        >
        <Screen
          name="Dashboard"
          component={DashboardPage}
          />
        <Screen
          name="Details"
          component={LocationDetailPage}
          options={{
            headerTitle: 'City Weather',
            headerLeftContainerStyle: { marginLeft: 10 }
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}