import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Button from '@components/Button';
import theme from '@themes/theme';
import Input from '@components/Input';

const LoginForm = () => {
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

        <Image
          source={require('@images/better-city-logo.png')}
          style={styles.logoImage}
        />
     
      <View style={styles.inputBox}>
        <Ionicons name="mail-sharp" size={24} color="white" />

        <Input label="E-mail" placeholder="Seu email" value={email} onChange={setEmail} />
       
      </View>
      <View style={styles.inputBox}>
        <Ionicons name="key" size={24} color="white" />

        <Input label="Senha" placeholder="Sua senha" value={password} onChange={setPassword} />
    
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
    backgroundColor: theme.colors.primary,
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
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink'
  },
});

export default LoginForm;
