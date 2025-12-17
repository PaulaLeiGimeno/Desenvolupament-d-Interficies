import { StyleSheet, Text, View } from 'react-native';
import { HelperText, TextInput, Button } from 'react-native-paper';
import { useEffect, useState } from 'react';

export default function Calculadora(props) {
  const [pes, setPes] = useState('');
  const [alt, setAlt] = useState('');

  const [pesError, setPesError] = useState('');
  const [altError, setAltError] = useState('');


  const validarPes = (valor) => {
    if (!valor) {
      setPesError('El pes és obligatori');
      return false;
    }
    const num = parseFloat(valor);
    if (isNaN(num)) {
      setPesError('Introdueix un valor numèric');
      return false;
    }
    if (num <= 0) {
      setPesError('El pes ha de ser positiu');
      return false;
    }
    setPesError('');
    return true;
  };

  const validarAlt = (valor) => {
    if (!valor) {
      setAltError("L'alçada és obligatòria");
      return false;
    }
    const num = parseFloat(valor);
    if (isNaN(num)) {
      setAltError('Introdueix un valor numèric');
      return false;
    }
    if (num <= 0) {
      setAltError("L'alçada ha de ser positiva");
      return false;
    }
    setAltError('');
    return true;
  };

  const calculaIMC = () => {
    if (validarPes(pes) && validarAlt(alt)) {
      const pesNum = parseFloat(pes);
      const altNum = parseFloat(alt);

      const imc = (pesNum / (altNum * altNum)).toFixed(2);
      props.enviarAlPare(imc);
    }
  };

  return (
    <View style={styles.container}>

      <View style={styles.row}>
        <TextInput
          style={styles.textinput}
          placeholder="Pes (kg)"
          value={pes}
          onChangeText={(text) => { setPes(text); validarPes(text); }}
          keyboardType="numeric"
        />
        <Text style={styles.unit}>Kg</Text>
      </View>
      <HelperText type="error" visible={!!pesError}>{pesError}</HelperText>


      <View style={styles.row}>
        <TextInput
          style={styles.textinput}
          placeholder="Alçada (m)"
          value={alt}
          onChangeText={(text) => { setAlt(text); validarAlt(text); }}
          keyboardType="numeric"
        />
        <Text style={styles.unit}>m</Text>

      </View>
      <HelperText type="error" visible={!!altError}>{altError}</HelperText>


      <Button onPress={calculaIMC}>
        Calcular
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  row: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    width: 250,
    marginBottom: 10,
  },
  unit: {
    padding: 10,
    fontSize: 18,
  },
  error: {
    color: 'red',
    fontSize: 16,
  },

  textinput: {
    textAlign: 'left',
    color: 'grey',
    padding: 10,
    width: 200,
    height: 40,
  },
});
