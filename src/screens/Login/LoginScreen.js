import {
  Dimensions,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  View,
} from 'react-native';
import Svg, { Image, Ellipse, ClipPath } from 'react-native-svg';
import Animated from 'react-native-reanimated';
import useImagePosition from '../../utils/animations';
import LoginForm from '../../components/Auth/Login/LoginForm';
import { styles } from './login.styles';
import BtnAuth from '../../components/Shared/BtnAuth/BtnAuth';

export default function LoginScreen() {
  const { width, height } = Dimensions.get('window');

  const {
    buttonAnimatedStyle,
    formAnimatedStyle,
    imageAnimatedStyle,
    imagePosition,
    closerButtonAnimatedStyle,
    isRegistering,
    registerHandler,
    loginHandler,
  } = useImagePosition();

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
              href={require('../../../assets/bg.png')}
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
            <BtnAuth title='Log in' onPress={loginHandler} />
          </Animated.View>
          <Animated.View style={buttonAnimatedStyle}>
            <BtnAuth title='Register' onPress={registerHandler} />
          </Animated.View>

          <LoginForm
            isRegistering={isRegistering}
            formAnimatedStyle={formAnimatedStyle}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
