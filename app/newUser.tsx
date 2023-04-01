import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, ScrollView } from 'react-native';
import DateTimePicker from '../src/components/CreateUser/DatePicker/DatePicker';

export default function newUserScreen() {

	const [birhtdate, setBirthdate] = useState(new Date());
  const [nome, setNome] = useState('');
  const [bairro, setBairro] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleCadastro() {
    console.log(
      `Nome: ${nome}, Data de Nascimento: ${birhtdate}, Bairro: ${bairro}, CPF: ${cpf}, Email: ${email}, Senha: ${senha}`
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.label}>Nome:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            value={nome}
            onChangeText={setNome}
          />

          <Text style={styles.label}>Data de Nascimento:</Text>
					<DateTimePicker />

          <Text style={styles.label}>Bairro:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu bairro"
            value={bairro}
            onChangeText={setBairro}
          />

          <Text style={styles.label}>CPF:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu CPF"
            value={cpf}
            onChangeText={setCpf}
          />

          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Senha:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={true}
          />

          <Button title="Cadastrar" onPress={handleCadastro} />
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
    backgroundColor: '#F5FCFF',
  },
  form: {
    width: '80%',
  },
  label: {
    marginTop: 20,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 10,
  },
});
