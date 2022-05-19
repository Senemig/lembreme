import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    width: '100%',
    borderRadius: 15,
    paddingVertical: 10,
    marginTop: 20,
  },
  Card: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    backgroundColor: '#b8cdff',
  },
  CardFeito: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    backgroundColor: '#83f7b7',
  },
  Vencido: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    backgroundColor: '#f78383',
  },
  Prioridade: {
    borderColor: '#d90000',
    borderWidth: 4,
  },
  BotaoCheck: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'green',
    paddingHorizontal: 10,
    paddingVertical: 30,
    color: '#FFFFFF',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    height: 80,
  },
  BotaoRemove: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 30,
    color: '#FFFFFF',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    height: 80,
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
