import React from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import Button from '@components/Button';
import Input from '@components/Input';
import { FontAwesome } from '@expo/vector-icons';
import theme from '@themes/theme';
import PasswordInput from '@components/PasswordInput';
import { Formik } from 'formik';
import RegisterValidation from '@validations/RegisterValidation';
import useAuth from '@hooks/useAuth';

const CreateUserForm = () => {
  const { register } = useAuth();

  interface RegisterProps {
    email: string;
    password: string;
  }

  const createUser = async (values: RegisterProps) => {
    try {
      await register(values.email, values.password);
    } catch (error: any) {
      Alert.alert('An error had ocurred!');
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <FontAwesome name="user-circle-o" size={70} color="white" />
      <View style={styles.form}>
        <Formik
          initialValues={{
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={RegisterValidation}
          //onSubmit={(values) => console.log(values)}
          onSubmit={(values) => createUser(values)}
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

              <PasswordInput
                label="Confirmação da senha"
                placeholder="Confirme sua senha"
                value={values.confirmPassword}
                onChange={handleChange('confirmPassword')}
              />
              {errors.confirmPassword && (
                <Text style={theme.formErrors}>{errors.confirmPassword}</Text>
              )}

              <Button labelButton="Cadastrar" onPress={handleSubmit} />
            </View>
          )}
        </Formik>
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
  label: {
    marginTop: 20,
    marginBottom: 5,
    fontWeight: 'bold',
    color: theme.fonts.primaryColor,
  },
});

export default CreateUserForm;
