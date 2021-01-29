import { faBasketballBall, faBox, faHistory, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import {Text, View, Image} from 'react-native'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import gambar1 from '../../assets/images/gambar1.jpg'
import gambar2 from '../../assets/images/gambar2.jpg'
import gambar3 from '../../assets/images/gambar3.jpg'
import gambar4 from '../../assets/images/gambar4.jpg'
import gambar5 from '../../assets/images/gambar5.jpg'
import gambar6 from '../../assets/images/gambar6.jpg'


const Home = ({navigation},props) => {
    const data = [
        {
            title : 'China Wallet',
            content : 'Freight Walet forwarder',
            gambar : gambar1
        },
        {
            title : 'Poland Receiver',
            content : 'Walet manufacure',
            gambar : gambar2
        },
        {
            title : 'Medan Jaya',
            content : 'Freight Walet forwarder',
            gambar : gambar3
        },
        {
            title : 'PT Indah Abadi',
            content : 'Walet manufacure',
            gambar : gambar4
        },
        {
            title : 'PT Garuda Jaya',
            content : 'Freight Walet forwarder',
            gambar : gambar5
        },
        {
            title : 'CV Agrapura',
            content : 'Walet manufacure',
            gambar : gambar6
        },
    ]
    return (
        <>
        <View style={{width:'100%', flex:1, backgroundColor:'#fff', paddingLeft:15, paddingRight:15}}>
            <ScrollView>
                <TextInput style={{width:'100%', height:50, borderWidth:1, borderColor:'#666', borderRadius:5, paddingLeft:20, marginTop:20}} placeholder="Search destination.."></TextInput>
                <View style={{flexDirection:'row', justifyContent:'space-between', flexWrap:'wrap', marginTop:10}}>

                    {data.map((item, i) => {
                        return (
                            <TouchableOpacity onPress={() => {navigation.navigate('Booking', {
                                title: item.title,
                                content : item.content
                            })}} key={i} style={{width:180, marginTop:10, borderRadius:5,  height:250, backgroundColor:'#fff', shadowColor: '#888', shadowRadius: 10, shadowOpacity: 1, elevation:5, borderWidth:1, borderColor:'#ddd'}}>
                                <View style={{width:'100%', flex:1, backgroundColor:'#fff', borderTopLeftRadius:5, borderTopRightRadius:5,}}>
                                    <Image style={{flex:1 , borderTopLeftRadius:5, borderTopRightRadius:5, width: '100%', height: undefined, resizeMode:'cover'}} source={item.gambar} />
                                </View>
                                <View style={{height:80, width:'100%',borderBottomLeftRadius:5, borderBottomRightRadius:5, paddingLeft:10, paddingRight:10, backgroundColor:'#fff'}}>
                                    <Text style={{fontSize:18, fontWeight:'bold', marginTop:5}}>{item.title}</Text>
                                    <Text style={{marginTop:3}}>{item.content}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </ScrollView>            
        </View>
        <View style={{height:50, borderTopColor:'#ccc', borderWidth:1, backgroundColor:'#fff', flexDirection:'row', justifyContent:'space-around', paddingTop:5,}}>
            <TouchableOpacity onPress={() => {navigation.navigate('Home')}} style={{width:30, height:30, justifyContent:'center', alignItems:'center', backgroundColor:'#fff'}}>
                <FontAwesomeIcon icon={faHome} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {alert('Sedang dalam pengerjaan')}} style={{width:30, height:30, justifyContent:'center', alignItems:'center', backgroundColor:'#fff'}}>
                <FontAwesomeIcon icon={faBox} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate('Keranjang')}} style={{width:30, height:30, justifyContent:'center', alignItems:'center', backgroundColor:'#fff'}}>
                <FontAwesomeIcon icon={faHistory} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate('Account')}} style={{width:30, height:30, justifyContent:'center', alignItems:'center', backgroundColor:'#fff'}}>
                <FontAwesomeIcon icon={faUser} />
            </TouchableOpacity>
        </View>
        </>
    )
}

export default Home