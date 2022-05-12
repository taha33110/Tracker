import React, {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {del} from './AddSlice';
import {useDispatch, useSelector} from 'react-redux';

const Transaction = ({transactions, borderC}) => {
  const sign = transactions.num > 0 ? '+' : '-';
  const dispatch = useDispatch();
  var color;
  if (sign == '+') {
    color = 'green';
  } else {
    color = 'red';
  }

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => dispatch(del(transactions.id))}
          style={styles.cross}>
          <Text style={styles.x}>X</Text>
        </TouchableOpacity>
        <View style={styles.textField}>
          <Text numberOfLines={1} style={styles.text}>
            {transactions.text}
          </Text>
        </View>
        <View style={styles.amounutField}>
          <Text style={styles.text}>${transactions.num}</Text>
        </View>
        <View
          style={{marginLeft: 3, width: '2%', backgroundColor: color}}></View>
      </View>
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  card: {
    width: '78%',
    height: 30,
    alignSelf: 'center',
    marginTop: '8%',
    flex: 1,
    borderWidth: 0.2,
    borderColor: 'grey',
    marginRight: '2%',
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    backgroundColor: 'white',

    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    textShadowColor: false,
  },
  row: {
    flexDirection: 'row',
  },
  cross: {
    height: 30,
    width: '7%',
    backgroundColor: 'red',
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
  },
  textField: {
    height: '100%',
    width: '60%',
  },
  amounutField: {
    height: '100%',
    width: '30%',
  },

  text: {
    fontSize: 17,

    marginLeft: '8%',
    marginTop: '2.5%',
  },
  x: {
    fontSize: 20,
    marginLeft: '28%',
    marginTop: '15%',
  },

  //   incomeCard: {
  //     borderWidth: 0.5,
  //     borderColor: 'black',
  //     marginTop: '10%',
  //     height: 36,
  //     width: '80%',
  //     alignSelf: 'center',
  //     borderRightColor: 'white',
  //     borderRightWidth: 6,
  //     borderTopColor: 'grey',
  //     borderLeftColor: 'grey',
  //     borderBottomColor: 'grey',
  //     shadowColor: '#171717',
  //     shadowOffset: {width: 0, height: 1},
  //     shadowOpacity: 0.4,
  //     shadowRadius: 2,
  //   },
  //   text: {
  //     padding: 10,
  //   },
  //   row: {
  //     flexDirection: 'row',
  //   },
  //   number: {
  //     padding: 10,
  //     marginLeft: '30%',
  //   },
  //   cross: {
  //     backgroundColor: 'red',
  //     height: '100%',
  //     width: '10%',
  //   },
  //   crossText: {
  //     fontSize: 20,
  //     marginLeft: '30%',
  //     marginTop: '15%',
  //   },
});
// <View style={styles.incomeCard}>
//   <View style={styles.row}>
//     <TouchableOpacity
//       onPress={() => dispatch(del(transactions.id))}
//       style={styles.cross}>
//       <Text style={styles.crossText}>x</Text>
//     </TouchableOpacity>
//     <Text style={styles.text}>{transactions.text}</Text>
//     <Text style={styles.number}>
//       {sign} ${transactions.num}
//     </Text>
//   </View>
// </View>
