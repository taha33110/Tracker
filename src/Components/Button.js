import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Button = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.btnText}>{props.name}</Text>
    </TouchableOpacity>
  );
};

Button.defaultprops = {
  name: 'button',
};

const styles = StyleSheet.create({
  button: {
    width: '80%',
    height: '14%',
    backgroundColor: '#B19CD7',
    alignSelf: 'center',
    marginTop: '5%',
    borderRadius: 20,
  },
  btnText: {
    alignSelf: 'center',
    marginTop: '5.4%',
    fontWeight: '800',
    color: 'white',
  },
});

export default Button;
