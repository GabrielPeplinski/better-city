import { Alert, View, StyleSheet, Pressable, Text } from 'react-native';
import React, { useState } from 'react';
import GeolocationApiService from '@services/GeolocationApiService';
import Input from '@components/Input';
import { useModal } from '@components/ModalProvider';
import theme from '@themes/theme';

const SearchAddressModal = () => {
  const geolocationApi = new GeolocationApiService();
  const [address, setAddress] = useState('');
  const modal = useModal();

  const searchAddress = () => {
    try {
      console.log(address);
      const data = geolocationApi.getCoordinatesByAddress(address);

      console.log(data)
      modal.hide();
    } catch (error: any) {
      Alert.alert('Ocorreu um erro ao buscar o endereco!');
    }
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Buscar endereco"
        value={address}
        onChange={setAddress}
      />

      <Pressable onPress={searchAddress}>
        <Text>Buscar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
  }
});

export default SearchAddressModal;
