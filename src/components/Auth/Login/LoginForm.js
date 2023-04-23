import React from 'react';
import { Text, TextInput, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';
import { styles } from './login.styles';

const LoginForm = ({ isRegistering, formAnimatedStyle }) => {
  return (
    <Animated.View style={[styles.form, formAnimatedStyle]}>
      {isRegistering && (
        <TextInput
          placeholder='Username'
          placeholderTextColor='#253F62'
          style={styles.input}
        />
      )}
      <TextInput
        placeholder='Email'
        keyboardType='email-address'
        placeholderTextColor='#253F62'
        style={styles.input}
      />
      <TextInput
        placeholder='Password'
        secureTextEntry
        placeholderTextColor='#253F62'
        style={styles.input}
      />
      <TouchableOpacity activeOpacity={0.7} style={styles.btn}>
        <Text style={styles.btnText}>
          {isRegistering ? 'Register' : 'Log in'}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default LoginForm;
