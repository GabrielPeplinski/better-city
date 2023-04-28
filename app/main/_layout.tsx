import React from 'react';
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function _layout() {
  type ScreenProps = {
    [key: string]: {
      icon: string;
      label: string;
    };
  };

  const Screens: ScreenProps = {
    'troubles/index': {
      label: 'Problemas',
      icon: 'add-circle',
    },
    index: {
      label: 'Mapa',
      icon: 'map',
    },
    'client/index': {
      label: 'Listagem',
      icon: 'list',
    },
  };

  return (
    <Tabs
      screenOptions={({ route }) => {
        return {
          tabBarIcon: ({ focused, size }) => {
            return (
              <Ionicons
                name={Screens[route.name]?.icon as any}
                size={size}
                color={focused ? '#4b4b4b' : '#7c7d7c'}
              />
            );
          },
          tabBarLabelStyle: {
            fontSize: 15,
            color: '#4b4b4b',
            fontFamily: 'monospace',
            fontWeight: 'bold',
          },
          tabBarStyle: {
            backgroundColor: '#fff',
            borderRightWidth: 0.5,
          },
          tabBarLabel: Screens[route.name]?.label,
        };
      }}
    ></Tabs>
  );
}
