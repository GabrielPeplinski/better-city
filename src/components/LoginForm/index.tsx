import { Text, View, StyleSheet, Image } from 'react-native';
import React from 'react';
import theme from '@themes/theme';
import Button from '@components/Button';
import Input from '@components/Input';
import PasswordInput from '@components/PasswordInput';
import { Formik } from 'formik';
import LoginValidation from '@validations/LoginValidation';
import { useRouter } from 'expo-router';

const LoginForm = () => {

  const router = useRouter();

  const login = () => {
    router.push({
      pathname: '/main',
    });
  };

  const createUser = () => {
    router.push({
      pathname: '/register',
    });
  };

  return (
    <View style={styles.container}>
      
      <Image
        source={require('@images/better-city-logo.png')}
        style={styles.logoImage}
      />

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LoginValidation}
        onSubmit={(values) => console.log(values)}
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

            <Button labelButton="Login" onPress={login} />
          </View>
        )}
      </Formik>

      <View>
        <Text style={styles.text}>Faça parte da diferença!</Text>
        <Button labelButton="Cadastrar" onPress={createUser} />
      </View>
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
