import { StyleSheet, Text, View } from 'react-native';


const Titol = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CALCULADORA</Text>
      <View style={{ flexDirection: 'row' }}>
        <Text style={[styles.title, { color: 'red' }]}>I</Text>{' '}
        <Text style={[styles.title, { color: 'green' }]}>M</Text>
        <Text style={[styles.title, { color: 'blue' }]}>C</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 18,
    marginTop: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default Titol;
