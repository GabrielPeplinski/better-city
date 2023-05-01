import { Text, View, StyleSheet } from 'react-native'
import React from 'react'
import theme from '@themes/theme';
import Button from '@components/Button';
import Input from '@components/Input';
import PasswordInput from '@components/PasswordInput';
import { Formik } from 'formik';
import LoginValidation from '@validations/LoginValidation';

const LoginForm2 = () => {
    return (
      <View style={styles.container}>
        
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
                  <Text style={theme.formErrors}>
                    {errors.email}
                  </Text>
                )}

                <PasswordInput
                  label="Senha"
                  placeholder="Digite sua senha"
                  value={values.password}
                  onChange={handleChange('password')}
                />
                {errors.password && (
                  <Text style={theme.formErrors}>
                    {errors.password}
                  </Text>
                )}

              
                <Button labelButton="Login" onPress={handleSubmit} />
              </View>
            )}
          </Formik>

      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
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

export default LoginForm2