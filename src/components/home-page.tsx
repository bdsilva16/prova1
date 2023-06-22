import { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import CountryEntity from "../entities/country-entity";
import { Image } from "expo-image"
import CardComp from "./card-comp";

export default function HomePage() {

    const [coutrys, setCoutrys] = useState<CountryEntity[]>([])


    useEffect(() => {

        var requestOptions = {
            method: 'GET',

        };


        let coutryList: CountryEntity[] = []

        fetch("https://restcountries.com/v3.1/all",requestOptions)
            .then(response => response.json())
            .then(result => {
                result.map(item => {
                    coutryList.push({
                        id: item['name']['common'],
                        bandeira: item['flags']['svg'],
                        populacao: item['population'],
                        PTnome: item['translations']['por']['common'],
                        capital: item['capital'],
                        continente: item['continents']
                    })
                })
            })
            .catch(error => console.log('error', error));
        setCoutrys(coutryList)
    }, [])
    return (
        <View style={styles.container}>
            <CardComp propsItem={coutrys}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#353535',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 60
    },
})