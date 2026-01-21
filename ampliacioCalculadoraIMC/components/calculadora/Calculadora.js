import React, { useState } from "react";

import { StyleSheet, View, Keyboard, ScrollView } from "react-native";
import {
  TextInput,
  Button,
  HelperText,
  Divider,
  Text,
  Chip,

} from "react-native-paper";
import { comprovaPes, comprovaAlt, calculaIMC } from "../../utils/Utils";
import {calculsDadesSalut} from "../../utils/FuncionsSalut";

import { Picker } from "@react-native-picker/picker";
import InputSpinner from "react-native-input-spinner";


/**
 * Aquest component recull les dades d'usuari per a poder calcular
 * l'index IMC. En cas que les dades introduïdes no siguen correctes,
 * mostra un missatge a l'usuari informant del format de les dades demanades.
 * Quan les dades siguen correctes mostrarà un botó que permetrà calcular l'IMC.
 * Cal instal·lar la llibreria de tercers: https://reactnative.directory/package/@react-native-picker/picker
 * Cal instal·lar la llibreria de tercers: https://reactnative.directory/package/react-native-input-spinner
 *
 * @component
 *
 * @requires module:utils/comprovaPes
 * @requires module:utils/comprovaAlt
 * @requires module:utils/comprovaAlt
 * @param {Object} props - Propietats del que rep el component.
 * @param {string} props.comunicaIMC - Funció que utilitza este component per a comunicar el IMC calculat al component pare (comunicació fill-pare)
 *
 * @example
 * <Calculadora comunicaIMC=={rebreIMC}/>
 */
