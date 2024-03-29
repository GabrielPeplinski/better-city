import { Alert, View, Text } from 'react-native';
import React from 'react';
import styles from '../styles';
import { MaterialIcons } from '@expo/vector-icons';
import Button from '@components/Button';
import { useModal } from '@components/ModalProvider';
import ShowTroubleProps from '../ShowTroublesProps';
import useCollection from '@hooks/useCollection';
import Troubles from 'src/types/Troubles';
import theme from '@themes/theme';

const ConfirmDeleteTroubleModal = ({ trouble }: ShowTroubleProps) => {
  const modal = useModal();
  const { remove } = useCollection<Troubles>('troubles', true);

  const handleDelete = async () => {
    try {
      await remove(trouble.id);

      modal.hide();

      Alert.alert('Sua reclamação foi excluída com sucesso!');
    } catch (error: any) {
      Alert.alert('Não foi possível excluir a sua reclamação');
    }
  };

  return (
    <View style={styles.container}>
      <MaterialIcons name="delete" size={70} color="white" />
      <View style={styles.form}>
        <Text style={styles.title}>Deseja realmente excluir a relamação:</Text>
        <Text style={styles.title}>{trouble.title}</Text>
        <Button labelButton="Deletar" onPress={handleDelete} />
        <Button
          labelButton="Cancelar"
          onPress={modal.hide}
          color={theme.colors.danger}
        />
      </View>
    </View>
  );
};

export default ConfirmDeleteTroubleModal;
