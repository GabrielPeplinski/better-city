import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TextContent = ({ content }) => {
    return (
      <View>
        <Text style={styles.content}>{content}:</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    content: {
      marginTop: 20,
      marginBottom: 5,
      fontWeight: 'bold',
      color: 'white'
    }
  });
  
  export default TextContent;