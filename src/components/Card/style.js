import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    width: '100%',
    backgroundColor: '#b8cdff',
    borderRadius: 15,
    padding: 10,
    marginTop: 20,
  },
  CardFeito: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    width: '100%',
    backgroundColor: '#83f7b7',
    borderRadius: 15,
    padding: 10,
    marginTop: 20,
  },
  Vencido: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    width: '100%',
    backgroundColor: '#f78383',
    borderRadius: 15,
    padding: 10,
    marginTop: 20,
  },
  BotaoCheck: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'green',
    padding: 10,
    color: '#FFFFFF',
    borderRadius: 20,
  },
  BotaoRemove: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'red',
    padding: 10,
    color: '#FFFFFF',
    borderRadius: 20,
  },
  txtFeito: {
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    textDecorationLine: 'line-through',
  },
  txtNaoFeito: {
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default styles;
