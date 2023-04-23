import React, { useState } from 'react';
import { StyleSheet, View, Pressable, Platform, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import theme from '@themes/theme';

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
    if (show == true) 
      setShow(false);
    else 
      setShow(true);
  };

  return (
    <View>
      <Pressable style={styles.button} onPress={() => showMode()}>
        <Text style={styles.text}>Selecione uma data"</Text>
      </Pressable>

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
  button: {
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1,
    width: '100%',
    marginVertical: 10,
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    height: 40,
  },
  text: {
    color: theme.button.textColor,
  },
});

export default DatePicker;
