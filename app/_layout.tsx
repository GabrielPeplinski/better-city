import React from 'react';
import { SplashScreen, Stack } from 'expo-router';
import useFirebase from '@hooks/useFirebase';
import firebaseConfig from '../config/firebaseConfig';
import { LocationCoordenatesContextProvider } from '@contexts/LocationCoordenatesContextProvider';

export default function _layout() {
  // initialize firebase
  const firebaseApp = useFirebase(firebaseConfig);

  const latitude = 0;
  const longitude = 0;

  if (!firebaseApp) 
    return <SplashScreen />;

  return (
    <LocationCoordenatesContextProvider latitude={latitude} longitude={longitude}>
      <Stack />
    </LocationCoordenatesContextProvider>
  );
}
