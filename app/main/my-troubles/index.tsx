import { useModal } from '@components/ModalProvider';
import TroubleItemList from '@components/TroubleItemList';
import useAuth from '@hooks/useAuth';
import useCollection from '@hooks/useCollection';
import theme from '@themes/theme';
import React, { useEffect } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import Troubles from 'src/types/Troubles';

const MyTroublesScreen = () => {
  const { data, refreshData } = useCollection<Troubles>('troubles', true);
  const { user } = useAuth();
  const modal = useModal();
  
  const myItens = data.filter((item) => {
    return item.user_id == user.uid;
  });

  useEffect(() => {
    refreshData();
  }, [modal.modalVisible])

  return (
    <View style={styles.container}>
      <FlatList
        data={myItens}
        renderItem={({ item }) => <TroubleItemList trouble={item} />}
        keyExtractor={(item) => item.id!}
        ListEmptyComponent={() => (
          <Text>Você ainda não cadastrou nenhuma reclamação!</Text>
        )}
      />
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
});

export default MyTroublesScreen;
