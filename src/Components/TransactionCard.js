// import React from 'react';

// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
//   TouchableOpacity,
// } from 'react-native';
// import {useSelector, useDispatch} from 'react-redux';

// const TransactionCard = ({del}) => {
//   const Data = useSelector(state => state.Balance.transactions);
//   const id = useSelector(state => state.Balance.addNum);
//   // console.log({Data});
//   const sign = Data.amount > 0 ? '+' : '-';
//   return (

//   );
// };

// const styles = StyleSheet.create({
//   incomeCard: {
//     borderWidth: 0.5,
//     borderColor: 'black',
//     flex: 1,
//     marginTop: '10%',
//     height: '32%',
//     width: '80%',
//     alignSelf: 'center',
//     borderRightColor: 'gold',
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
// });

// export default TransactionCard;
