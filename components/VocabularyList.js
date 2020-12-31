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
import Swiper from 'native-base'
import VocaDetail from './VocabularyDetail';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import Icon_ from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';

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
      fetch('https://my-json-server.typicode.com/trandinhthang/mockjson/db')
        .then((response) => response.json())
        .then((json) => {
          this.setState({ dataThemes: json.themes, dataVocabulary:json.vocabulary });
        })
        .catch((error) => console.error(error))
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
    renderFooter=()=>{
      if(!this.state.isLoading) return null
      return (         
          <View style={{width:width,alignItems:"center"}}>
              <ActivityIndicator size="small" color="#ff8000" />
          </View>
      )
    }
    render(){
      const { dataThemes, dataVocabulary,selectThemes } = this.state;
      return(
        <SafeAreaView style={{backgroundColor:'#f7f0e6'}}>
          <Text style={[Styles.textTheme,{padding:5}]}>Chủ đề</Text>
          <View  style={{width:width,height:105,borderRadius:20,paddingLeft:8,paddingRight:16}}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={dataThemes}
              keyExtractor={(item,index)=>index.toString()}
              renderItem={({item})=>this._renderItem(item)}
              
            /> 
          </View>
          <Text style={[Styles.textTheme,{paddingLeft:5}]}>Từ vựng</Text>
          <View style={{width:width,marginTop:5,paddingBottom:95,height:450}}>          
            <FlatList
              showsVerticalScrollIndicator={false}
              data={dataVocabulary}
              renderItem={({item})=>this._renderItemVoca(item)}
              keyExtractor={(item,index)=>index.toString()}
              ListFooterComponent={this.renderFooter}
            />
          </View>
      </SafeAreaView>
    );
    }
    _renderItem(item){
    return(
      <TouchableOpacity 
        onPress={()=>this.setState({selectThemes:item.id})}
        style={[Styles.divThemes,{backgroundColor:'white',borderWidth: 2,borderColor: 'orange'}]}
      >
            <Image style={{width:100,height:50}}
              resizeMode="contain"
              source={{uri:item.image}}
            />
            <Text style={{color:"#0033ff"}} >
              {item.name}
            </Text>
            <Text style={{color:"#3d7ef5"}} >
              {item.vietsub}
            </Text>
      </TouchableOpacity>   
    )
  }
  _renderItemVoca(item){
    const {navigate} = this.props.navigation;
    let theme=this.state.selectThemes
    if(theme==0||theme==item.categorie){
      return(
        <TouchableOpacity  onPress={() => navigate('DetailVoca', item)} >
          <SafeAreaView style={Styles.feedItem}>
            <Image style={{width:80,height:60}} resizeMode="contain" source={{uri:item.image}}/>
            <View style={{flex:1}}>
              <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                <View style={{paddingLeft:20}} >
                  <Text style={Styles.vocaFrTitle}>{item.nameFr}</Text>
                  <Text style={[Styles.vocaVnTitle,{color:'#3d7ef5'}]}>{item.nameVn}</Text>
                </View> 
                <View style={{paddingRight:5}}>
                  <Foundation
                  name='book'
                  color="#000b5e"
                  size={30}       
                  />  
                  {/* <Icon_
                    name='md-heart-circle'
                    color="white"
                    size={21}
                    onPress={() => this.setState({iconName:"cloud-up"})}
                  />   */}
                </View>  
              </View>       
            </View>
          </SafeAreaView>
        </TouchableOpacity>
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

