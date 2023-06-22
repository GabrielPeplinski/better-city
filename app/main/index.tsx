import { View, StyleSheet } from 'react-native';
import React from 'react';
import theme from '@themes/theme';
import MyMap from '@components/MyMap';
import OptionsButton from '@components/OptionsButton';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <MyMap />
      <OptionsButton/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
  }
});

export default MainScreen;
