import { View, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import theme from '@themes/theme';
import MyMap from '@components/MyMap';
import * as Location from 'expo-location';

const MainScreen = () => {
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

export default MainScreen;
