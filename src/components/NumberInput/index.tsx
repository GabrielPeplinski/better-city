import { TextInput, Text, View, StyleSheet } from 'react-native';
import React from 'react';

const NumberInput = ({ label, placeholder, value, onChange }) => {
  return (
    <View>
      <Text style={styles.label}>{label}:</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginTop: 20,
    marginBottom: 5,
    fontWeight: 'bold',
    color: 'white'
  },
  input: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 10,
    backgroundColor: 'white'
  },
});

export default NumberInput;
