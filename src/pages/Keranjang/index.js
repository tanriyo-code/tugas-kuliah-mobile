import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { AsyncStorage } from 'react-native';
import { useEffect } from 'react';
import { useState } from 'react';


const Keranjang = ({navigation}) => {
    const [keranjang, setKeranjang] = useState(['default', 'defaule'])
    const history = async () => {
        let data = await AsyncStorage.getItem('history');
        data = JSON.parse(data)
        setKeranjang(data)
    }

    useEffect(() => {
        history()
    }, [])

    const test = () => {
        console.log(keranjang)
    }

    return (
        <View style={{paddingLeft:15, paddingRight:15}}>
            <TouchableOpacity onPress={() => {navigation.goBack()}} style={{marginTop:20, padding:10,}}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </TouchableOpacity>
            <View style={{marginTop:20, backgroundColor:'#f2e6bd', padding:10,}}>
                <Text onPress={() => {test()}}>Pengiriman Walet ke : {keranjang != null ? keranjang[0] : "Belum ada pengiriman berjalan"}</Text>
            </View>
        </View>
    )
}

export default Keranjang