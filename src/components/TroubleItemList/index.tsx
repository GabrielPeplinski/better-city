import { Text, View, StyleSheet } from 'react-native';
import React from 'react';
import Troubles from 'src/types/Troubles';

interface ShowTroubleProps {
  trouble: Troubles;
};

const TroubleItemList = ({trouble} : ShowTroubleProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{trouble.title}</Text>
      <Text style={styles.description}>{trouble.description}</Text>
      <Text style={styles.date}>Adicionado em: {trouble.created_at}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 24,
    marginBottom: 16,
    borderRadius: 8,
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: 'black',
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    color: 'black',
  },
});


export default TroubleItemList;
