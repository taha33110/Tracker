import React, {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Addtransaction, zero} from '../features/Transactions/AddSlice';
const Balance = () => {
  const Data = useSelector(state => state.Transaction);
  const amounts = Data.map(e => e.num);

  let total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const dispatch = useDispatch();
  const test = () => {
    dispatch(zero(total));
  };
  if (total < 0) {
    test();
    alert('sorry dont have enough amount ');
  }

  console.log({Data});
  return (
    <View style={styles.container}>
      <Text style={{...styles.font, fontSize: 25, fontWeight: '600'}}>
        Current Balance
      </Text>
      <View style={styles.balance}>
        <Text style={styles.font}>${total}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderStyle: 'solid',
    height: '8%',
  },
  font: {
    fontSize: 20,

    alignSelf: 'center',
  },
  balance: {
    width: '40%',
    height: '40%',
    alignSelf: 'center',
    marginTop: '2%',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    borderRadius: 10,
    borderBottomColor: 'black',
    borderWidth: 0.3,
    backgroundColor: 'white',

    borderWidth: 0.2,
    borderTopEndRadius: 100,
    borderBottomStartRadius: 100,
    borderTopLeftRadius: 20,
    borderBottomEndRadius: 20,
  },
});

export default Balance;
