import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import Arriba from './components/Arriba'
import List from './components/List'


const App=()=> {
  const [llistaProfes,setLlistaProfes]=useState([])


  return (
    <View style={styles.container}>
      <Arriba  setLlistaProfes={setLlistaProfes}/>
      <List llistaProfes={llistaProfes}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

});

export default App;