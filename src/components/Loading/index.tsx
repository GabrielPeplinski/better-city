import { View, Image, StyleSheet, ActivityIndicator } from 'react-native';
import React from 'react';
import theme from '@themes/theme';

const Loading = () => {
  return (
    <View>
      <Image
        source={require('@images/better-city-logo.png')}
        style={styles.logoImage}
      />
      <ActivityIndicator size="large" color={theme.colors.secondary} />
    </View>
  );
};

const styles = StyleSheet.create({
  logoImage: {
    width: 350,
    height: 200,
  },
});

export default Loading;
