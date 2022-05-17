import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#0f3ca6',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 58,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#FFFFFF',
  },
  input: {
    backgroundColor: '#e8e8eb',
    padding: 20,
    marginVertical: 10,
    width: Dimensions.get('window').width * 0.8,
    borderColor: '#b5b5b5',
    borderWidth: 1,
    borderRadius: 15,
    fontSize: 18,
  },
  checkbox: {
    marginVertical: 20,
  },
  data: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
