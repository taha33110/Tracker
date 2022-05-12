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

const Header = props => {
  return (
    <View style={styles.appBar}>
      <Text style={styles.HeaderText}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: '#EBE8FC',
    height: '10%',
    width: '100%',
  },
  HeaderText: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: '12%',
  },
});

export default Header;
