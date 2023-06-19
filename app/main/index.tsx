import { View, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import theme from '@themes/theme';
import MyMap from '@components/MyMap';
import * as Location from 'expo-location';
import SearchAddressModal from '@components/SearchAddressModal';
import { useModal } from '@components/ModalProvider';
import Button from '@components/Button';

const MainScreen = () => {
  const modal = useModal();

  useEffect(() => {
    const getLocation = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
          throw new Error('Permissão de localização não concedida');
        }
      } catch (error) {
        console.error('Erro ao obter a localização:', error);
      }
    };

    getLocation();
  }, []);

  const handleClick = () => {
    modal.show(<SearchAddressModal />);
  };

  return (
    <View style={styles.container}>
      <Button
        labelButton='Pesquisar'
        onPress={handleClick}
      />
      <MyMap />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
  }
});

export default MainScreen;
