import React from 'react';

import { Text, View } from 'react-native';
import { valoracioIMC, calculaKgAPerdre } from '../../utils/Utils';

/**
 * Component stateless que mostra el missatge corresponent al IMC i l'IMC calculat
 * @param {float} Props
 * @example
 * <Resultat imc=34.5 />
 */
const Resultat = props => {
  const valoracio = valoracioIMC(props.imc);
  const pesIdeal = props.ideal;
  const pes = props.pes;
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>
        Tens un IMC de {parseFloat(props.imc).toFixed(2)}
      </Text>
      <Text style={{ color: valoracio.color, fontSize: 20 }}>
        {valoracio.msg}
      </Text>
      <Text style={{ fontSize: 20, marginTop: 20, color: 'blueviolet' }}>
        El teu pes ideal està entre {parseFloat(pesIdeal.minim).toFixed(1)} i {parseFloat(pesIdeal.maxim).toFixed(1)} kg
      </Text>
      <Text style={{ fontSize: 20, color: calculaKgAPerdre(pes, parseFloat(pesIdeal.minim), parseFloat(pesIdeal.maxim)).color }}>
        {calculaKgAPerdre(pes, parseFloat(pesIdeal.minim), parseFloat(pesIdeal.maxim)).msg}
      </Text>
    </View>
  );
};
export default Resultat;