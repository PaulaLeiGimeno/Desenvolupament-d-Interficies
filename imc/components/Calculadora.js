import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import { useState } from 'react';

export default function Calculadora(props) {
  const [pes, setPes] = useState();
  const [alt, setAlt] = useState();

  const calculaIMC = (pes, altura) => {
    let imc = pes / (altura * altura);
    props.enviarAlPare(imc);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          borderWidth: 1,
          borderColor: 'green',
          borderRadius: 8,
          width: 250,
          marginBottom: 3,
        }}>
        <TextInput
          style={[styles.textinput, { borderColor: 'green' }]}
          placeholder="Pes (kg)"
          value={pes}
          onChangeText={setPes}
        />
        <Text style={{ padding: 10, fontSize: 18 }}>.Kg</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          borderWidth: 1,
          borderColor: 'orange',
          borderRadius: 8,
          width: 250,
        }}>
        <TextInput
          style={[styles.textinput, { borderColor: 'green' }]}
          placeholder="Alçada (m)"
          value={alt}
          onChangeText={setAlt}
        />
        <Text style={{ padding: 10, fontSize: 18 }}>.m</Text>
      </View>
      <Text style={styles.pressable} onPress={() => calculaIMC(pes, alt)}>
        Calcular
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },

  pressable: {
    margin: 24,
    marginTop: 20,
    fontSize: 18,
    padding: 10,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'blueviolet',
    width: 300,
    borderRadius: 8,
  },
  textinput: {
    textAlign: 'left',
    color: 'grey',
    padding: 10,
    width: 200,
    height: 40,
  },
});
