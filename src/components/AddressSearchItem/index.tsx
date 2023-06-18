import Button from '@components/Button';
import theme from '@themes/theme';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AddressSearchResult from 'src/types/AddressSearchResult';

interface AddressSearchItemProps {
  address: AddressSearchResult;
}

const AddressSearchItem = ({ address }: AddressSearchItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{address.display_name}</Text>
      <View style={styles.optionsButtons}>
        <Button
          labelButton="Selecionar"
          onPress={() => {}}
          color={theme.colors.success}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 24,
    marginBottom: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 8,
  },
  optionsButtons: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});

export default AddressSearchItem;
