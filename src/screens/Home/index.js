import {
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
  ScrollView,
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
    setData(data);
  }
  // console.log(data);

  async function handleRemove(id) {
    const response = await AsyncStorage.getItem('@lembreme:tasks');
    const previousData = response ? JSON.parse(response) : [];

    const data = previousData.filter(item => item.id !== id);
    AsyncStorage.setItem('@lembreme:tasks', JSON.stringify(data));
    setData(data);
  }

  async function handleCheck(id) {
    const response = await AsyncStorage.getItem('@lembreme:tasks');
    const previousData = response ? JSON.parse(response) : [];

    const index = previousData.map(item => item.id).indexOf(id);
    data[index].feito = !data[index].feito;
    setData(data);
    setFeito(!feito);
    console.log(hoje);
    console.log(data[index].data);
    console.log(moment(data[index].data).diff(hoje));
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
            onRemove={() => handleRemove(item.id)}
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
