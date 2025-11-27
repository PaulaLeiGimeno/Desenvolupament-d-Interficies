import { React, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import InfoPartit from "./components/infoPartit/infoPartit";
import CercaNoTrobada from "./components/cercaNoTrobada/cercaNoTrobada";


/**
 * Punt d'entrada principal de l'aplicació React Native.
 *
 * @module App
 * @description
 * Inicialitza la llista de partits a mostrar, i permet realitzar una cerca de partits 
 * mostrant els resultats autimàticamen.
 * Aquest component encapsula l'estructura general i registra la UI.
 */

const App = () => {
  //Llistat de partits a jugar
  const unaPossibleLlista = [
    { local: "Valencia", visitant: "Barcelona", hora: "20:30" },
    { local: "Levante", visitant: "Villarreal", hora: "20:30" },
    {
      local: "Elche",
      visitant: "Girona",
      hora: "20:30",
      estadi: "Estadi Municipal Toni Puchades, (Sueca)",
    },
  ];

  const [llistatPartits, actualitzaLlistaPartits] = useState(unaPossibleLlista);
  const [criteriDeCerca, setCriteriDeCerca] = useState("");

  //aquesta funció desa (guarda) el criteri de cerca i filtra si hi ha
  // algun partit amb equips que complpisquen el criteri de cerca
  const desaCercaIFiltra = (unTextDeCerca) => {
    setCriteriDeCerca(unTextDeCerca);
    cercaElPartitDunEquip(unTextDeCerca);
  };

  // a partir d'un criteri de cerca, busca si hi ha algun partit on s'enfronten
  // equips que tinguen un nom que compleix el criteri de cerca.
  const cercaElPartitDunEquip = (lletresDunEquip) => {
    if (lletresDunEquip === "") actualitzaLlistaPartits(unaPossibleLlista);
    else {
      const cerca = unaPossibleLlista.filter(
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
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.3, margin: "1%" }}>
        <Searchbar
          //icon="soccer"
          placeholder="Cercar un partit ..."
          onChangeText={desaCercaIFiltra}
          onClearIconPress={() => actualitzaLlistaPartits(unaPossibleLlista)}
          value={criteriDeCerca}
          mode="bar"
          style={{ backgroundColor: "#d8fb59ff" }}
          inputStyle={{ color: "green", fontSize: 25 }}
        />
      </View>
      <View style={{ flex: 4 }}>
        <View style={{ flex: 1 }}>
          <Text style={styles.titol}>Llistat de partits:</Text>
          {llistatPartits.length === 0 ? (
            <CercaNoTrobada
              missatgeError="No he trobat cap partit amb equips que continguen:"
              textACercar={criteriDeCerca}
            />
          ) : (
            llistatPartits.map((unPartit, index) => {
              return (
                <View style={styles.targetaPartit} key={unPartit.local + index}>
                  <InfoPartit
                    local={unPartit.local}
                    visitant={unPartit.visitant}
                    hora={unPartit.hora}
                    estadi={unPartit.estadi}
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
  },
  targetaPartit: {
    flex: 0.25,
    minHeight: 200,
  },
});
export default App;
