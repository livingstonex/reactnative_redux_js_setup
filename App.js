import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/login_screen';
import { Provider } from 'react-redux';
import { store } from './redux';

export default function App() {
  return (
    <Provider store={store}>
      <LoginScreen />
    </Provider>
  );
}

