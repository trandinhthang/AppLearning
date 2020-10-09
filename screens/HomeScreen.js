
import React from 'react';
import { 
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Styles from '../styles/Styles';
import books from "../assests/images/books.png";
import research from "../assests/images/research.png";
import vocabulary from "../assests/images/vocabulary.png";
//gọi các Screen khác từ đây sang App.js
const HomeScreen =({navigation})=>{
    return(
        <ScrollView style={{backgroundColor:"#f2dada",paddingLeft:60,paddingRight:60,borderRadius:5}}>
            <TouchableOpacity activeOpacity={0.2} onPress={() => navigation.navigate('Translate')}>
                <View style={Styles.container} >
                    <Image style={Styles.translateImage} source={research}/>
                    <Text style={Styles.title}>Traduire Phrases</Text>
                    <Text style={Styles.title1}>Dịch câu</Text>
                </View>
            </TouchableOpacity> 
            <TouchableOpacity activeOpacity={0.2} onPress={() => navigation.navigate('Vocabulary')}>
                <View style={Styles.container} >
                    <Image style={Styles.translateImage} source={vocabulary}/>
                    <Text style={Styles.title}>Vocabulaire</Text>
                    <Text style={Styles.title1}>Từ vựng</Text>
                </View>
            </TouchableOpacity>  
            <TouchableOpacity activeOpacity={0.2} onPress={() => navigation.navigate('Grammar')}>
                <View style={Styles.container} >
                    <Image style={Styles.translateImage} source={books}/>
                    <Text style={Styles.title}>Grammaire</Text>
                    <Text style={Styles.title1}>Ngữ pháp</Text>
                </View>
            </TouchableOpacity>  
             <TouchableOpacity activeOpacity={0.2} onPress={() => navigation.navigate('Grammar')}>
                <View style={Styles.container} >
                    <Image style={Styles.translateImage} source={books}/>
                    <Text style={Styles.title}>Grammaire</Text>
                    <Text style={Styles.title1}>Ngữ pháp</Text>
                </View>
            </TouchableOpacity>  
             <TouchableOpacity activeOpacity={0.2} onPress={() => navigation.navigate('Grammar')}>
                <View style={Styles.container} >
                    <Image style={Styles.translateImage} source={books}/>
                    <Text style={Styles.title}>Grammaire</Text>
                    <Text style={Styles.title1}>Ngữ pháp</Text>
                </View>
            </TouchableOpacity>  
        </ScrollView>   
);     
}
export default HomeScreen;
 
// constructor(props){
//     super(props);
//     this.state={
//         categories:[
//         {id:'1', name:'Dịch từ',name1:'Traduire mots'},
//         {id:'2', name:'Từ vựng',name1:'Vocabulaire'},  
//         {id:'3', name:'Ngữ pháp',name1:'Grammaire'}, 
//         {id:'4', name:'Luyện tập',name1:'Grammaire'},           
//         ]   
//     };
//     }
// render(){
//     const {navigation} =this.props;
//     const {categories} =this.state;
//     return(
//         <FlatList
//         data={categories}
//         renderItem={({item})=> <CategoryList category={item} onPress={() => 
//             navigation.navigate("Translate",{ name: item.name },{name1:item.name1}  
//         )} />}
//         keyExtractor={item => item.id}
//         contentContainerStyle={{backgroundColor:"#e1e1e6",paddingLeft:50,paddingRight:50}}
//         /> 
//     )
// }
/* <CategoryList name="Dịch từ" name1=""  />
<CategoryList name="Từ vựng" name1="Vocabulaire" onPress={() => navigation.navigate('Vocabulary')} />
<CategoryList name="Ngữ pháp" name1="Grammaire" onPress={() => navigation.navigate('Grammar')} /> */