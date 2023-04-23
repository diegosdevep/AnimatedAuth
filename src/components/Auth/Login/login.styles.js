import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  form: {
    position: 'absolute',
    zIndex: -1,
    justifyContent: 'center',
    ...StyleSheet.absoluteFill,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#253F62',
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 10,
  },
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
