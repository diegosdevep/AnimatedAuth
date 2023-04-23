import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './btnauth.styles';

const BtnAuth = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.btn}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default BtnAuth;
