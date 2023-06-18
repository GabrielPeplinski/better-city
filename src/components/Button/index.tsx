import { Pressable, Text, View, StyleSheet } from 'react-native';
import React from 'react';
import theme from '@themes/theme';

interface ButtonProps {
  labelButton: string;
  onPress: () => void;
  color?: string;
}

const Button = (props: ButtonProps) => {
  return (
    <View>
      <Pressable
        style={[styles.button, props.color && { backgroundColor: props.color }]}
        onPress={props.onPress}
      >
        <Text style={[styles.text, props.color && { color: 'black' }]}>
          {props.labelButton}
        </Text>
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
