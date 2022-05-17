import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import Form from '../../screens/Form';

const {Navigator, Screen} = createNativeStackNavigator();

export default function () {
  return (
    <Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Screen name="Home" component={Home} />
      <Screen name="Form" component={Form} />
    </Navigator>
  );
}
