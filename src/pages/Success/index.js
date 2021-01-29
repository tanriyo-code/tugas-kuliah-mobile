import React, { useEffect } from 'react'
import {View, Text,Image, ViewBase} from 'react-native'
import MainButton from '../../components/atoms/MainButton'


const Success = ({navigation}) => {
    useEffect(() => {
        setTimeout(()=>{
            navigation.replace('Home')
        }, 3000)
    })
    return (
        <View style={{flex:1, backgroundColor:'#fff', paddingLeft:15, paddingRight:15,}}>
            <View style={{width:'100%', height:400, backgroundColor:'#fff'}}>
                <Image source={require('../../assets/images/success.png')} style={{width:'100%', height:undefined, resizeMode:'cover', flex:1}}/> 
            </View>
            <View style={{justifyContent:'center', alignItems:'center', marginTop:30}}>
                <Text style={{fontSize:18, textAlign:'center'}}>Tunggu Sebentar, anda akan dialihkan kehalaman Home...</Text>
            </View>
        </View>
    )
}

export default Success