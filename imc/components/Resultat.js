import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';

export default function Resultat({ nuevoImc }) {
  const [colorText, setColorText] = useState('');
  const [missatge, setMissatge] = useState('');
  const [visible, setVisible] = useState('white');

  useEffect(() => {
    calculaMissatge(nuevoImc);
  }, [nuevoImc]);

  const calculaMissatge = (imc) => {
    setVisible('black');
    if (imc < 18.5) {
      setMissatge('Pes insuficient');
      setColorText('green');
    } else if (imc >= 18.5 && imc <= 24.9) {
      setMissatge('Normopés');
      setColorText('green');
    } else if (imc >= 25 && imc <= 26.9) {
      setMissatge('Sobrepés grau I');
      setColorText('green');
    } else if (imc >= 27 && imc <= 29.9) {
      setMissatge('Sobrepés grau II');
      setColorText('orange');
    } else if (imc >= 30 && imc <= 34.9) {
      setMissatge('Obesitat de tipus I');
      setColorText('orange');
    } else if (imc >= 35 && imc <= 39.9) {
      setMissatge('Obesitat de tipus II');
      setColorText('orange');
    } else if (imc >= 40 && imc <= 49.9) {
      setMissatge('Obesitat de tipus III (mòrbida)');
      setColorText('red');
    } else if (imc > 50) {
      setMissatge('Obesitat de tipus IV (extrema)');
      setColorText('red');
    } else {
      setMissatge();
      setVisible('white');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.paragraph, { color: visible }]}>
        Tens un IMC de {nuevoImc}
      </Text>
      <Text style={[styles.imc, { color: colorText }]}>{missatge}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 3,
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    width: 200,
  },
  imc: {
    margin: 3,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 200,
  },
});
