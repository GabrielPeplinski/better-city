import ShowTrouble from '@components/ShowTrouble';
import useCollection from '@hooks/useCollection';
import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Troubles from 'src/types/Troubles';

const MyTroublesScreen = () => {
  const { data } = useCollection<Troubles>('troubles', true);

  return (
    <View>
      <ScrollView>
        <FlatList
          data={data.filter(() => {
            
          })}
          renderItem={({ item }) => <ShowTrouble trouble={item} />}
          keyExtractor={(item) => item.id!}
          ListEmptyComponent={
            () => <Text>Você ainda não cadastrou nenhuma reclamação!</Text>
          }
        />
      </ScrollView>
    </View>
  );
};

export default MyTroublesScreen;
