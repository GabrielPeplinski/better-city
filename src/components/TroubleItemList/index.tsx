import { Text, View, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import Troubles from 'src/types/Troubles';
import { useRouter } from 'expo-router';
import { useModal } from '@components/ModalProvider';
import EditTroubleModal from '@components/Troubles/EditTroubleModal';

interface ShowTroubleProps {
  trouble: Troubles;
};

const TroubleItemList = ({trouble} : ShowTroubleProps) => {
  const router = useRouter();
  const modal = useModal();

  const handleEdit = () => {
    modal.show(
      <EditTroubleModal
        trouble={trouble}
      />
    );
  };

  const handleDelete = () => {

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{trouble.title}</Text>
      <Text style={styles.description}>{trouble.description}</Text>
      <Text style={styles.date}>Adicionado em: {trouble.created_at}</Text>
      <Pressable onPress={handleEdit}>
        <Text>Editar</Text>
      </Pressable>
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
