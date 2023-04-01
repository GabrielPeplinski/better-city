import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default function CadastroScreen() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [rua, setRua] = useState('');

  function handleCadastro() {
    console.log(`Nome: ${nome}, CPF: ${cpf}, Rua: ${rua}`);
    // implemente o código de cadastro aqui
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>CPF:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu CPF"
          value={cpf}
          onChangeText={setCpf}
        />

        <Text style={styles.label}>Rua:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua rua"
          value={rua}
          onChangeText={setRua}
        />

        <Button title="Cadastrar" onPress={handleCadastro} />
      </View>
    </View>
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
    marginBottom: 20,
  },
});
