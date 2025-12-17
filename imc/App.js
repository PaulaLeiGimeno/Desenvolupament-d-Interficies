import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import Titol from './components/Titol';
import Calculadora from './components/Calculadora';
import Resultat from './components/Resultat';

export default function App() {
  const [imc, setImc] = useState();
  const rebreImc = (imcDelFill) => {
    setImc(imcDelFill);
  };
  return (
    <View style={styles.container}>
      <Titol />
      <Calculadora enviarAlPare={rebreImc} />
      <Resultat nuevoImc={imc} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
