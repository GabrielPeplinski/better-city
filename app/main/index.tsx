import { Text, View, StyleSheet } from 'react-native';
import React, {useEffect} from 'react';
import theme from '@themes/theme';
import LocationService from '@services/ExpoLocationService';

const index = () => {

  useEffect(() => {
    const getLocation = async () => {
      try {
        const locationService = new LocationService();
        const location = await locationService.getCurrentLocation();
        console.log('Latitude:', location.latitude);
        console.log('Longitude:', location.longitude);
        
      } catch (error) {
        console.error('Erro ao obter a localização:', error);
      }
    };

    getLocation();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>MAIN PAGE</Text>
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
