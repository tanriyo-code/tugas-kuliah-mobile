import React from 'react'
import {Text, View, TouchableOpacity, Image} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft, faHistory, faHome, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { AsyncStorage } from 'react-native';
import { useState, useEffect } from 'react';

const Account = ({navigation}, props) => {
    const [email, setEmail] = useState('emaildefault@gmail.com')

    const ambilData = async () => {
        let data = await AsyncStorage.getItem('auth');
            setEmail(data)
    }

    const logout = async () => {
        await AsyncStorage.removeItem('auth');
        await AsyncStorage.removeItem('history');
        navigation.replace('Login')
    }

    useEffect(() => {
        ambilData()
    },[])


    return ( 
        <>
        <View style={{width:'100%', paddingLeft:15, paddingRight:15, height:250, backgroundColor:'#ffa229'}}>
            <TouchableOpacity onPress={() => {navigation.goBack()}} style={{marginTop:20, padding:10,}}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </TouchableOpacity>

            <View style={{width:100, height:100, borderRadius:100, backgroundColor:'red', marginTop:20,}}>
                <Image source={require('../../assets/images/user.jpg')} style={{width:'100%', borderRadius:100,  height:undefined, flex:1, resizeMode:'cover'}} />
            </View>
            <View style={{marginTop:20}}>
                <Text style={{fontSize:20, fontWeight:'bold'}}>{email}</Text>
            </View>
        </View>
        <View style={{paddingLeft:15, paddingRight:15}}>
            <TouchableOpacity onPress={() => {navigation.navigate('Home')}} style={{flexDirection:'row', marginTop:20, padding:10}}>
                <FontAwesomeIcon icon={faHome} size={20} style={{opacity:0.7}}/> 
                <Text style={{marginLeft:10, fontSize:18, marginTop:1, opacity:0.7}}>Menuju halaman Home page</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate('Keranjang')}} style={{flexDirection:'row', marginTop:10, padding:10}}>
                <FontAwesomeIcon icon={faHistory} size={20} style={{opacity:0.7}}/> 
                <Text style={{marginLeft:10, fontSize:18, marginTop:1, opacity:0.7}}>History pengiriman</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {logout()}} style={{flexDirection:'row', marginTop:10, padding:10}}>
                <FontAwesomeIcon icon={faSignOutAlt} size={20} style={{opacity:0.7}}/> 
                <Text style={{marginLeft:10, fontSize:18, marginTop:1, opacity:0.7}}>Keluar Aplikasi</Text>
            </TouchableOpacity>
        </View>
        </>
    )
}
export default Account