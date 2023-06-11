import TroubleItemList from '@components/TroubleItemList';
import useCollection from '@hooks/useCollection';
import theme from '@themes/theme';
import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import Troubles from 'src/types/Troubles';

const MyTroublesScreen = () => {
  const { data } = useCollection<Troubles>('troubles', true);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
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
