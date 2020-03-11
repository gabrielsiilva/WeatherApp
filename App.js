import React from 'react';
import Routes from './src/routes';
import { StatusBar, YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Expected style',
  'Non-serializable',
  'VirtualizedLists',
  'VirtualizedList',

]);

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Routes />
    </>
  )
}
