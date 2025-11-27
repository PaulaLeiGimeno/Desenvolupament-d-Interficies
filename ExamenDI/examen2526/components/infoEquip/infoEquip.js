
import {React, useEffect} from 'react';
import { StyleSheet, Text, View, Image } from "react-native";
import { getFitxaEquip, getObjEquip } from "../../utils/funcionsEquips";

/**
 * Mostra la informació d'un equip en forma de targeta. La informació 
 * es mostra verticalment, una baix de l'altra.
 * Consta de la imatge de l'escut de l'equip de futbol, el nom de l'equip i l'any de fundació. 
 *
 * @component
 *
 * @param {Object} props - Propietats del component.
 * @param {string} props.nom - Nom de l'equip del qual volem mostrar la informació .
 * @requires module:utils/funcionsEquips.getFitxaEquip
 * @requires module:utils/funcionsEquips.getObjEquip
 * @example
 * <InfoEquip nom="Valencia" />
 */

const InfoEquip = ({ nom }) => {

  //Obtenim la fitxa de l'equip
  const objecte = getObjEquip(nom);
  const fitxaEquip = getFitxaEquip(objecte);
  
  return (
    <View style={styles.container}>
      <View style={{flex:2, flexDirection:'column'}}>
        <Image
          style={styles.escutEquip}
          resizeMode="contain"
          source={{
            uri: fitxaEquip.imatgeEscut,
          }}
        />
      </View>
      <View style={{alignItems: "center",justifyContent: "center", flex: 1, margin:5}}>
          <Text  style={styles.nomEquip}>{fitxaEquip.nom}</Text>
          <Text style={styles.anyFundacio}>
            {fitxaEquip.anyFundacio}
          </Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    backgroundColor: "#d8fb59ff",
    alignItems: "center",
    alignContent:"center",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    minHeight:'10%',
    minWidth:'10%'
  },
  escutEquip: {
    flex: 1,
    aspectRatio: 1,
    margin:'1%',
  },
  nomEquip: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  anyFundacio: {
    textAlign: "center",
    fontSize: 18,
    color: "#646953",
  },
});
export default InfoEquip;
