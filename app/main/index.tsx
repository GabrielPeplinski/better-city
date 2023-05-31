import { View, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import theme from '@themes/theme';
import MyMap from '@components/MyMap';
import * as Location from 'expo-location';

const index = () => {
  useEffect(() => {
    const getLocation = async () => {
      try {
        const location = await Location.getCurrentPositionAsync({});

        console.log('Latitude:', location.coords.latitude);
        console.log('Longitude:', location.coords.longitude);
      } catch (error) {
        console.error('Erro ao obter a localização:', error);
      }
    };

    getLocation();
  }, []);

  return (
    <View style={styles.container}>
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
  },
  button: {
    width: '80%',
    marginVertical: 10,
  },
  text: {
    color: theme.fonts.primaryColor,
  },
});

export default index;
