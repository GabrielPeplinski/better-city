import { Pressable, Text, View, StyleSheet } from 'react-native';
import React from 'react';
import theme from '@themes/theme';

const Button = ({ labelButton, onPress }) => {
  return (
    <View>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{labelButton}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1,
    width: '100%',
    marginVertical: 10,
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    height: 40,
  },
  text: {
    color: theme.button.textColor,
  },
});

export default Button;
