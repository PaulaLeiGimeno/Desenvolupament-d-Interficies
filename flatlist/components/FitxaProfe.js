
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-paper';


export default function FitxaProfe({ datosProfe }) {
    return (
        <View style={styles.container}>
            <View
                style={{
                    backgroundColor: '#780000',
                    flexDirection: 'row',
                    padding: 20,
                    gap: 10,
                }}>
                <Text style={styles.nombre}>{datosProfe.nom}</Text>
                <Icon
                    style={styles.icono}
                    source={datosProfe.foto}
                />
            </View>
            <View style={{ backgroundColor: '#C1121F', padding: 10, }}>
                <Text style={[styles.asignaturas, { fontWeight: 'bold' }]}>
                    {datosProfe.nomCompletModul}{' '}({datosProfe.modul})
                </Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={[styles.asignaturas, { fontWeight: 'bold' }]}>
                        Hores semanals:{' '}
                    </Text>
                    <Text style={styles.asignaturas}>{datosProfe.horesSetmanals}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fdf0d5',
        padding: 20,
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
