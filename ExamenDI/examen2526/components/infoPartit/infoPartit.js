import { StyleSheet, Text, View } from "react-native";
import { getFitxaEquip, getObjEquip } from "../../utils/funcionsEquips";
import InfoEquip from "../infoEquip/infoEquip";

/**
 * Mostra la informació d'un partit en forma de targeta.
 * Un partit consta de dos equips (local i visitant), l'hora a la que es jugarà el partit,
 * l'estadi on es jugarà el partit. Si no es posa estadi, es mostrarà l'estadi de
 * l'equip local.
 *
 * @component
 *
 * @param {Object} props - Propietats del component.
 * @param {string} props.local - Nom de l'equip local (qui juga 'en casa').
 * @param {string} props.visitant - Nom de l'equip visitant.
 * @param {string} props.hora - Hora del partit.
 * @param {string} [props.estadi] - prop opcional. Si s'omet es mostra l'estadi de l'equip local
 * @requires module:components/infoEquip.InfoEquip
 * @requires module:utils/funcionsEquips.getFitxaEquip
 * @requires module:utils/funcionsEquips.getObjEquip
 * @example
 * <InfoPartit
 *   local="Valencia"
 *   visitant="Barcelona"
 *   hora="20:30"
 *   estadi="Estadi Municipal Toni Puchades (Sueca)"
 * />
 */
const InfoPartit = ({ local, visitant, hora, estadi=null }) => {
  //Obtenim la fitxa dels equips (local i visitant)
  const objecte = getObjEquip(local);
  const equipLocal = getFitxaEquip(objecte);

  const objecte2 = getObjEquip(visitant);
  const equipVisitant = getFitxaEquip(objecte2);

  return (
    <View style={styles.container}>
      <View style={{flex:1 ,flexDirection:'row', alignContent:"space-evenly"}}>
          <InfoEquip nom={equipLocal.nom}/>
          <InfoEquip nom={equipVisitant.nom}/>
      </View>
      <View style={{flex:0.25 ,flexDirection:'row', alignItems:'center', }}>
        <Text style={{fontWeight:'bold'}}>{hora} </Text>
        <Text>{estadi===null?equipLocal.estadi:estadi}</Text>        
      </View>
    </View>

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
