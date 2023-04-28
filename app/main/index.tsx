import { Text, View, StyleSheet } from 'react-native';
import React from 'react';
import theme from '@themes/theme';

const index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>MAIN PAGE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
  },
  button: {
    width: '80%',
    marginVertical: 10,
  },
  text: {
    color: theme.fonts.primaryColor,
  },
});

export default index;
