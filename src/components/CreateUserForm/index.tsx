import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import DateTimePicker from '@components/DatePicker';
import Button from '@components/Button';
import Input from '@components/Input';
import { FontAwesome } from '@expo/vector-icons';
import theme from '@themes/theme';
import PasswordInput from '@components/PasswordInput';

const CreateUserForm = () => {
  const [birhtdate, setBirthdate] = useState(new Date());
  const [name, setName] = useState('');
  const [district, setDistrict] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

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
          <Input label="Nome" placeholder="Seu nome" value={name} onChange={setName} />

          <Text style={styles.label}>Data de Nascimento:</Text>
          <DateTimePicker />

          <Input label="Bairro" placeholder="Vila Carli" value={district} onChange={setDistrict} />

          <Input label="CPF" placeholder="Seu CPF" value={cpf} onChange={setCpf} />

          <Input label="Email" placeholder="Seu email" value={email} onChange={setEmail} />

          <PasswordInput
            label="Senha"
            placeholder="Digite sua senha"
            value={password}
            onChange={setPassword}
          />

          <PasswordInput
            label="Confirmação da senha"
            placeholder="Confirme sua senha"
            value={passwordConfirm}
            onChange={setPasswordConfirm}
          />

          <Button labelButton="Cadastrar" onPress={handleCadastro} />
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
    color: 'white',
  },
});

export default CreateUserForm;
