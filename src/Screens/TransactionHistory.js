import React, {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import TransactionCard from '../Components/TransactionCard';
import {useSelector} from 'react-redux';
import Balance from './Balance';
import AddTransaction from './AddTransaction';
import AccountSummury from './AccountSummury';
import Transaction from '../features/Transactions/Transaction';

const TransactionHistory = () => {
  const data = useSelector(state => state.Transaction);

  console.log({data});

  return (
    <View style={styles.container}>
      <Balance />
      <AccountSummury />
      <Text style={styles.text1}>Transaction History</Text>
      <View style={styles.line}></View>
      {/* {data.map(transactions => {
        <Transaction transactions={transactions.text} key={transactions.id} />;
      })} */}
      <View style={{height: '26.5%'}}>
        <FlatList
          data={data}
          renderItem={({item}) => {
            return <Transaction key={item.id} transactions={item} />;
          }}
        />
      </View>

      <AddTransaction />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '20%',
  },
  text1: {
    alignSelf: 'center',
    marginTop: '2%',
    fontSize: 25,
    fontWeight: '600',
  },
  line: {
    borderWidth: 0.5,
    borderColor: 'black',

    width: '80%',
    alignSelf: 'center',
  },
  incomeCard: {
    borderWidth: 0.5,
    borderColor: 'black',
    flex: 1,
    marginTop: '10%',
    height: '32%',
    width: '80%',
    alignSelf: 'center',
    borderRightColor: 'gold',
    borderRightWidth: 6,
    borderTopColor: 'grey',
    borderLeftColor: 'grey',
    borderBottomColor: 'grey',
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  text: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
  },
  number: {
    padding: 10,
    marginLeft: '30%',
  },
  cross: {
    backgroundColor: 'red',
    height: '100%',
    width: '10%',
  },
  crossText: {
    fontSize: 20,
    marginLeft: '30%',
    marginTop: '15%',
  },
});

export default TransactionHistory;
