import { React, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import InfoPartit from "./components/infoPartit/infoPartit";
import CercaNoTrobada from "./components/cercaNoTrobada/cercaNoTrobada";

/**
 * Punt d'entrada principal de l'aplicació React Native.
 * ... (resta de la documentació JSDoc)
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

  // <-- MODIFICACIÓ 1: Canviem el nom. Aquesta funció ARA NOMÉS guarda el text.
  // Abans es deia 'desaCercaIFiltra' i també cridava a la cerca.
  const desaCriteri = (unTextDeCerca) => {
    setCriteriDeCerca(unTextDeCerca);
  };

  // <-- MODIFICACIÓ 2: Aquesta funció ARA busca utilitzant l'estat 'criteriDeCerca'.
  // Ja no rep 'lletresDunEquip' com a paràmetre.
  // Aquesta funció serà cridada per la icona de la lupa.
  const cercaElPartitDunEquip = () => {
    if (criteriDeCerca === "") actualitzaLlistaPartits(unaPossibleLlista);
    else {
      const cerca = unaPossibleLlista.filter(
        (unPartit) =>
          unPartit.local
            .toLowerCase()
            .includes(criteriDeCerca.toLowerCase()) || // <-- Ara llig de l'estat
          unPartit.visitant
            .toLowerCase()
            .includes(criteriDeCerca.toLowerCase()) // <-- Ara llig de l'estat
      );
      actualitzaLlistaPartits(cerca);
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.3, margin: "1%" }}>
        <Searchbar
          placeholder="Cercar un partit ..."
          // <-- MODIFICACIÓ 3: 'onChangeText' ara només desa el criteri.
          onChangeText={desaCriteri}
          
          // <-- MODIFICACIÓ 4: Afegim 'onIconPress' per a executar la cerca.
          onIconPress={cercaElPartitDunEquip}
          
          // <-- MODIFICACIÓ 5 (Opcional pero recomanada):
          // Fem que la icona 'X' també netege el text de la barra.
          onClearIconPress={() => {
            actualitzaLlistaPartits(unaPossibleLlista);
            setCriteriDeCerca(""); // <-- Neteja l'estat del text
          }}
          
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