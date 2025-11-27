import { StyleSheet, Text, View, TouchableOpacity, Alert, Button } from "react-native"; // Afegim TouchableOpacity, Alert, Button
import { getFitxaEquip, getObjEquip } from "../../utils/funcionsEquips";
import InfoEquip from "../infoEquip/infoEquip";

const InfoPartit = ({
  local,
  visitant,
  hora,
  estadi = null,
  data, // <-- EJERCICIO 2
  partitDestacat, // <-- EJERCICIO 10
  funcioEliminar, // <-- EJERCICIO 15
}) => {
  const objecte = getObjEquip(local);
  const equipLocal = getFitxaEquip(objecte);

  const objecte2 = getObjEquip(visitant);
  const equipVisitant = getFitxaEquip(objecte2);

  // <-- EJERCICIO 10: Estil condicional
  const estilTargeta = [
    styles.container,
    partitDestacat && styles.destacat, // Si partitDestacat és true, afegeix l'estil 'destacat'
  ];

  // <-- EJERCICIO 14: Funció per l'alerta
  const mostrarAlertaPartit = () => {
    Alert.alert("Partit", `${local} vs ${visitant}`);
  };

  return (
    // <-- EJERCICIO 14: Component clicable
    // <-- EJERCICIO 10: Estil aplicat
    <TouchableOpacity onPress={mostrarAlertaPartit}>
      <View style={estilTargeta}> 
        
        {/* // <-- EJERCICIO 15: Botó d'eliminar */}
        <View style={styles.botoEliminar}>
          <Button title="X" color="red" onPress={() => funcioEliminar(local)} />
        </View>

        <View
          style={{ flex: 1, flexDirection: "row", alignContent: "space-evenly" }}
        >
          <InfoEquip nom={equipLocal.nom} />
          <InfoEquip nom={equipVisitant.nom} />
        </View>
        <View
          style={{ flex: 0.25, flexDirection: "row", alignItems: "center" }}
        >
          {/* // <-- EJERCICIO 2: Data afegida */}
          <Text style={{ fontWeight: "bold" }}>{data} - {hora} </Text>
          <Text>{estadi === null ? equipLocal.estadi : estadi}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    backgroundColor: "#ecf0deff",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
  },
  // <-- EJERCICIO 10: Nou estil per partits destacats
  destacat: {
    borderColor: "orange",
    borderWidth: 3,
    backgroundColor: "#fff8e1",
  },
  // <-- EJERCICIO 15: Estil pel botó d'eliminar
  botoEliminar: {
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 1, // Per assegurar que estiga damunt
  },
  escutEquip: {
    flex: 1,
    aspectRatio: 1,
  },
  nomEquip: {
    flex: 0.3,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
});
export default InfoPartit;