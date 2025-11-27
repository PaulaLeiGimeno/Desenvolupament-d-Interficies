import { React, useState } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native"; // Afegim Button i Alert
import { Searchbar } from "react-native-paper";
import InfoPartit from "./components/infoPartit/infoPartit";
import CercaNoTrobada from "./components/cercaNoTrobada/cercaNoTrobada";

// <-- EJERCICIO 1: Importem les dades des d'un fitxer extern
import { unaPossibleLlista } from "./data/partits";

const App = () => {
  // Aquest estat manté la llista COMPLETA i original
  const [llistaMestra, setLlistaMestra] = useState(unaPossibleLlista);
  
  // Aquest estat manté la llista que es MOSTRA (filtrada, ordenada, etc.)
  const [llistatPartits, actualitzaLlistaPartits] = useState(llistaMestra);
  
  const [criteriDeCerca, setCriteriDeCerca] = useState("");

  const desaCercaIFiltra = (unTextDeCerca) => {
    setCriteriDeCerca(unTextDeCerca);
    cercaElPartitDunEquip(unTextDeCerca);
  };

  const cercaElPartitDunEquip = (lletresDunEquip) => {
    if (lletresDunEquip === "") {
      actualitzaLlistaPartits(llistaMestra); // Mostrem la llista mestra
    } else {
      const cerca = llistaMestra.filter( // Busquem sempre sobre la llista mestra
        (unPartit) =>
          unPartit.local
            .toLowerCase()
            .includes(lletresDunEquip.toLowerCase()) ||
          unPartit.visitant
            .toLowerCase()
            .includes(lletresDunEquip.toLowerCase())
      );
      actualitzaLlistaPartits(cerca);
    }
  };

  // <-- EJERCICIO 15: Funció per eliminar un partit
  const eliminarPartit = (local) => {
    Alert.alert(
      "Eliminar Partit",
      `Estàs segur que vols eliminar el partit del ${local}?`,
      [
        { text: "Cancel·lar", style: "cancel" },
        {
          text: "Eliminar",
          onPress: () => {
            // Actualitzem la llista MESTRA
            const novaLlistaMestra = llistaMestra.filter(
              (p) => p.local !== local
            );
            setLlistaMestra(novaLlistaMestra);

            // Actualitzem la llista MOSTRADA (filtrada)
            const novaLlistaFiltrada = llistatPartits.filter(
              (p) => p.local !== local
            );
            actualitzaLlistaPartits(novaLlistaFiltrada);
          },
          style: "destructive",
        },
      ]
    );
  };

  // <-- EJERCICIO 12: Funció per ordenar alfabèticament
  const ordenarPartits = () => {
    // Creem una còpia de la llista mostrada per no mutar l'estat directament
    const llistaOrdenada = [...llistatPartits].sort((a, b) =>
      a.local.localeCompare(b.local)
    );
    actualitzaLlistaPartits(llistaOrdenada);
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.3, margin: "1%" }}>
        <Searchbar
          placeholder="Cercar un partit ..."
          onChangeText={desaCercaIFiltra}
          onClearIconPress={() => actualitzaLlistaPartits(llistaMestra)} // <-- Corregit per carregar la mestra
          value={criteriDeCerca}
          mode="bar"
          style={{ backgroundColor: "#d8fb59ff" }}
          inputStyle={{ color: "green", fontSize: 25 }}
        />
      </View>
      <View style={{ flex: 4 }}>
        <View style={{ flex: 1 }}>
          <Text style={styles.titol}>Llistat de partits:</Text>
          
          {/* // <-- EJERCICIO 12: Botó per ordenar */}
          <Button title="Ordenar A-Z (per equip local)" onPress={ordenarPartits} />

          {llistatPartits.length === 0 ? (
            <CercaNoTrobada
              missatgeError="No he trobat cap partit amb equips que continguen:"
              textACercar={criteriDeCerca}
            />
          ) : (
            llistatPartits.map((unPartit) => { // Tret 'index'
              return (
                <View style={styles.targetaPartit} 
                      // <-- EJERCICIO 22: Key millorada
                      key={unPartit.local + unPartit.visitant}> 
                  <InfoPartit
                    local={unPartit.local}
                    visitant={unPartit.visitant}
                    hora={unPartit.hora}
                    estadi={unPartit.estadi}
                    data={unPartit.data} // <-- EJERCICIO 2
                    partitDestacat={unPartit.partitDestacat} // <-- EJERCICIO 10
                    funcioEliminar={eliminarPartit} // <-- EJERCICIO 15
                  />
                </View>
              );
            })
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#fff",
  },
  titol: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10, // Marge afegit
  },
  targetaPartit: {
    flex: 0.25,
    minHeight: 200,
  },
});
export default App;