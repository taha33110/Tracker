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
} from 'react-native';
import 'react-native-get-random-values';
import Button from '../Components/Button';
import {useDispatch, useSelector} from 'react-redux';
import {
  Currency,
  Balance,
  index,
  Addtransaction,
} from '../features/Transactions/AddSlice';

const AddTransaction = () => {
  const a = useSelector(s => s.transactions);
  const [val, SetVal] = useState(0);
  const [des, SetDes] = useState();
  // const [id, setId] = useState();
  const dispatch = useDispatch();
  // var change = id;

  function handle() {
    dispatch(Addtransaction({id: Date.now(), text: des, num: val}));

    SetVal('');
    SetDes('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add Transaction</Text>
      <View style={styles.line}></View>

      <Text style={styles.fieldText}>Add description</Text>
      <TextInput
        value={des}
        placeholder="Enter Description"
        style={styles.input}
        onChangeText={e => SetDes(e)}
      />

      <Text style={styles.fieldText}> Add Amount</Text>
      <TextInput
        placeholder="Enter Amount"
        value={val}
        style={styles.input}
        onChangeText={e => SetVal(parseInt(e))}
      />
      {val === 0 || (val == '' && des == 0) || des == '' ? (
        <Button
          name={'Add Transaction'}
          onPress={() => alert('write values')}
        />
      ) : (
        <Button onPress={handle} name={'Add Transaction'} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '2%',
    flex: 1,
    width: '100%',
  },
  text: {
    alignSelf: 'center',
    marginTop: '3%',
    fontSize: 25,
    fontWeight: '600',
  },
  line: {
    borderWidth: 0.5,
    borderColor: 'black',
    marginTop: '4%',
    width: '80%',
    alignSelf: 'center',
  },
  input: {
    width: '80%',
    height: '12%',
    borderColor: 'black',
    borderWidth: 0.5,
    alignSelf: 'center',
    marginTop: '2%',
    paddingLeft: '3%',
    borderRadius: 15,
  },
  fieldText: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: '2%',
  },
});

export default AddTransaction;
