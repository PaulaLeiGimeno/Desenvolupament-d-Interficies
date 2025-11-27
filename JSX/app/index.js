import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, PaperProvider, TextInput } from "react-native-paper";

const Inici = () => {
  const nom = (textAMostrar, estil) => {
    return <Text style={estil}>{textAMostrar}</Text>;
  };

  const paula = "Paula Lei Gimeno Castillo";
  const estiloNom = { backgroundColor: 'blue', color: 'white', fontSize: 18 };


  const isAdmin = true;

  const mostrarBotoAdmin = () => {
    if (isAdmin) {
      return (
        <Button
          icon="format-list-bulleted"
          style={{ backgroundColor: 'violet', color: 'white' }}
        >
          INFORMES
        </Button>
      );
    }
    return null;
  };


  const estilsTextInput = [
    { label: 'Email', estil: styles.florida, placeholderColor: 'white', color: 'white' },
    { label: 'Nom', estil: styles.florida, placeholderColor: 'orange', color: 'orange' },
  ];

  const dades = (items) => {
    return items.map((element, index) => (
      <TextInput
        key={index}
        mode="outlined"
        label={element.label}
        placeholder={element.label}
        placeholderTextColor={element.placeholderColor}
        style={element.estil}
      />
    ));
  };
  const moduls2Dam = [
    { nom: 'DIN', professor: 'Manel', hores: 120 },
    { nom: 'ADA', professor: 'Roberto', hores: 120 },
    { nom: 'PMDM', professor: 'Paco', hores: 100 },
    { nom: 'PSP', professor: 'Roberto', hores: 60 },
    { nom: 'SGE', professor: 'Belén', hores: 100 },
    { nom: 'Anglés', professor: 'Caterina', hores: 40 },
    { nom: 'EIE', professor: 'Ana', hores: 60 },
  ];
  const arraybgColor = (indez) => {
    if (indez % 2 == 0) {
      return "#F48FB1"
    }
    else {
      return "#F8BBD0"
    }
  }
  const recorrerArray = () => {
    return moduls2Dam.map((element, index) => (

      <View key={index} style={{ backgroundColor: arraybgColor(index) }}>
        <Text>{index}</Text>
        <Text>{element.nom}</Text>
        <Text>{element.professor}</Text>
        <Text>{element.hores}</Text>
      </View>
    ));
  };

  return (
    <PaperProvider>
      <View style={styles.margin}>
        {nom(paula, estiloNom)}
      </View>

      <View style={styles.margin}>
        {dades(estilsTextInput)}
      </View>

      <View style={styles.margin}>
        {mostrarBotoAdmin()}
      </View>

      <View style={styles.margin}>
        {recorrerArray()}
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  upv: {
    backgroundColor: 'purple',
    fontSize: 10,
    fontWeight: '600',
    padding: 4,
    paddingLeft: 12,
    textAlign: 'left',
    color: 'grey',
  },
  florida: {
    backgroundColor: 'red',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  margin: {
    margin: 5,
    padding: 5,
  }
});

export default Inici;
