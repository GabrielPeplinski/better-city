import React from 'react'
import { SplashScreen, Stack } from 'expo-router'
import useFirebase from '@hooks/useFirebase';
import firebaseConfig from '../config/firebaseConfig';

export default function _layout() {

  // initialize firebase
  const firebaseApp = useFirebase(firebaseConfig);

  if (!firebaseApp)
    return <SplashScreen />;

  return (
    <Stack/>
  )
}