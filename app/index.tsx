import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Button from '@components/Button';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const login = () => {
    router.push({
      pathname: '/main',
    });
  };

  const createUser = () => {
    router.push({
      pathname: '/register',
    });
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('@images/better-city-logo.png')}
          style={styles.logoImage}
        />
      </View>
      <View style={styles.inputBox}>
        <Ionicons name="mail-sharp" size={24} color="white" />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputBox}>
        <Ionicons name="key" size={24} color="white" />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <View>
        <Button labelButton="Entrar" onPress={login} />
      </View>
      <View>
        <Text style={styles.text}>Faça parte da diferença!</Text>
        <Button labelButton="Cadastrar" onPress={createUser} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#082942',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  logoImage: {
    width: 350,
    height: 200,
  },
  logo: {
    width: 350,
    height: 200,
  },
  text: {
    color: 'white',
  },
  inputBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
