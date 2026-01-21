import React, { useState } from 'react';
import { StyleSheet, View, Keyboard } from 'react-native';
import { TextInput, Button, HelperText, IconButton, Text } from 'react-native-paper';
import { SelectList } from 'react-native-dropdown-select-list';
import { comprovaPes, comprovaAlt, calculaIMC, calculaPesIdeal, calculaCaloriesDiariesRecomanades } from '../../utils/Utils';

/**
 * Aquest component recull les dades d'usuari per a poder calcular
 * l'index IMC. En cas que les dades introduïdes no siguen correctes,
 * mostra un missatge a l'usuari informant del format de les dades demanades.
 * Quan les dades siguen correctes mostrarà un botó que permetrà calcular l'IMC. 
 *
 * @component
 *
 * @requires module:utils/comprovaPes
 * @requires module:utils/comprovaAlt
 * @requires module:utils/comprovaAlt
 * 
 * @example
 * <Calculadora />
 */
const Calculadora = (props) => {

  const [pes, canviaPes] = useState(0.0); //conté el pes introduït per l'usuari
  const [alt, canviaAlt] = useState(0.0); // conté l'alçada introduïda per l'usuari
  const [edat, canviaEdat] = useState(0); // conté l'edat introduïda per l'usuari
  const [sexe, canviaSexe] = useState(''); // conté el sexe (home/dona)
  const [nivellActivitatSel, setNivellActivitatSel] = useState(''); // conté el nivell d'activitat seleccionat
  const [errorPesMsg, canviaErrorPesMsg] = useState(''); //conté el missatge d'error per al pes incorrecte
  const [errorAltMsg, canviaErrorAltMsg] = useState(''); //conté el missatge d'error per a l'alçada incorrecta


  /**
   *  Aquesta funció rep un pes, i comprova si té el format adient.
   * @return {Object} props - Propietats del objecte que torna.
   * @param {string} props.correcte - True o false, indica si el pes compleix el format establert o no
   * @param {string} props.msg - Missatge d'error (només en cas que props.correcte siga false).
   *
   **/
  const comprovaIActualitzaPes = pes => {
    const resultatComprovacio = comprovaPes(pes);
    canviaPes(pes);
    canviaErrorPesMsg(resultatComprovacio.msg);
    if (props.comunicaIMC) props.comunicaIMC(null);
    if (props.comunicaPesIdeal) props.comunicaPesIdeal(null);
    if (props.comunicaCalories) props.comunicaCalories(null);
  };

  /**
   *  Aquesta funció rep una alçada, i comprova si té el format adient.
   * @return {Object} props - Propietats del objecte que torna.
   * @param {string} props.correcte - True o false, indica si l'alçada compleix el format establert o no
   * @param {string} props.msg - Missatge d'error (nomén en cas que props.correcte siga true).
   *
   **/
  const comprovaIActualitzaAlt = alt => {
    const resultatComprovacio = comprovaAlt(alt);
    canviaAlt(alt);
    canviaErrorAltMsg(resultatComprovacio.msg);
    if (props.comunicaIMC) props.comunicaIMC(null);
    if (props.comunicaPesIdeal) props.comunicaPesIdeal(null);
    if (props.comunicaCalories) props.comunicaCalories(null);
  };

  /**
   *  Aquesta funció ens indica si tant el pes com l'alçada són correctes
   * @return {boolean} - true, si les dades són correctes, false si no ho són.
   *
   **/
  const dadesCorrectes = () => {
    return (
      errorPesMsg.length === 0 &&
      errorAltMsg.length === 0 &&
      parseFloat(pes) > 0.0 &&
      parseFloat(alt) > 0.0 &&
      parseInt(edat) > 0 &&
      sexe !== '' &&
      nivellActivitatSel !== ''
    );
  };

  const nivellActivitat = [
    { key: 'Sedentari', value: 'Sedentari' },
    { key: 'Lleu', value: 'Lleu' },
    { key: 'Moderat', value: 'Moderat' },
    { key: 'Alt', value: 'Alt' },
    { key: 'Molt Alt', value: 'Molt Alt' },
  ];

  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.contenidorMissatges}>
          <TextInput
            style={{ fontSize: 20, width: 400 }}
            outlineStyle={{ borderColor: 'green' }}
            mode="outlined"
            label="Pes (kg)"
            keyboardType="numeric"
            onChangeText={nouPes => {
              comprovaIActualitzaPes(nouPes);
            }}
            onBlur={() => Keyboard.dismiss()}
            right={<TextInput.Affix text="Kg." />}
          />
          <TextInput
            style={{ fontSize: 20, width: 400 }}
            outlineStyle={{ borderColor: 'orange' }}
            mode="outlined"
            label="Alçada (m)"
            keyboardType="numeric"
            onChangeText={novaAlt => {
              comprovaIActualitzaAlt(novaAlt);
            }}
            onBlur={() => Keyboard.dismiss()}
            right={<TextInput.Affix text="m." />}
          />
          <TextInput
            style={{ fontSize: 20, width: 400 }}
            outlineStyle={{ borderColor: 'blue' }}
            mode="outlined"
            label="Edat (anys)"
            keyboardType="numeric"
            onChangeText={novaEdat => {
              canviaEdat(novaEdat);
            }}
            onBlur={() => Keyboard.dismiss()}
            right={<TextInput.Affix text="anys." />}
          />
        </View>
        <View style={styles.contenidorMissatges}>
          <HelperText type="error" visible={true} style={{ fontSize: 15, flex: 1 }}>
            {errorPesMsg}
          </HelperText>
          <HelperText type="error" visible={true} style={{ fontSize: 15, flex: 1 }}>
            {errorAltMsg}
          </HelperText>
        </View>
      </View>
      <Text style={{ marginTop: 20, fontSize: 20, fontWeight: 'bold' }}>Sexe: {sexe}</Text>

      <View style={{ flex: 1, flexDirection: 'row' }}>
        <IconButton
          icon="human-female"
          size={30}
          mode={sexe === 'dona' ? 'contained' : 'default'}
          onPress={() => canviaSexe('dona')}
        />
        <IconButton
          icon="human-male"
          size={30}
          mode={sexe === 'home' ? 'contained' : 'default'}
          onPress={() => canviaSexe('home')}
        />
      </View>
      <Text style={{ marginTop: 20, marginBottom:10, fontSize: 20, fontWeight: 'bold' }}>Nivell d’activitat :</Text>
      <SelectList
        setSelected={(val) => setNivellActivitatSel(val)}
        data={nivellActivitat}
        save="value"
        placeholder="Selecciona nivell d'activitat"
      />


      {dadesCorrectes() && (
        <View style={{ marging: 15, padding: 15 }}>
          <Button
            labelStyle={{ fontSize: 20, fontWeight: 'bold' }}
            icon="calculator"
            mode="contained"
            onPress={() => {
              Keyboard.dismiss();
              if (props.comunicaIMC) props.comunicaIMC(calculaIMC(pes, alt));
              if (props.comunicaPesIdeal) props.comunicaPesIdeal(calculaPesIdeal(alt));
              if (props.comunicaPes) props.comunicaPes(pes);
              if (props.comunicaCalories) props.comunicaCalories(calculaCaloriesDiariesRecomanades(parseFloat(pes), parseFloat(alt), parseInt(edat), sexe, nivellActivitatSel));
            }}>
            Calcular
          </Button>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contenidorMissatges: {
    flex: 1,
  },
  titol_g: {
    fontWeight: 'bold',
    color: 'green',
  },
  titol_b: {
    fontWeight: 'bold',
    color: 'blue',
  },
  lletresDeColors: {
    flexDirection: 'row',
    justifycontent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
});

export default Calculadora;