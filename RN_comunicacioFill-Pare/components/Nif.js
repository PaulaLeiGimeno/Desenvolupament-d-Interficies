import React, {useState} from 'react';
import {View, Text, TextInput, Keyboard} from 'react-native';

import calculaLletraNif from '../esborrar';

const Nif = props => {
  const [elDNIintroduit, canviaElDNIintroduit] = useState('');
  const [lletraDNI, canviaLletraDNI] = useState('');

  const guardaDNI = valor => {
    if (valor.length === 8) {
      canviaElDNIintroduit(elDNIintroduit);
      let laLletra = calculaLletraNif(valor);
      canviaLletraDNI(laLletra);
      Keyboard.dismiss();
      console.log(
        'Al component fill, el dni es ' + valor + ' i la lletra es ' + laLletra,
      );
      props.tornaNif({dni: valor, lletra: laLletra}); // Ens comuniquem amb el component Pare
    }
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: props.color,
        borderColor: 'blue',
        borderWidth: 2,
      }}>
      <Text>DNI:</Text>
      <TextInput
        style={{fontSize: 15, fontWeight: 'normal', width: 200}}
        placeholder="Escriu el dni"
        placeholderTextColor="#FF0000"
        onChangeText={unDni => guardaDNI(unDni)}
        maxLength={8}
        keyboardType="number-pad"
        underlineColorAndroid="blue"
      />

      <Text>Lletra:</Text>
      <TextInput
        style={{fontWeight: 'bold', fontSize: 15}}
        placeholder=""
        placeholderTextColor="#FF0000"
        value={lletraDNI}
        editable={false}
        underlineColorAndroid="blue"
      />
    </View>
  );
};
export default Nif;
