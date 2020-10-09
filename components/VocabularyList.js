import React,{Component} from 'react';
import {
    ActivityIndicator, 
    FlatList, 
    Text, 
    View,
    TouchableOpacity,
    Image,
    Dimensions,
    SafeAreaView,
    ScrollView
} from 'react-native';

import VocaDetail from './VocabularyDetail';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import Icon_ from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';

import Swiper from 'react-native-swiper';
import Video from 'react-native-video';
import Styles from '../styles/Styles';

var {height,width}= Dimensions.get("window");

class VocaHome extends Component{
     constructor(props) {
        super(props);
        this.state = {
          dataThemes: [],
          dataVocabulary: [],
          selectThemes:0,

          isLoading: true,

          paused: true,
          
          iconName: "star"
        };
      }
      componentDidMount() {
        fetch('http://192.168.1.4:3000/db')
          .then((response) => response.json())
          .then((json) => {
            this.setState({ dataThemes: json.themes, dataVocabulary:json.vocabulary });
          })
          .catch((error) => console.error(error))
          .finally(() => {
            this.setState({ isLoading: false });
          });
      }
    render(){
      const { dataThemes, dataVocabulary,isLoading,selectThemes } = this.state;
      return(
        <SafeAreaView style={{backgroundColor:"#ffe4b5"}}>
        <View  style={{width:width,borderRadius:20,paddingTop:8,backgroundColor:'white'}}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            horizontal={true}
            data={dataThemes}
            keyExtractor={(item,index)=>index.toString()}
            renderItem={({item})=>this._renderItem(item)}
          /> 
        )}
        </View>
        <View style={{width:width,borderRadius:20,marginTop:5,paddingBottom:170,backgroundColor:'white'}}>
          {isLoading ? <ActivityIndicator/> : (  
          <FlatList
            data={dataVocabulary}
            renderItem={({item})=>this._renderItemVoca(item)}
            keyExtractor={(item,index)=>index.toString()}
          />
          )}
        </View>
      </SafeAreaView>
    );

    }
    _renderItem(item){
    return(
      <TouchableOpacity 
      onPress={()=>this.setState({selectThemes:item.id})}
      style={[Styles.divThemes,{backgroundColor:item.color}]}>
        <Image style={{width:70,height:40}}
          resizeMode="contain"
          source={{uri:item.image}}
        />
        <Text style={{color:"#0033ff"}} >
          {item.name}
        </Text>
      </TouchableOpacity>
    )
  }
  _renderItemVoca(item){
    const {navigate} = this.props.navigation;
    let theme=this.state.selectThemes
    if(theme==0||theme==item.categorie){
       return(
        <SafeAreaView >        
          <View style={Styles.feedItem}  >
            <Image style={{width:70,height:40}} resizeMode="contain" source={{uri:item.image}}/>
            <View style={{flex:1}}>
              <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                <View >
                  <Text style={Styles.vocaFrTitle}>{item.nameFr}</Text>
                  <Text style={Styles.vocaVnTitle}>{item.nameVn}</Text>
                </View> 
                <View >
                  <Foundation
                    name='book'
                    color="white"
                    size={26}
                    onPress={() => navigate('DetailVoca', item)}   
                  />  
                  <Icon_
                    name='md-heart-circle'
                    color="white"
                    size={21}
                    onPress={() => this.setState({iconName:"cloud-up"})}
                  />  
                </View>  
              </View>
            </View>
          </View> 
        </SafeAreaView>
    );
    }
  }  
}



const VocaStack = createStackNavigator();
export default function VocabularyList() {
  return (
    <VocaStack.Navigator initialRouteName="homeVoca" >
      <VocaStack.Screen name="homeVoca" component={VocaHome}/>
      <VocaStack.Screen name="DetailVoca" component={VocaDetail}/>
    </VocaStack.Navigator>
  );
}

