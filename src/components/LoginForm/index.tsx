import {
  Text,
  View,
  StyleSheet,
  Image,
  Alert,
  Keyboard
} from 'react-native';
import React, { useState } from 'react';
import theme from '@themes/theme';
import Button from '@components/Button';
import Input from '@components/Input';
import PasswordInput from '@components/PasswordInput';
import { Formik } from 'formik';
import LoginValidation from '@validations/LoginValidation';
import { useRouter } from 'expo-router';
import useAuth from '@hooks/useAuth';
import Loading from '@components/Loading';

const LoginForm = () => {
  const router = useRouter();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  interface LoginProps {
    email: string;
    password: string;
  }

  const handleLogin = async (values: LoginProps) => {
    try {
      Keyboard.dismiss();

      setIsLoading(true);

      await login(values.email, values.password);

      router.push({
        pathname: '/main',
      });

      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      Alert.alert('Ocorreu um erro ao realizar o login!');
      console.log(error);
    }
  };

  const createUser = () => {
    router.push({
      pathname: '/register',
    });
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Image
            source={require('@images/better-city-logo.png')}
            style={styles.logoImage}
          />
          <Formik
            initialValues={{
              email: 'gabriel@gmail.com',
              password: '123456',
            }}
            validationSchema={LoginValidation}
            onSubmit={(values) => handleLogin(values)}
          >
            {({ handleChange, handleSubmit, values, errors }) => (
              <View>
                <Input
                  label="Email"
                  placeholder="Seu email"
                  value={values.email}
                  onChange={handleChange('email')}
                />
                {errors.email && (
                  <Text style={theme.formErrors}>{errors.email}</Text>
                )}

                <PasswordInput
                  label="Senha"
                  placeholder="Digite sua senha"
                  value={values.password}
                  onChange={handleChange('password')}
                />
                {errors.password && (
                  <Text style={theme.formErrors}>{errors.password}</Text>
                )}

                <Button labelButton="Login" onPress={handleSubmit} />
              </View>
            )}
          </Formik>
          <View>
            <Text style={styles.text}>Faça parte da diferença!</Text>
            <Button labelButton="Cadastrar" onPress={createUser} />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
  },
  form: {
    width: '80%',
  },
  logoImage: {
    width: 350,
    height: 200,
  },
  text: {
    color: 'white',
  },
});

export default LoginForm;
