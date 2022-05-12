/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Header from './src/Components/Header';
import Transaction from './src/features/Transactions/Transaction';
import TransactionHistory from './src/Screens/TransactionHistory';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Header name="Test Application" />

      <View style={{flex: 1}}>
        <TransactionHistory />
      </View>
    </View>
  );
};

export default App;
