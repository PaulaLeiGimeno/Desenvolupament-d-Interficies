import {Text, View, ScrollView} from 'react-native';
import {valoracioIMC} from '../../utils/Utils';

/**
 * Component stateless que mostra 
 *  - el missatge corresponent segons el IMC i també mostra l'IMC calculat
 * @param {Object} props - Propietats del que rep el component.
 * @param {float} props.dadesS.imc - l'IMC calculat
 * @param {Object} props.dadesS.pesIdeal - Objecte que conté el pes ideal (veure pesIdeal en FuncionsSalut.js)
 * @param {Object} props.dadesS.gopPes - Objecte que indica si cal guanyar, perdre o mantindre pes (veure guanyarOperdrePes en FuncionsSalut.js)
 * @param {integer} props.dadesS.kcalDiaries - Enter amb les kcal diàries recomanades (veure caloriesDiariesRecomanades en FuncionsSalut.js)
 * @param {string} props.dadesS.percGC - Cadena que conté el percentatge de Greix Corporal (veure percentatgeGreixCorporal en FuncionsSalut.js)
 * @example
 * <Resultat dadesS={ObjecteAmbToteLesDadesNecessaries} />
 */
const Resultat = props => {

  const valoracio = valoracioIMC(props.dadesS.imc);
  return (
    <ScrollView>
    <View style={{flex:1, alignItems: 'center', borderWidth:5, borderColor:"#898aff", borderRadius:5, margin:5, padding:5}}>
      <View style={{alignItems: 'center', margin:5, padding:5}}>
        <Text style={{fontSize: 20}}>
          Tens un IMC de {parseFloat(props.dadesS.imc).toFixed(2)}
        </Text>
        <Text style={{color: valoracio.color, fontSize: 20}}>
          {valoracio.msg}
        </Text>
      </View>
      <View style={{flexDirection:'row', alignItems: 'center', margin:5, padding:5}}>
        <Text style={{fontSize: 20}}>El teu pes ideal estaria entre </Text>
        <Text style={{color:'green', fontSize: 20}}>{props.dadesS.pesIdeal.min} </Text>
        <Text style={{fontSize: 20}}> i </Text>
        <Text style={{color:'red', fontSize: 20}}>{props.dadesS.pesIdeal.max}</Text>
        <Text style={{fontSize: 20}}> Kg.</Text>
      </View>
      <View style={{flexDirection:'row', alignItems: 'center', margin:5, padding:5}}>
        <Text style={{fontSize: 20}}>Necessites </Text>
        <Text style={{color:props.dadesS.gopPes.color, fontSize: 20}}>{props.dadesS.gopPes.msg} </Text>
        <Text style={{fontSize: 20}}> pes,</Text>
        {props.dadesS.gopPes.msg!=='mantindre' && (
          <Text style={{fontSize: 20}}> uns {props.dadesS.gopPes.diferenciaPes} Kg.</Text>
        )}
      </View>
      <View style={{flexDirection:'row', alignItems: 'center', margin:5, padding:5}}>
        <Text style={{fontSize: 20}}>Kcal. diàries recomanades: </Text>
        <Text style={{color:'#898aff', fontSize: 20}}>{props.dadesS.kcalDiaries} </Text>
      </View>
      <View style={{flexDirection:'row', alignItems: 'center', margin:5, padding:5}}>
        <Text style={{fontSize: 20}}>Precentatge de greix corporal: </Text>
        <Text style={{color:'#898aff', fontSize: 20}}> {props.dadesS.percGC} </Text>
        <Text style={{fontSize: 20}}> %</Text>
      </View>
        <View style={{flexDirection:'row', alignItems: 'center', margin:5, padding:5}}>
        <Text style={{fontSize: 15}}>Generat per a 2n DAM. DIN. </Text>
      </View>
    </View>
    </ScrollView>
  );
};
export default Resultat;