import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f3ca6',
    width: Dimensions.get('window').width,
    height: 58,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'white',
    fontFamily: 'Pacifico Regular',
  },
});
