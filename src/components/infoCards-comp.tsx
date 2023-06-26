import { View, Text, StyleSheet } from "react-native"
import { Image } from "expo-image"

interface Props{
    propsInfo:any
}

export default function InfoCards(props:Props) {
    return (
        
        <View style={styles.container}>
            <View>
                <Image style={styles.bandeira} source={{ uri: props.propsInfo.item.bandeira }} />
            </View>
            <View>
                <Text style={{ fontWeight: '700', fontSize: 18, textAlign: 'auto' }}>{props.propsInfo.item.id}</Text>
                <Text style={{ fontWeight: '700', fontSize: 14, textAlign: 'auto' }}>Nome BR: {props.propsInfo.item.PTnome}</Text>
                <Text style={{ fontWeight: '700', fontSize: 14, textAlign: 'auto' }}>Continente: {props.propsInfo.item.continente}</Text>
                <Text style={{ fontWeight: '700', fontSize: 14, textAlign: 'auto' }}>População: {props.propsInfo.item.populacao}</Text>
                <Text style={{ fontWeight: '700', fontSize: 14, textAlign: 'auto' }}>Capital: {props.propsInfo.item.capital}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    bandeira: {
        width: 60,
        height: 60,
        borderRadius: 5,
        marginRight: 10,
        
    },
    container:{
        flexDirection:'row'
    }

})