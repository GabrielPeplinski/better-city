import * as Location from 'expo-location';

class LocationService {
  async getCurrentLocation(): Promise<{ latitude: number; longitude: number }> {
    let { status } = await Location.requestForegroundPermissionsAsync();
    
    if (status !== 'granted') {
      throw new Error('Permissão de localização não concedida');
    }

    let location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;

    return { latitude, longitude };
  }
}

export default LocationService;
