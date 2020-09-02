
import React, { Component } from 'react';
import { 
    Button, 
    View, 
    Text,
    FlatList ,
    StyleSheet
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoryList from "../components/CategoryList";


export default class HomeScreen extends Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         categories:[
    //         {id:'1', name:'Từ Điển'},
    //         {id:'2', name:'Từ Vựng'},  
    //         {id:'3', name:'Ngữ Pháp'},        
    //         ]   
    //     };
    // }
    render(){
        const {navigation} =this.props;
        // const {categories}=this.state;
        // return(
        // <FlatList
        //     data={categories}
        //     renderItem={({item})=> <CategoryList category={item} onPress={() => 
        //         navigation.navigate('Details',{ name: item.name }  
        //     )} />}
        //     keyExtractor={item => item.id}
        //     contentContainerStyle={{ paddingLeft:16, paddingRight:16,}}
        // /> 
        return(
            <View style={{paddingLeft:16,paddingRight:16}}>
                <CategoryList name="Từ Điển" onPress={() => navigation.navigate('Translate')} />
                <CategoryList name="Từ Vựng" onPress={() => navigation.navigate('Vocabulary')} />
                <CategoryList name="Ngữ Pháp" onPress={() => navigation.navigate('Grammar')} />
                {/* <CategoryList name="Ngữ Pháp" onPress={() => navigation.navigate('Details')}/> */}
            </View>
        );
        
    }
}

// export default function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }
// import React,{Component} from "react";
// import{
//     StyleSheet,
//     FlatList
// } from "react-native";
// import CategoryList from "../components/CategoryList";

