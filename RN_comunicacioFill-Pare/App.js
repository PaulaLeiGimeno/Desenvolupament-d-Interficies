/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Nif from './components/Nif'; //Importem el component NIF des de la ruta indicada

const App = () => {
  const [dni, canviaDni] = useState('');
  const [lletra, canviaLletra] = useState('');

  // Aquesta funció es defineix al component pare,
  // i és la que utilitza el component fill
  // per a passar-li dades al component pare.
  const getNifILletra = ({dni, lletra}) => {
    // El component fill li passa el dni i la lletra al component pare.
    console.log('Estic al component Pare!');
    console.log(dni + '-' + lletra);
    canviaDni(dni);
    canviaLletra(lletra); // El component pare guarda al seu estat el dni i la lletra que li ha passat el component fill
  };

  return (
    <View style={{borderColor: 'green', borderWidth: 4}}>
      <Text style={{fontSize: 25, fontWeight: 'bold', textAlign: 'center'}}>
        Formulari Dades Usuari:
      </Text>
      <Nif tornaNif={getNifILletra} color="white"></Nif>
      <Text>
        {/* Mostrem al component pare, les dades rebudes del component fill */}
        He rebut del component fill:{' '}
        {dni !== undefined ? dni + '-' + lletra : '-'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
