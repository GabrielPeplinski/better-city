import { Text, View, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import Troubles from 'src/types/Troubles';
import { useModal } from '@components/ModalProvider';
import EditTroubleModal from '@components/Troubles/EditTroubleModal';
import ConfirmDeleteTroubleModal from '@components/Troubles/ConfirmDeleteTroubleModal';
import useCollection from '@hooks/useCollection';
import Button from '@components/Button';
import theme from '@themes/theme';

interface ShowTroubleProps {
  trouble: Troubles;
}

const TroubleItemList = ({ trouble }: ShowTroubleProps) => {
  const modal = useModal();
  const { refreshData } = useCollection<Troubles>('troubles', true);
  const formattedDate = new Date(trouble.created_at).toLocaleDateString('pt-BR');

  useEffect(() => {
    refreshData();
  }, [modal.modalVisible]);

  const handleEdit = () => {
    modal.show(
      <EditTroubleModal trouble={trouble} />
    );
  };

  const handleDelete = () => {
    modal.show(
      <ConfirmDeleteTroubleModal trouble={trouble} />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{trouble.title}</Text>
      <Text style={styles.description}>{trouble.description}</Text>
      <Text style={styles.date}>Adicionado em: {formattedDate}</Text>
      <View style={styles.optionsButtons}>
        <Button
          labelButton="   Editar   "
          onPress={handleEdit}
          color={theme.colors.warning}
        />
        <Button
          labelButton="   Deletar   "
          onPress={handleDelete}
          color={theme.colors.danger}
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
  description: {
    fontSize: 16,
    color: 'black',
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    color: 'black',
  },
  optionsButtons: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});

export default TroubleItemList;
