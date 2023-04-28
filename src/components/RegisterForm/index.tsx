import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import DateTimePicker from '@components/DatePicker';
import Button from '@components/Button';
import Input from '@components/Input';
import { FontAwesome } from '@expo/vector-icons';
import theme from '@themes/theme';
import PasswordInput from '@components/PasswordInput';
import { Formik } from 'formik';
import RegisterValidation from '@validations/RegisterValidation';

const CreateUserForm = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <FontAwesome name="user-circle-o" size={70} color="white" />
        <View style={styles.form}>
          <Formik
            initialValues={{
              name: '',
              email: '',
              district: '',
              password: '',
              confirmPassword: '',
            }}
            validationSchema={RegisterValidation}
            onSubmit={(values) => console.log(values)}
          >
            {({ handleChange, handleSubmit, values, errors }) => (
              <View>
                <Input
                  label="Nome"
                  placeholder="Seu nome"
                  value={values.name}
                  onChange={handleChange('name')}
                />
                {errors.name && (
                  <Text style={{ fontSize: 10, color: 'red' }}>
                    {errors.name}
                  </Text>
                )}

                <Input
                  label="Email"
                  placeholder="Seu email"
                  value={values.email}
                  onChange={handleChange('email')}
                />
                {errors.email && (
                  <Text style={{ fontSize: 10, color: 'red' }}>
                    {errors.email}
                  </Text>
                )}

                <Text style={styles.label}>Data de Nascimento:</Text>
                <DateTimePicker />

                <Input
                  label="Bairro"
                  placeholder="Vila Carli"
                  value={values.district}
                  onChange={handleChange('district')}
                />
                {errors.district && (
                  <Text style={{ fontSize: 10, color: 'red' }}>
                    {errors.district}
                  </Text>
                )}

                <PasswordInput
                  label="Senha"
                  placeholder="Digite sua senha"
                  value={values.password}
                  onChange={handleChange('password')}
                />
                {errors.password && (
                  <Text style={{ fontSize: 10, color: 'red' }}>
                    {errors.password}
                  </Text>
                )}

                <PasswordInput
                  label="Confirmação da senha"
                  placeholder="Confirme sua senha"
                  value={values.confirmPassword}
                  onChange={handleChange('confirmPassword')}
                />
                {errors.confirmPassword && (
                  <Text style={{ fontSize: 10, color: 'red' }}>
                    {errors.confirmPassword}
                  </Text>
                )}

                <Button labelButton="Cadastrar" onPress={handleSubmit} />
              </View>
            )}
          </Formik>
        </View>
      </View>
    </ScrollView>
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
