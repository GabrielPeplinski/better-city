import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import * as Location from 'expo-location';

interface LocationCoordenatesProps {
  latitude: number;
  longitude: number;
}

const LocationCoordenatesContext = createContext<LocationCoordenatesProps>({
  latitude: 0,
  longitude: 0,
});

interface TokenContextProviderProps {
  latitude: number;
  longitude: number;
  children: ReactNode;
}

export function LocationCoordenatesContextProvider({
  latitude,
  longitude,
  children,
}: TokenContextProviderProps) {

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
    <LocationCoordenatesContext.Provider value={{ latitude, longitude }}>
      {children}
    </LocationCoordenatesContext.Provider>
  );
}

export function useLocationCoordenates() {
  const { latitude, longitude } = useContext(LocationCoordenatesContext);

  if (latitude === undefined || longitude === undefined)
    throw new Error(
      'useLocationCoordenates must be used inside LocationCoordenatesContext'
    );

  return { latitude, longitude };
}
