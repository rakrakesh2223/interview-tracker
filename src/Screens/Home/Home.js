import React from 'react';
import { View, Text , StyleSheet } from 'react-native';

const Home = () => {
  return (
    <View>
      <Text style={styles.bor}>Home</Text>
      <Text style={styles.bor}>Home</Text>
      <Text style={styles.bor}>Home</Text>
      <Text style={styles.bor}>Home</Text>
      <Text style={styles.bor}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bor:{
    textAlign:'right',
    color:'blue',
    fontSize:23,
  },
});

export default Home;