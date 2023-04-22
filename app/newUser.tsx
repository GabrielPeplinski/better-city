import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView } from 'react-native';
import DateTimePicker from '@components/DatePicker';
import Button from '@components/Button';
import Input from '@components/Input';
import { FontAwesome } from '@expo/vector-icons';

export default function newUserScreen() {
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

          <Text style={styles.label}>Senha:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />

          <Text style={styles.label}>Senha:</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirme sua senha"
            value={passwordConfirm}
            onChangeText={setPasswordConfirm}
            secureTextEntry={true}
          />

          <Button labelButton="Cadastrar" onPress={handleCadastro} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#082942',
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 20,
  },
});
