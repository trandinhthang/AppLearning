import React,{useState,useEffect, Component} from 'react';
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

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import Video from 'react-native-video';
import Styles from '../styles/Styles';

var {height,width}= Dimensions.get("window");

class GrammarList1 extends Component{
     constructor(props) {
        super(props);
        this.state = {
          dataThemes: [],
          dataVocabulary: [],
          selectThemes:1,

          isLoading: true,

          paused: true,
          
          iconName: "star"
        };
      }
      componentDidMount() {
        fetch('http://192.168.1.5:3000/db')
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
        <SafeAreaView style={{backgroundColor:"#e1e1e6"}}>
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
        <View style={{width:width,borderRadius:20,marginTop:5,paddingBottom:150,backgroundColor:'white'}}>
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
        <Text >
          {item.name}
        </Text>
      </TouchableOpacity>
    )
  }
  _renderItemVoca(item){
    const {navigate} = this.props.navigation;
    let theme=this.state.selectThemes
    if(theme==1||theme==item.categorie){
       return(
        <SafeAreaView >        
          <View style={Styles.feedItem}  >
            <Image style={{width:70,height:40}} resizeMode="contain" source={{uri:item.image}}/>
            <View style={{flex:1}}>
              <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                <View>
                  <Text style={Styles.vocaFrTitle}>{item.nameFr}</Text>
                  <Text style={Styles.vocaVnTitle}>{item.nameVn}</Text>
                </View> 
                <View >
                  <Icon
                    name='cloud-up'
                    color="white"
                    size={20}
                    onPress={() => navigate('Detail', item)}
                    
                  />  
                  <Icon
                    name={this.state.iconName}
                    color="white"
                    size={20}
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

function Detail({route,navigation}) {
     const {nameFr} = route.params
     const {image} = route.params
     const {url} = route.params
    const [isPaused, setPaused] = useState(true);
  return (
    <View>
       <TouchableOpacity activeOpacity={0.2} onPress={() => navigation.navigate('gramar')}>
                    <Text> Quay lại</Text>
            </TouchableOpacity>  
            <Text>{nameFr}</Text>
            <Text>{url}</Text>
            <Ionicons name="volume-high-outline"
              color="red"
              size={20}
              onPress={()=>setPaused(true)}
            >
              <Video
                source={{ uri: url }} 
                paused={false}
              />
            </Ionicons>

    </View>
  );
}

const GrammarList = createStackNavigator();
 export default function GrammarStackList() {
  return (
    <GrammarList.Navigator initialRouteName="gramar" >
      <GrammarList.Screen name="gramar" component={GrammarList1}      
      />
      <GrammarList.Screen name="Detail" component={Detail}/>
    </GrammarList.Navigator>
  );
}

