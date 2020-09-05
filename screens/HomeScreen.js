
import React, { Component } from 'react';
import { 
    FlatList
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoryList from "../components/CategoryList";
//gọi các screens khác từ component categorylist
export default class HomeScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            categories:[
            {id:'1', name:'Dịch từ',name1:'Traduire mots'},
            {id:'2', name:'Từ vựng',name1:'Vocabulaire'},  
            {id:'3', name:'Ngữ pháp',name1:'Grammaire'}, 
            {id:'4', name:'Luyện tập',name1:'Grammaire'},           
            ]   
        };
        }
    render(){
        const {navigation} =this.props;
        const {categories} =this.state;
        return(
            <FlatList
            data={categories}
            renderItem={({item})=> <CategoryList category={item} onPress={() => 
                navigation.navigate("Translate",{ name: item.name },{name1:item.name1}  
            )} />}
            keyExtractor={item => item.id}
            contentContainerStyle={{backgroundColor:"#e1e1e6",paddingLeft:50,paddingRight:50}}
            /> 
        )
    }
}
// const {navigation} =this.props;
//         return(
//             <ScrollView style={{backgroundColor:"#e1e1e6",paddingLeft:50,paddingRight:50}}>
//                 <CategoryList name="Dịch từ" name1="Traduire mots" onPress={() => navigation.navigate('Translate')} />
//                 <CategoryList name="Từ vựng" name1="Vocabulaire" onPress={() => navigation.navigate('Vocabulary')} />
//                 <CategoryList name="Ngữ pháp" name1="Grammaire" onPress={() => navigation.navigate('Grammar')} />
//             </ScrollView>
//         );   