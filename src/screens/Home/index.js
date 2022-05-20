import {
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {Component, useState, useEffect, useCallback} from 'react';
import {styles} from './style';
import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import moment from 'moment';
import Header from '../../components/Header';
import Card from '../../components/Card';

export const Home = () => {
  const [data, setData] = useState();
  const [feito, setFeito] = useState();
  const navigation = useNavigation();
  const hoje = new Date();

  async function fetchData() {
    const response = await AsyncStorage.getItem('@lembreme:tasks');
    const data = response ? JSON.parse(response) : {};
    setData(data.sort((a, b) => b.priori - a.priori));
    console.log('fetchData   ' + JSON.stringify(data));
  }
  // console.log(data);

  const confirmDelete = id =>
    Alert.alert('Removendo Tarefa!', 'Deseja mesmo remover essa tarefa?', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => handleRemove(id),
      },
    ]);

  async function handleRemove(id) {
    const response = await AsyncStorage.getItem('@lembreme:tasks');
    const previousData = response ? JSON.parse(response) : [];

    const data = previousData.filter(item => item.id !== id);
    AsyncStorage.setItem('@lembreme:tasks', JSON.stringify(data));
    setData(data.sort((a, b) => b.priori - a.priori));
    setFeito(!feito);
    console.log(data);
    console.log('handleRemove   ' + JSON.stringify(data));
  }

  async function handleCheck(id) {
    const response = await AsyncStorage.getItem('@lembreme:tasks');
    const previousData = response ? JSON.parse(response) : [];
    previousData.sort((a, b) => b.priori - a.priori);

    const index = previousData.map(item => item.id).indexOf(id);
    data[index].feito = !data[index].feito;
    AsyncStorage.setItem('@lembreme:tasks', JSON.stringify(data));
    setData(data.sort((a, b) => b.priori - a.priori));
    setFeito(!feito);
    console.log('handleCheck   ' + JSON.stringify(data));
  }

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, []),
  );

  return (
    <View style={styles.Container}>
      <Header />
      <View>
        <Text style={styles.Titulo}>Lista</Text>
      </View>

      <FlatList
        data={data}
        style={styles.Lista}
        extraData={feito}
        renderItem={({item}) => (
          <Card
            item={item}
            onRemove={() => confirmDelete(item.id)}
            onCheck={() => handleCheck(item.id)}
          />
        )}
      />

      <TouchableOpacity onPress={() => navigation.navigate('Form')}>
        <Icon
          name="pluscircle"
          size={50}
          color="#FFFFFF"
          style={styles.Botao}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Home;
