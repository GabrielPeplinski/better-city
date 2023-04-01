import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image, Pressable, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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
      pathname: '/newUser',
    });
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../assets/images/better-city-logo.png')}
          style={styles.logoImage}
        ></Image>
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
        <Pressable style={styles.button} onPress={login}>
          <Text style={styles.text}>Entrar</Text>
        </Pressable>
      </View>
      <View>
        <Text style={styles.text}>Faça parte da diferença!</Text>
        <Pressable style={styles.button} onPress={createUser}>
          <Text style={styles.text}>Cadastrar</Text>
        </Pressable>
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
  button: {
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1,
    width: '100%',
    marginVertical: 10,
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    height: 40,
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
