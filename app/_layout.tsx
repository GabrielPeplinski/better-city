import React from 'react';
import { SplashScreen, Stack } from 'expo-router';
import useFirebase from '@hooks/useFirebase';
import firebaseConfig from '../config/firebaseConfig';
import { LocationCoordenatesContextProvider } from '@contexts/LocationCoordenatesContextProvider';
import ModalProvider from '@components/ModalProvider';

export default function _layout() {
  // initialize firebase
  const firebaseApp = useFirebase(firebaseConfig);

  if (!firebaseApp) return <SplashScreen />;

  return (
    <LocationCoordenatesContextProvider>
      <ModalProvider>
        <Stack />
      </ModalProvider>
    </LocationCoordenatesContextProvider>
  );
}
