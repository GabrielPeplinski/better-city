import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import theme from '@themes/theme';
import { useModal } from '@components/ModalProvider';
import SearchAddressModal from '@components/SearchAddressModal';
import * as Location from 'expo-location';
import { useLocationCoordinates } from '@contexts/LocationCoordenatesContextProvider';

const OptionsButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modal = useModal();
  const { setLatitude, setLongitude } = useLocationCoordinates();

  const handleButtonPress = () => {
    setIsOpen(!isOpen);
  };

  const openSearchAddressModal = () => {
    handleButtonPress();

    modal.show(<SearchAddressModal />);
  };

  const goToActualLocation = () => {
    handleButtonPress();

    const getLocation = async () => {
      try {
        const location = await Location.getCurrentPositionAsync({});

        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);
      } catch (error) {
        console.error('Erro ao obter a localização:', error);
      }
    };

    getLocation();
  };

  return (
    <View style={styles.floatContainer}>
      {isOpen && (
        <>
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
        </>
      )}

      <TouchableOpacity
        onPress={handleButtonPress}
        activeOpacity={0.7}
        style={styles.button}
      >
        <SimpleLineIcons
          name={isOpen ? 'options' : 'options-vertical'}
          size={28}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  floatContainer: {
    position: 'absolute',
    bottom: 40,
    right: 8,
    alignItems: 'center',
  },
  button: {
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
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
});

export default OptionsButton;
