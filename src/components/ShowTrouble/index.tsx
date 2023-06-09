import { Text, View } from 'react-native';
import React from 'react';
import Troubles from 'src/types/Troubles';

interface ShowTroubleProps {
  trouble: Troubles;
};

const ShowTrouble = ({trouble} : ShowTroubleProps) => {
  return (
    <View>
      <Text>{trouble.created_at}</Text>
    </View>
  );
};

export default ShowTrouble;
