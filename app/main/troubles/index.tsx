import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Input from '@components/Input';
import TextContent from '@components/TextContent';
import theme from 'theme';

export default function newTroubleScreen() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [useActualLocation, setUseActualLocation] = useState(false);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Ionicons name="add-circle" size={70} color="white" />
        <View style={styles.form}>
          <Input
            label="Titulo"
            placeholder="Titulo para este problema"
            value={title}
            onChange={setTitle}
          />

          <Input
            label="Descrição"
            placeholder="Descreve o seguinte problema..."
            value={description}
            onChange={setDescription}
          />

          <Input
            label="Nos diga onde isso acontece"
            placeholder="Rua Fulano..."
            value={address}
            onChange={setAddress}
          />

          <Input
            label="Nos diga onde isso acontece"
            placeholder="Rua Fulano..."
            value={address}
            onChange={setAddress}
          />

          <View>
            <TextContent
              content={'O problema acontece onde vc está? Ative a localização atual para isso!'}
            />

            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={useActualLocation ? 'white' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={setUseActualLocation}
              value={useActualLocation}
            />
          </View>
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  actualLocation: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
