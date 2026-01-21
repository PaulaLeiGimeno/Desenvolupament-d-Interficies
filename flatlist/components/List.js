import { StyleSheet, Text, View, FlatList } from 'react-native';

import FitxaProfe from './FitxaProfe';




export default function Lista({ llistaProfes }) {

  return (
    <View style={styles.container}>
      <FlatList
        data={llistaProfes}
        keyExtractor={(item) => item.modul}
        renderItem={({ item }) => (
          <FitxaProfe datosProfe={item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fdf0d5',
    padding: 20,
    borderColor: '#780000',


  },
  nombre: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  asignaturas: {
    fontSize: 14,
    textAlign: 'left',
    color: 'white',
  },
  icono: {
    height: 30,
    width: 30,
  },
});
