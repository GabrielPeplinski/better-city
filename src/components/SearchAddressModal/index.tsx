import { Alert, View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import GeolocationApiService from '@services/GeolocationApiService';
import Input from '@components/Input';
import { useModal } from '@components/ModalProvider';
import theme from '@themes/theme';

const SearchAddressModal = () => {
  const geolocationApi = new GeolocationApiService();
  const [address, setAddress] = useState('');
  const modal = useModal();

  interface SearchAddressProps {
    address: string;
  }

  const searchAddress = (values: SearchAddressProps) => {
    try {
      const data = geolocationApi.getCoordinatesByAddress(values.address);

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
