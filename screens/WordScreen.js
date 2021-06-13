
import { createStackNavigator } from '@react-navigation/stack'
import { Button, Text, View } from 'native-base'
import React from 'react'
import { SafeAreaView, StyleSheet,Image } from 'react-native'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import FillWord from '../components/FillWord'

import Ionicons from 'react-native-vector-icons/Ionicons';
import {themeQuiz} from '../json/FillWord.json'


const WordScreen = ({navigation}) => {
  return (

    <View style={Styles.container}>
    <ScrollView>
        {themeQuiz.map((item) => (
            <TouchableOpacity
                key={item.id}
                onPress={() =>navigation.navigate('fillWord', item.id)}>
                <SafeAreaView style={Styles.item}>
                    <View style={Styles.itemContent}>
                        <Image
                            style={{width:80,height:80}}
                            resizeMode="contain"
                            source={{uri:item.image}}
                         
                        />
                        <View style={Styles.textContent}>
                            <Text style={{ color: '#044075', fontSize: 15 }}>
                                {item.theme}
                            </Text>
                            <Text style={{ color: 'gray', fontSize: 10 }}>Cơ bản</Text>
                        </View>
                        <View>
                            <Ionicons
                                color="#167fdb"
                                name="ellipsis-vertical-outline"
                                size={20}
                            />
                        </View>
                    </View>
                </SafeAreaView>
            </TouchableOpacity>
        ))}
    </ScrollView>
</View>

  )
}

const Styles = StyleSheet.create({
  container: {
      paddingTop: 10,
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
  },
  item: {
      shadowOffset: { width: 10, height: 10 },
      shadowColor: 'black',
      shadowOpacity: 1,
      elevation: 3,
      backgroundColor: '#0000',
      margin: 12,
      width: '93%',
      height: 80,
      borderBottomWidth:1,
      borderColor:'green',
      borderRadius: 10
  },
  itemContent: {
      flex: 1,
      justifyContent: 'space-between',
      flexDirection: 'row',
      backgroundColor: 'white',
  },
  image: {
    marginLeft:10,
      width: 100,
      height: 80,
  },
  textContent: {
      width: 200,
      justifyContent: 'center',
  },
});


const FillStack = createStackNavigator();
export default function FillWordList() {
    return (
        <FillStack.Navigator initialRouteName="wordScreen">
            <FillStack.Screen name="wordScreen" component={WordScreen} />
            <FillStack.Screen name="fillWord" component={FillWord} />
        </FillStack.Navigator>
    );
}
