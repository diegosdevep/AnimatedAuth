import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  close: {
    width: 40,
    height: 40,
    marginBottom: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.84,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    top: Platform.OS === 'ios' ? -65 : -40,
  },
});
