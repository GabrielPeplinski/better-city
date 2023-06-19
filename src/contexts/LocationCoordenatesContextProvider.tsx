import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import * as Location from 'expo-location';

interface LocationCoordenatesProps {
  latitude: number;
  longitude: number;
  setLatitude: (latitude: number) => void;
  setLongitude: (longitude: number) => void;
}

const LocationCoordenatesContext =
  createContext<LocationCoordenatesProps | null>(null);

export function LocationCoordenatesContextProvider({
  children,
}: PropsWithChildren) {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    const getLocation = async () => {
      try {
        const permission = Location.requestForegroundPermissionsAsync();

        if (permission) {
          const location = await Location.getCurrentPositionAsync({});

          setLatitude(location.coords.latitude);
          setLongitude(location.coords.longitude);
        }
      } catch (error) {
        console.error('Erro ao obter a localização:', error);
      }
    };

    getLocation();
  }, []);

  return (
    <LocationCoordenatesContext.Provider
      value={{ latitude, longitude, setLatitude, setLongitude }}
    >
      {children}
    </LocationCoordenatesContext.Provider>
  );
}

export function useLocationCoordinates() {
  const context = useContext(LocationCoordenatesContext);

  if (!context)
    throw new Error(
      'useLocationCoordenates must be used inside LocationCoordenatesContext'
    );

  return context;
}
