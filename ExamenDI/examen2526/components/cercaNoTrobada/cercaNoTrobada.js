import { React } from "react";
import { Text, View, Image } from "react-native";
import imatgeRobot from "../../assets/images/robot.jpg";

/**
 * Mostra un missatge d'error quan no troba cap registre en una cerca genèrica.
 *
 * @component
 *
 * @param {Object} props - Propietats del component.
 * @param {string} props.missatgeError - Missatge d'error a mostrar.
 * @param {string} props.textACercar - Text utilitzat en la cerca realitzada.
 * 
 * @example
 * <CercaNoTrobada
 *   missatgeError="No he trobat cap partit amb equips que continguen:"
 *   textACercar="Florida Universitària"
 * />
 */
const CercaNoTrobada = ({ missatgeError, textACercar }) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text> {missatgeError} </Text>
      <Text style={{ color: "blue", fontWeight: "bold" }}>{textACercar}</Text>
      <Image
        style={{ width: 200, height: 200, resizeMode: "contain" }}
        source={imatgeRobot}
      />
    </View>
  );
};

export default CercaNoTrobada;
