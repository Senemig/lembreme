import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import moment from 'moment';
import styles from './style';
import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Card = ({item, onRemove, onCheck}) => {
  const dataFormat = moment(item.data).format('DD/MM/YYYY');
  const dateDiff = moment(item.data).diff(new Date(), 'days');

  return (
    <View
      key={item.id}
      style={
        dateDiff < 0
          ? styles.Vencido
          : item.feito
          ? styles.CardFeito
          : styles.Card
      }>
      <Icon
        name="check"
        color="#FFFFFF"
        style={styles.BotaoCheck}
        onPress={onCheck}
      />
      <View style={{alignItems: 'center'}}>
        <Text style={item.feito ? styles.txtFeito : styles.txtNaoFeito}>
          {item.titulo}
        </Text>
        <Text>{dataFormat}</Text>
      </View>
      <Icon
        name="delete"
        color="#FFFFFF"
        style={styles.BotaoRemove}
        onPress={onRemove}
      />
    </View>
  );
};

export default Card;
