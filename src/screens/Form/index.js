import {Text, TextInput, View, Button, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import 'moment/locale/pt-br';
import React, {Component, useState} from 'react';
import styles from './style';
import uuid from 'react-native-uuid';

const Form = () => {
  moment.updateLocale('pt-br');
  const navigation = useNavigation();
  const [titulo, setTitulo] = useState('');
  const [data, setData] = useState(new Date());
  const [feito, setFeito] = useState(false);
  const [open, setOpen] = useState(false);

  async function saveData() {
    const id = uuid.v4();

    const newData = {
      id,
      titulo,
      data,
      feito,
    };

    // console.log(newData);

    const response = await AsyncStorage.getItem('@lembreme:tasks');
    // console.log('response = ' + response);
    // console.log('response type = ' + typeof response);
    const responseData = response ? JSON.parse(response) : [];
    // console.log('responseData = ' + responseData);

    const conjunto = [...responseData, newData];
    // console.log('conjunto = ' + conjunto);

    await AsyncStorage.setItem('@lembreme:tasks', JSON.stringify(conjunto));

    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Nova Tarefa</Text>
      </View>
      <>
        <TextInput
          placeholder="Título da Tarefa"
          onChangeText={text => setTitulo(text)}
          style={styles.input}
          maxLength={25}
        />
        <TouchableOpacity onPress={() => setOpen(true)} style={styles.input}>
          <Text style={styles.data}>{moment(data).format('DD/MM/YYYY')}</Text>
        </TouchableOpacity>
        <DatePicker
          modal
          mode={'date'}
          open={open}
          date={data}
          onConfirm={data => {
            setOpen(false);
            setData(data);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
        <BouncyCheckbox
          size={25}
          fillColor="green"
          unfillColor="#FFFFFF"
          text="Concluído"
          iconStyle={{borderColor: 'green'}}
          textStyle={{fontFamily: 'JosefinSans-Regular'}}
          style={styles.checkbox}
          onPress={() => setFeito(!feito)}
        />
      </>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: 150,
        }}>
        <Button title="Salvar" onPress={saveData} />
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

export default Form;
