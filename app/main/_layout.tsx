import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from "@expo/vector-icons/Ionicons"

export default function _layout() {

  type ScreenProps = {
    [key: string]: {
      icon: string;
      label: string;
    };
  };

  const Screens: ScreenProps = {
    index: {
      label: "Home",
      icon: "",
    },
    "users/index": {
      label: "Listar",
      icon: "list",
    },
    "register/index": {
      label: "Adicionar",
      icon: "add-circle",
    },
    "client/index": {
      label: "Clientes",
      icon: "people-circle",
    },
  };


  return (
    <Tabs screenOptions={{headerShown:false}}>
       <Tabs.Screen 
           // Name of the dynamic route.
        name="[users]"
       />
    </Tabs>
  )
}