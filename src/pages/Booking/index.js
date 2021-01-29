import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { Text, View } from 'react-native'
import MainButton from '../../components/atoms/MainButton'
import MainTextinput from '../../components/atoms/MainTextinput'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AsyncStorage } from 'react-native';

const Booking = ({route, navigation}) => {
    const { title, content } = route.params;
    const myArray = [JSON.stringify(title), JSON.stringify(content)]
    const simpan = async () => {
        try {
            await AsyncStorage.setItem(
              'history',JSON.stringify(myArray)
            ).then(console.log('success'));
            navigation.replace('Success')

          } catch (error) {
            console.log(error)
          }
    }
    return (
        <View style={{paddingLeft:15, paddingRight:15}}>
            <TouchableOpacity onPress={() => {navigation.goBack()}} style={{marginTop:20, padding:10,}}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </TouchableOpacity>
            <View style={{marginTop:20, backgroundColor:'#f2e6bd', padding:10,}}>
                <Text style={{fontSize:20, fontWeight:'bold'}}>Perhatian !!</Text>
                <Text>Anda akan melakukan pengiriman Walet ke <Text style={{fontWeight:'bold'}}> {JSON.stringify(title)} </Text>, pastikan alamat pickup brang anda sesuai !</Text>
            </View>
            <MainTextinput containerStyle={{marginTop:20}} placeholder="Nama pengirim"/>
            <MainTextinput containerStyle={{marginTop:20}} value={JSON.stringify(title)}/>
            <MainTextinput containerStyle={{marginTop:20}} placeholder="Nomor Invoice"/>
            <MainTextinput containerStyle={{marginTop:20}} placeholder="Nama penyerah barang ke kurir"/>
            <MainTextinput multiline={true} numberOfLines={10} containerStyle={{marginTop:20}} inputStyle={{height:100, textAlignVertical:'top'}} placeholder="Nama pengirim"/>
            <MainButton onPress={() => {simpan()}}  containerStyle={{marginTop:20, borderRadius:5}} fade={true} touchable={true}  title={'Proses Sekarang'} />
        </View>
        
    )
}

export default Booking