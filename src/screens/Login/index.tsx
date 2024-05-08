import {Alert, Image, SafeAreaView, Text, View} from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import React, {FC, useCallback} from 'react';
import styles from './styles.ts';
import CustomInput from '../../components/Input';
import Button from '../../components/Button';

const bgImage = require('../../../assets/blue-gradient-background-for-android-phone-2-11614501584zmhanhvtdm.jpg');

interface IProps {
  loginStatus?: 'LOGIN_SUCCESSFUL' | 'LOGIN_FAILED' | 'DEFAULT';
  loading?: boolean;
}
const Login: FC<IProps> = ({loginStatus, loading}) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const goToHome = useCallback(() => {
    navigation.navigate('Main');
  }, [navigation]);

  if (loginStatus === 'LOGIN_SUCCESSFUL') {
    Alert.alert('Successfully logged in');
  }

  if (loginStatus === 'LOGIN_FAILED') {
    Alert.alert('Login failed');
  }

  if (loading) {
    Alert.alert('loading');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={bgImage} style={styles.bg} />
      <View style={styles.content}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputs}>
          <CustomInput placeholder={'email'} />

          <CustomInput secureTextEntry placeholder={'password'} />
        </View>

        <Button
          name="Login"
          width={350}
          height={45}
          fontSize={22}
          onPress={goToHome}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;
