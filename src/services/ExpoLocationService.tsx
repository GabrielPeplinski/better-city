import * as Location from 'expo-location';

const ExpoLocationService = () => {
  const getActualLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      // Trate o caso em que a permissão de localização não foi concedida
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;
    
    console.log({latitude}, {longitude});
  };
};

export default ExpoLocationService;
