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
import {useSelector} from 'react-redux';

const AccountSummury = props => {
  const data = useSelector(state => state.Transaction);
  const dataAmount = data.map(trans => trans.num);
  const income = dataAmount.filter(t => t > 0).reduce((f, e) => (f += e), 0);
  const expese = Math.abs(
    dataAmount.filter(t => t < 0).reduce((f, e) => (f += e), 0),
  );

  return (
    <View style={styles.container}>
      <View style={styles.SndCointainer}>
        <View style={styles.box}>
          <Text style={styles.textIncome}>Income</Text>
          <Text style={styles.numbers}>${income}</Text>
        </View>
        <View style={styles.lineView}>
          <View style={styles.line}></View>
        </View>
        <View style={styles.box}>
          <Text style={styles.textIncome}>Expense</Text>
          <Text style={{...styles.numbers, marginLeft: '40%'}}>${expese}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: '5%',
    width: '80%',
    alignSelf: 'center',
    height: '11%',
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    borderRadius: 10,
    borderBottomColor: 'black',
    borderWidth: 0.3,
    backgroundColor: 'white',
  },
  textIncome: {
    alignSelf: 'center',
    fontSize: 23,
    fontWeight: '600',
    marginTop: '5%',
  },
  SndCointainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  line: {
    backgroundColor: 'black',
    height: '80%',
    width: '2%',
    alignSelf: 'center',
    marginTop: '20%',
  },
  lineView: {
    flexDirection: 'column',
    width: '10%',
  },
  box: {
    height: '100%',
    width: '40%',
    flexDirection: 'column',
  },
  numbers: {
    fontSize: 20,
    marginTop: '8%',
    marginLeft: '35%',
    fontWeight: '500',
  },
});

export default AccountSummury;

{
  /* <View style={styles.container}>
      <View style={styles.column}>
        <Text style={styles.textIncome}>Income</Text>
        <Text style={styles.numbers}>+${income}</Text>
      </View>
      <View style={styles.line}></View>
      <View style={styles.column}>
        <Text style={styles.textIncome}>Expense</Text>
        <Text style={styles.numbers}>${expese}</Text>
      </View>
    </View> */
}
