import { View, StyleSheet } from 'react-native';
import React from 'react';
import theme from '@themes/theme';
import MyMap from '@components/MyMap';
import SearchAddressModal from '@components/SearchAddressModal';
import { useModal } from '@components/ModalProvider';
import Button from '@components/Button';

const MainScreen = () => {
  const modal = useModal();

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
