import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View>
          <Image source={require('../assets/images/better-city-logo.png')}
          style={styles.logo}></Image>
      </View>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Button style={styles.button} title="Entrar"></Button>
      <Link href='users' style={styles.button}>Criar usuário</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#082942'
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginVertical: 5,
    paddingHorizontal: 10,
    backgroundColor:'white'
  },
  button: {
    width: '80%',
    marginVertical: 10,
  },
  logo: {
    width: 380,
    height: 200
  }
});

export default LoginScreen;
