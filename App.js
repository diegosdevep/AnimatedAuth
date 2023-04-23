import {
  Dimensions,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  View,
} from 'react-native';
import Svg, { Image, Ellipse, ClipPath } from 'react-native-svg';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
  withDelay,
} from 'react-native-reanimated';
import { useState } from 'react';

export default function App() {
  const [isRegistering, setIsRegistering] = useState(false);

  const { width, height } = Dimensions.get('window');
  const imagePosition = useSharedValue(1);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(
      imagePosition.value,
      [0, 1],
      [-height / 2, 0]
    );
    return {
      transform: [
        { translateY: withTiming(interpolation, { duration: 1000 }) },
      ],
    };
  });

  const buttonAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [250, 0]);
    return {
      opacity: withTiming(imagePosition.value, { duration: 500 }),
      transform: [
        { translateY: withTiming(interpolation, { duration: 1000 }) },
      ],
    };
  });

  const closerButtonAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [180, 360]);
    return {
      opacity: withTiming(imagePosition.value === 1 ? 0 : 1, { duration: 800 }),
      transform: [
        { rotate: withTiming(interpolation + 'deg', { duration: 1000 }) },
      ],
    };
  });

  const formAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity:
        imagePosition.value === 0
          ? withDelay(400, withTiming(1, { duration: 800 }))
          : withTiming(0, { duration: 300 }),
    };
  });

  const loginHandler = () => {
    imagePosition.value = 0;
    if (isRegistering) {
      setIsRegistering(false);
    }
  };

  const registerHandler = () => {
    imagePosition.value = 0;
    if (!isRegistering) {
      setIsRegistering(true);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 10}
    >
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyle]}>
          <Svg width={width} height={height + 100}>
            <ClipPath id='clipPathId'>
              <Ellipse cx={width / 2} rx={height} ry={height + 100} />
            </ClipPath>
            <Image
              width={width + 20}
              height={height + 100}
              preserveAspectRatio='xMidYMid slice'
              href={require('./assets/bg.png')}
              clipPath='url(#clipPathId)'
            />
          </Svg>
        </Animated.View>

        <View style={{ marginBottom: 10, height: height / 3 }}>
          <Animated.View
            style={[
              styles.close,
              closerButtonAnimatedStyle,
              { backgroundColor: '#253F62' },
            ]}
          >
            <Text
              style={{ fontSize: 18, color: '#FFF' }}
              onPress={() => (imagePosition.value = 1)}
            >
              X
            </Text>
          </Animated.View>
          <Animated.View style={buttonAnimatedStyle}>
            <TouchableOpacity
              onPress={loginHandler}
              activeOpacity={0.7}
              style={styles.btn}
            >
              <Text style={styles.btnText}>Log in</Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View style={buttonAnimatedStyle}>
            <TouchableOpacity
              onPress={registerHandler}
              activeOpacity={0.7}
              style={styles.btn}
            >
              <Text style={styles.btnText}>Register</Text>
            </TouchableOpacity>
          </Animated.View>

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
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  content: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
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
    top: Platform.OS === 'ios' ? -65 : -50,
  },
});
