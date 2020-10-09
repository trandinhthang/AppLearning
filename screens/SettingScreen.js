import React from 'react'
import {
    View,Text,TouchableOpacity
} from 'react-native'
import Test from '../components/Test';

const SettingScreen = () =>{
    return(
        <View>
        <TouchableOpacity onPress={() => {alert('You tapped the button!');}}>
        <Text>AAA</Text>

        </TouchableOpacity>
            
        </View>
    )
}
export default SettingScreen;