import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import theme from '@themes/theme';
import { useModal } from '@components/ModalProvider';
import SearchAddressModal from '@components/SearchAddressModal';
import * as Location from 'expo-location';

const OptionsButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modal = useModal();

  const handleButtonPress = () => {
    setIsOpen(!isOpen);
  };

  const openSearchAddressModal = () => {
    handleButtonPress();

    modal.show(
      <SearchAddressModal />
    );
  };

  const goToActualLocation = () => {};

  return (
    <View>
      {isOpen && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.subButton}
            onPress={openSearchAddressModal}
          >
            <FontAwesome name="search" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.subButton}
            onPress={goToActualLocation}
          >
            <Feather name="target" size={24} color="black" />
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity
        onPress={handleButtonPress}
        activeOpacity={0.7}
        style={styles.button}
      >
        <SimpleLineIcons
          name={isOpen ? 'options' : 'options-vertical'}
          size={24}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 80,
    right: 16,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 1,
  },
  button: {
    position: 'absolute',
    bottom: 40,
    left: 150,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    zIndex: 1,
  },
  subButton: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 24,
    width: 40,
    height: 40,
    left: 210,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
});

export default OptionsButton;
