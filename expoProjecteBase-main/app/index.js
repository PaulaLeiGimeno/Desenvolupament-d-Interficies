import React, { useState } from "react";
import { Text, View } from "react-native";
import { PaperProvider, TextInput } from "react-native-paper";




const saluda = (nom, cognoms) => {

  const [contrasenya, setPassword] = useState("");
  const [contrasenyaOculta, setContrasenyaOculta] = useState(true);
  
  const modificaContrasenya = (unPassword)=> {
    setPassword(unPassword);
    console.log("Actualitze: "+unPassword);
  }

  const modificaContrasenyaOculta = ()=> {
    setContrasenyaOculta(!contrasenyaOculta);
  
  }
  
  return (
    <View style={{margin:20}}>
      <Text style={{fontSize: 18, margin:10}}>
        Hola {nom} {cognoms}!!
      </Text>
      <Text>Primera pàgina de prova!!!.</Text>

      <View>
        <TextInput mode="outlined" label="Password"
        secureTextEntry={contrasenyaOculta}
        right={<TextInput.Icon icon="eye" />}
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
        {saluda("Manel", "Viel")}
        
      </View>
    </PaperProvider>
  );
};

export default Index;
