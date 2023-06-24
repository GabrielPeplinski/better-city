import Button from '@components/Button';
import Input from '@components/Input';
import Loading from '@components/Loading';
import PasswordInput from '@components/PasswordInput';
import { FontAwesome } from '@expo/vector-icons';
import useAuth from '@hooks/useAuth';
import theme from '@themes/theme';
import RegisterValidation from '@validations/RegisterValidation';
import { useRouter } from 'expo-router';
import { Formik } from 'formik';
import { useState } from 'react';
import { View, StyleSheet, Text, Alert, Keyboard } from 'react-native';
import UserPropsInterface from 'src/interfaces/UserPropsInterface';

const RegisterFormCopy = () => {
  const router = useRouter();
  const { register } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (values: UserPropsInterface) => {
    try {
      Keyboard.dismiss();

      setIsLoading(true);

      await register(values.email, values.password);

      router.push({
        pathname: '/index',
      });

      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      Alert.alert('Ocorreu um erro ao realizar seu cadastro!');
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <FontAwesome name="user-circle-o" size={70} color="white" />
          <Formik
            initialValues={{
              email: 'paola@gmail.com',
              password: '123456',
              passwordConfirmation: '123456',
            }}
            validationSchema={RegisterValidation}
            onSubmit={(values) => handleRegister(values)}
          >
            {({ handleChange, handleSubmit, values, errors }) => (
              <View style={styles.form}>
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

                <PasswordInput
                  label="Cofirme sua senha"
                  placeholder="Digite sua senha novamente"
                  value={values.passwordConfirmation}
                  onChange={handleChange('passwordConfirmation')}
                />
                {errors.passwordConfirmation && (
                  <Text style={theme.formErrors}>
                    {errors.passwordConfirmation}
                  </Text>
                )}

                <Button labelButton="Login" onPress={handleSubmit} />
              </View>
            )}
          </Formik>
          <View style={styles.form}>
            <Button labelButton="Voltar" onPress={() => {router.back()}} />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    textAlign: 'center',
    color: 'white',
  },
});

export default RegisterFormCopy;
