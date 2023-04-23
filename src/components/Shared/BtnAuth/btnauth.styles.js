import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#253F62',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    marginHorizontal: '5%',
    marginTop: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.84,
  },
  btnText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
});
