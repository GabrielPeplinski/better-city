import React, { useState } from 'react';
import { StyleSheet, View, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function newUserScreen() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectDate) => {
    const currentDate = selectDate || date;

    setShow(Platform.OS === 'android');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let formatedDate = tempDate.getDate() + '/' + tempDate.getMonth() + '/' + tempDate.getFullYear();

    console.log(formatedDate);
  };

  const showMode = () => {
    setShow(true)
  }

  return (
    <View>
      <Button title="Selecione uma data" onPress={() => showMode()}/>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
    datePickerButton: {
        backgroundColor: 'blue'
    },
  });