const Calculadora = (props) => {
  const [pes, canviaPes] = useState(0.0); //conté el pes introduït per l'usuari
  const [alt, canviaAlt] = useState(0.0); // conté l'alçada introduïda per l'usuari
  const [errorPesMsg, canviaErrorPesMsg] = useState(""); //conté el missatge d'error per al pes incorrecte
  const [errorAltMsg, canviaErrorAltMsg] = useState(""); //conté el missatge d'error per a l'alçada incorrecta

  //variables necessaries per al selector (Picker)
  const [sexeSeleccionat, setSexeSeleccionat] = useState("Mascle");
  //variables necessaries per al selector (Spinner)
  const [edatSeleccionada, setEdatSeleccionada] = useState(18);
  //variable necessaria per a seleccionar Nivell d'Activitat (NA)
  const [nivellAct, setNivellAct] = useState("Moderat");

  const seleccioNA = (na) =>{
    Keyboard.dismiss();
    setNivellAct(na);
  }

  const isSelected=(na)=>{
    return(nivellAct===na)
  }
  /**
   *  Aquesta funció rep un pes, i comprova si té el format adient.
   * @return {Object} props - Propietats del objecte que torna.
   * @param {string} props.correcte - True o false, indica si el pes compleix el format establert o no
   * @param {string} props.msg - Missatge d'error (només en cas que props.correcte siga false).
   *
   **/
  const comprovaIActualitzaPes = (pes) => {
    const resultatComprovacio = comprovaPes(pes);
    canviaPes(pes);
    canviaErrorPesMsg(resultatComprovacio.msg);
    props.comunicaDadesSalut(null);
  };

  /**
   *  Aquesta funció rep una alçada, i comprova si té el format adient.
   * @return {Object} props - Propietats del objecte que torna.
   * @param {string} props.correcte - True o false, indica si l'alçada compleix el format establert o no
   * @param {string} props.msg - Missatge d'error (nomén en cas que props.correcte siga true).
   *
   **/
  const comprovaIActualitzaAlt = (alt) => {
    const resultatComprovacio = comprovaAlt(alt);
    canviaAlt(alt);
    canviaErrorAltMsg(resultatComprovacio.msg);
    props.comunicaIMC(null);
  };

  /**
   *  Aquesta funció ens indica si tant el pes com l'alçada són correctes.
   *  Ens permetrà mostrar el botó calcular o no.
   * @return {boolean} - true, si les dades són correctes, false si no ho són.
   *
   **/
  const dadesCorrectes = () => {
    if (
      errorPesMsg.length === 0 &&
      errorAltMsg.length === 0 &&
      parseFloat(pes) > 0.0 &&
      parseFloat(alt) > 0.0 &&
      nivellAct!==null
    )
      return true;
    else return false;
  };

  return (
    <View>
      <Divider bold={true} horizontalInset={true} />
      <View style={{ flexDirection: "row" }}>
        <View style={styles.contenidorMissatges}>
          <TextInput
            style={{ fontSize: 20, margin: 5 }}
            outlineStyle={{ borderColor: "green" }}
            mode="outlined"
            label="Pes (kg)"
            keyboardType="numeric"
            onChangeText={(nouPes) => {
              comprovaIActualitzaPes(nouPes);
            }}
            onBlur={() => Keyboard.dismiss()}
            right={<TextInput.Affix text="Kg." />}
          />
          <TextInput
            style={{ fontSize: 20, margin: 5 }}
            outlineStyle={{ borderColor: "orange" }}
            mode="outlined"
            label="Alçada (m)"
            keyboardType="numeric"
            onChangeText={(novaAlt) => {
              comprovaIActualitzaAlt(novaAlt);
            }}
            onBlur={() => Keyboard.dismiss()}
            right={<TextInput.Affix text="m." />}
          />
        </View>
        <View style={styles.contenidorMissatges}>
          <HelperText
            type="error"
            visible={true}
            style={{ fontSize: 15, flex: 1 }}
          >
            {errorPesMsg}
          </HelperText>
          <HelperText
            type="error"
            visible={true}
            style={{ fontSize: 15, flex: 1 }}
          >
            {errorAltMsg}
          </HelperText>
        </View>
      </View>
      <View style={{ margin: 5, padding: 5 }}>
        <Divider bold={true} horizontalInset={true} />
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1}}>
            <Text style={{ fontSize: 20, alignSelf:'center' }}>Sexe:</Text>
            <Picker
              style={{ fontSize: 20, margin: 5 }}
              selectedValue={sexeSeleccionat}
              onValueChange={(itemValue, itemIndex) =>{
                Keyboard.dismiss();
                setSexeSeleccionat(itemValue)
              }
              }
            >
              <Picker.Item
                label="Mascle"
                value="Mascle"
                color="#0535f7ff"
                fontFamily="sans-serif"
                style={{ fontSize: 20 }}
              />
              <Picker.Item
                label="Femella"
                value="Femella"
                color="#f006f8ff"
                fontFamily="sans-serif"
                style={{ fontSize: 20 }}
              />
            </Picker>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20, alignSelf:'center'}}>Edat</Text>
            <InputSpinner
              max={99}
              min={1}
              step={1}
              editable={false}
              colorMax={"#f04048"}
              colorMin={"#40c5f4"}
              value={edatSeleccionada}
              onChange={(num) => {
                Keyboard.dismiss();
                setEdatSeleccionada(num);
              }}
              skin="modern"
              inputStyle={{fontFamily:'sans-serif', fontSize:20}}
              style={{alignSelf:'center',margin:5 }}
            />
            
          </View>
        </View>
        <View>
          <Divider bold={true} horizontalInset={true} />
          <View style={{flexDirection:'row', justifyContent:'center',padding:5}}>
            <Text style={{ fontSize: 20, alignSelf:'center'}}>Nivell d'Activitat: </Text>
            <Text style={{ fontSize: 20, fontWeight: "bold", textAlign:'center' }}> {nivellAct} </Text>
          </View>
          <View style={{flexDirection:'row', flexWrap: 'wrap', justifyContent:'center',padding:5}}>
            
              <Chip style={{backgroundColor:'#fc5437ff'}} textStyle={{fontSize:18, color:'white'}} selected={isSelected('Sedentari')} selectedColor={'#013901ff'} onPress={() => seleccioNA('Sedentari')}>Sed.</Chip>
              <Chip style={{backgroundColor:'#ba601fff'}} textStyle={{fontSize:18, color:'white'}} selected={isSelected('Lleu')} selectedColor={'#013901ff'} onPress={() => seleccioNA('Lleu')}>Lleu</Chip>
              <Chip style={{backgroundColor:'#a3c606ff'}} textStyle={{fontSize:18, color:'white'}} selected={isSelected('Moderat')} selectedColor={'#013901ff'} onPress={() => seleccioNA('Moderat')}>Mod.</Chip>
              <Chip style={{backgroundColor:'#03d437ff'}} textStyle={{fontSize:18, color:'white'}} selected={isSelected('Alt')} selectedColor={'#013901ff'} onPress={() => seleccioNA('Alt')}>Alt</Chip>
              <Chip style={{backgroundColor:'#898aff'}} textStyle={{fontSize:18, color:'white'}} selected={isSelected('Molt Alt')} selectedColor={'#013901ff'} onPress={() => seleccioNA('Molt Alt')}>M. A.</Chip>
            
          </View>
          <Divider bold={true} horizontalInset={true} />
        </View>
      </View>
      {dadesCorrectes() && (
        <View style={{ marging: 15, padding: 15 }}>
          <Button
            labelStyle={{ fontSize: 20, fontWeight: "bold" }}
            icon="calculator"
            mode="contained"
            onPress={() => {
              Keyboard.dismiss();
              props.comunicaDadesSalut(calculsDadesSalut(calculaIMC(pes, alt),alt,pes,sexeSeleccionat,edatSeleccionada,nivellAct));
            }}
          >
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
    fontWeight: "bold",
    color: "green",
  },
  titol_b: {
    fontWeight: "bold",
    color: "blue",
  },
  lletresDeColors: {
    flexDirection: "row",
    justifycontent: "center",
    alignContent: "center",
    alignSelf: "center",
  },
});

export default Calculadora;
