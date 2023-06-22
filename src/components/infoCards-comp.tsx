import { View, Text, StyleSheet } from "react-native"
import { Image } from "expo-image"

interface Props{
    propsInfo:any
}

export default function InfoCards(props:Props) {
    return (
        <View>
            <View>
                <Image style={styles.bandeira} source={{ uri: props.propsInfo.bandeira }} />
            </View>
            <View>
                <Text style={{ fontWeight: '700', fontSize: 18, textAlign: 'auto' }}>{props.propsInfo.id}</Text>
                <Text style={{ fontWeight: '700', fontSize: 14, textAlign: 'auto' }}>Nome BR: {props.propsInfo.PTnome}</Text>
                <Text style={{ fontWeight: '700', fontSize: 14, textAlign: 'auto' }}>Continente: {props.propsInfo.continente}</Text>
                <Text style={{ fontWeight: '700', fontSize: 14, textAlign: 'auto' }}>População: {props.propsInfo.populacao}</Text>
                <Text style={{ fontWeight: '700', fontSize: 14, textAlign: 'auto' }}>Capital: {props.propsInfo.capital}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    bandeira: {
        width: 60,
        height: 60,
        borderRadius: 5,
        marginRight: 10
    }

})