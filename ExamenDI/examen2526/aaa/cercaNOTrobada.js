import { React } from "react";
import { Text, View, Image, StyleSheet } from "react-native"; // Afegim StyleSheet
// import imatgeRobot from "../../assets/images/robot.jpg"; // <-- EJERCICIO 21: Eliminem imatge local

/**
 * Mostra un missatge d'error quan no troba cap registre en una cerca genèrica.
 */
const CercaNoTrobada = ({ missatgeError, textACercar }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textError}> {missatgeError} </Text>
      <Text style={styles.textCercat}>{textACercar}</Text>
      <Image
        style={{ width: 150, height: 150, resizeMode: "contain", marginTop: 20 }}
        // <-- EJERCICIO 21: Imatge des d'URL
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/1693/1693757.png",
        }}
      />
    </View>
  );
};

// <-- EJERCICIO 21: Nous estils
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  textError: {
    fontSize: 18,
    textAlign: "center",
    color: "#333",
  },
  textCercat: {
    fontSize: 22,
    color: "red",
    fontWeight: "bold",
    marginTop: 5,
  },
});

export default CercaNoTrobada;