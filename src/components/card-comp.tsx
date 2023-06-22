import { View, FlatList, Text, StyleSheet } from "react-native";
import { Image } from "expo-image"
import InfoCards from "./infoCards-comp";

interface Props {
    propsItem: any
}

export default function CardComp(props: Props) {
    return (
        <View>
            <Text style={styles.title}>Lista de Países</Text>
            <FlatList
                renderItem={(coutrys) =>
                    <View >
                        <View style={styles.card}>
                            <InfoCards propsInfo={coutrys}/>
                        </View>
                    </View>

                }
                data={props.propsItem}
                keyExtractor={(item) => item.id}
            >
            </FlatList>

        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#336',
        aspectRatio: 2.5,
        width: '100%',
        height: 140,
        borderRadius: 10,
        margin: 15,
        padding: 16,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderWidth: 5,
        borderColor: 'black',
        elevation: 15,
        shadowColor: '#fff'
    },
    title: {
        fontWeight: '700',
        fontSize: 30,
        marginTop: 10,
        margin: 20,
        textAlign: 'center'
    },

})