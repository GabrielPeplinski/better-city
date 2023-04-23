import React, { useState } from 'react';
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
  const [birhtdate, setBirthdate] = useState(new Date());
  const [name, setName] = useState('');
  const [district, setDistrict] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleCadastro() {
    console.log(
      `Nome: ${name}, Data de Nascimento: ${birhtdate}, Bairro: ${district}, CPF: ${cpf}, Email: ${email}, Senha: ${password}`
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <FontAwesome name="user-circle-o" size={70} color="white" />
        <View style={styles.form}>
          <Formik
            initialValues={{ name: '', email: '', district: '', password: '', confirmPassword: '' }}
            validationSchema={RegisterValidation}
            onSubmit={(values) => console.log(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <View>
                <Input label="Nome" placeholder="Seu nome" value={name} onChange={setName} />
                {errors.name && touched.name && <Text>{errors.name}</Text>}

                <Input label="Email" placeholder="Seu email" value={email} onChange={setEmail} />
                {errors.email && touched.email && <Text>{errors.email}</Text>}

                <Text style={styles.label}>Data de Nascimento:</Text>
                <DateTimePicker />

                <Input
                  label="Bairro"
                  placeholder="Vila Carli"
                  value={district}
                  onChange={setDistrict}
                />
                {errors.district && touched.district && <Text>{errors.district}</Text>}

                <PasswordInput
                  label="Senha"
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={setPassword}
                />
                {errors.password && touched.password && <Text>{errors.password}</Text>}

                <PasswordInput
                  label="Confirmação da senha"
                  placeholder="Confirme sua senha"
                  value={confirmPassword}
                  onChange={setConfirmPassword}
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <Text>{errors.confirmPassword}</Text>
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
