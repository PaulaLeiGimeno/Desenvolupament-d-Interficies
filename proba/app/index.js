import React, { useState } from "react";
import { Text, View } from "react-native";
import { PaperProvider, TextInput } from "react-native-paper";




const Saluda = ({ nom, cognoms }) => {

  const [contrasenya, setPassword] = useState("");
  const [iscontrasenyaOculta, setContrasenyaOculta] = useState(true);

  const modificaContrasenya = (unPassword) => {
    setPassword(unPassword);
    console.log("Actualitze: " + unPassword);
  }

  const modificaContrasenyaOculta = () => {
    setContrasenyaOculta(!iscontrasenyaOculta);

  }

  return (
    <View style={{ margin: 20 }}>
      <Text style={{ fontSize: 18, margin: 10 }}>
        Hola {nom} {cognoms}!!
      </Text>
      <Text>Primera pàgina de prova!!!.</Text>

      <View>
        <TextInput mode="outlined" label="Password"
          secureTextEntry={iscontrasenyaOculta}
          right={<TextInput.Icon icon={iscontrasenyaOculta ? "no-eye" : "eye"} onPress={modificaContrasenyaOculta} />}
          onChangeText={(text) => modificaContrasenya(text)}
        />
      </View>
      <View>

      </View>
    </View>
  );
};

const Index = () => {


  return (
    <PaperProvider>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          fontSize: 18,
        }}
      >
        <Saluda nom="Manel" cognoms="Viel" />

      </View>
    </PaperProvider>
  );
};

export default Index;
