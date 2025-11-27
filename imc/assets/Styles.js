import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={''} style={styles.foto} />
      <TextInput style={styles.textinput} placeholder="A" />
      <Text style={styles.pressable}>PULSA</Text>
      <Text style={styles.paragraph}>Texto</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 3,
    fontSize: 15,
    padding: 3,
    color: 'black',
    textAlign: 'left',
    width: 200,
    borderRadius: 8,
  },

  pressable: {
    margin: 24,
    marginTop: 0,
    fontSize: 18,
    padding: 10,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'blue',
    width: 200,
    borderRadius: 8,
  },
  foto: {
    margin: 2,
    height: 200,
    width: 200,
    alignItems: 'center',
  },
  textinput: {
    margin: 10,
    textAlign: 'left',
    backgroundColor: 'lightgrey',
    color: 'grey',
    borderRadius: 8,
    padding: 10,
    width: 200,
    height: 40,
  },
});
