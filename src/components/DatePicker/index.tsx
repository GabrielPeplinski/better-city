import React, { useState } from 'react';
import { StyleSheet, View, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectDate) => {
    const currentDate = selectDate || date;

    setShow(Platform.OS === 'android');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let formatedDate =
      tempDate.getDate() + '/' + tempDate.getMonth() + 1 + '/' + tempDate.getFullYear();

    setShow(false);
    console.log(formatedDate);
  };

  const showMode = () => {
    if (show == true) setShow(false);
    else setShow(true);
  };

  return (
    <View>
      <Button title="Selecione uma data" onPress={() => showMode()} />

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
};

const styles = StyleSheet.create({
  datePickerButton: {
    backgroundColor: 'blue',
  },
});

export default DatePicker;
