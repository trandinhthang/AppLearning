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
    ScrollView,
    TouchableHighlight
} from 'react-native';
import Swiper from 'native-base'
import NetInfo from "@react-native-community/netinfo";

import VocaDetail from './VocabularyDetail';
import VocaDetailTest from './VocabularyTest';

import VocaImage from '../assests/images/vocabulary.png';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import Icon_ from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';

import Video from 'react-native-video';
import Styles from '../styles/Styles';

var {height,width}= Dimensions.get("window");

const themes = [
  {
    "id": 1,
    "name": "Transport",
    "vietsub": "Phương tiện",
    "image": "https://cdn2.iconfinder.com/data/icons/scenarium-vol-3-1/128/049_airplane_transport_clouds_fly_flight-256.png"
  },
  {
    "id": 2,
    "name": "Fruits",
    "vietsub": "Trái cây",
    "image": "https://www.flaticon.com/premium-icon/icons/svg/528/528407.svg"
  },
  {
    "id": 3,
    "name": "Animaux",
    "vietsub": "Động vật",
    "image": "https://www.flaticon.com/premium-icon/icons/svg/449/449631.svg"
  },
  {
    "id": 4,
    "name": "Météo",
    "vietsub": "Thời tiết",
    "image": "https://www.flaticon.com/premium-icon/icons/svg/3059/3059351.svg"
  }
];
const vocabulary = [
    {
      "key": 1,
      "nameFr": "avion",
      "nameVn": "Máy bay",
      "IPA": "[avjɔ̃]",
      "categorie": 1,
      "image": "https://www.flaticon.com/premium-icon/icons/svg/870/870194.png",
      "url": "https://www.collinsdictionary.com/sounds/hwd_sounds/FR-W0002020.mp3",
      "exFr1": "Avion à réaction",
      "exVn1": "Máy bay phản lực",
      "exFr2": "Avion supersonique",
      "exVn2": "Máy bay siêu âm",
      "others": [
        ""
      ]
    },
    {
      "key": 2,
      "nameFr": "hélicoptère",
      "nameVn": "Trực thăng",
      "IPA": "[elikɔptɛʀ]",
      "categorie": 1,
      "image": "https://www.flaticon.com/premium-icon/icons/svg/3097/3097188.png",
      "url": "https://www.collinsdictionary.com/sounds/hwd_sounds/FR-W0040140.mp3",
      "exFr1": "",
      "exVn1": "",
      "exFr2": "",
      "exVn2": "",
      "others": [
        ""
      ]
    },
    {
      "key": 3,
      "nameFr": "ambulance",
      "nameVn": "Xe cứu thương",
      "IPA": "[ɑ̃bylɑ̃s]",
      "categorie": 1,
      "image": "https://www.flaticon.com/premium-icon/icons/svg/2955/2955666.png",
      "url": "https://www.collinsdictionary.com/sounds/hwd_sounds/FR-W0002780.mp3",
      "exFr1": "",
      "exVn1": "",
      "exFr2": "",
      "exVn2": "",
      "others": [
        ""
      ]
    },
    {
      "key": 4,
      "nameFr": "camion",
      "nameVn": "Xe tải",
      "IPA": "[kamjɔ̃]",
      "categorie": 1,
      "image": "https://www.flaticon.com/premium-icon/icons/svg/2888/2888724.png",
      "url": "https://www.collinsdictionary.com/sounds/hwd_sounds/FR-W0050470.mp3",
      "exFr1": "Camion amphibie",
      "exVn1": "Xe tải lội nước",
      "exFr2": "Camion chenillé",
      "exVn2": "Xe tải bánh xích",
      "others": [
        ""
      ]
    },
    {
      "key": 5,
      "nameFr": "ananas",
      "nameVn": "Trái dứa",
      "IPA": "[anana(s)]",
      "categorie": 2,
      "image": "https://www.flaticon.com/premium-icon/icons/svg/3046/3046991.png",
      "url": "https://www.collinsdictionary.com/sounds/hwd_sounds/FR-W0064640.mp3",
      "exFr1": "",
      "exVn1": "",
      "exFr2": "",
      "exVn2": "",
      "others": [
        ""
      ]
    },
    {
      "key": 6,
      "nameFr": "pomme",
      "nameVn": "Trái táo",
      "IPA": "[pɔm]",
      "categorie": 2,
      "image": "https://www.flaticon.com/premium-icon/icons/svg/2183/2183120.png",
      "url": "https://www.collinsdictionary.com/sounds/hwd_sounds/FR-W0003820.mp3",
      "exFr1": "",
      "exVn1": "",
      "exFr2": "",
      "exVn2": "",
      "others": [
        ""
      ]
    },
    {
      "key": 7,
      "nameFr": "banane",
      "nameVn": "Trái chuối",
      "IPA": "[banan]",
      "categorie": 2,
      "image": "https://www.flaticon.com/premium-icon/icons/svg/2482/2482099.png",
      "url": "https://www.collinsdictionary.com/sounds/hwd_sounds/FR-W0006470.mp3",
      "exFr1": "",
      "exVn1": "",
      "exFr2": "",
      "exVn2": "",
      "others": [
        ""
      ]
    }
  ]



class VocaHome extends Component<Props, State>{
    NetInfoSubcribtion = null;
    constructor(props:Props) {
      super(props);
      this.state = {
        dataThemes: themes,
        dataVocabulary: vocabulary,
        selectThemes:0,

        isLoading: true,

        paused: true,
        
        iconName: "star",
        connection_status: false,  
      };
    }
    componentDidMount() {
      // fetch('https://my-json-server.typicode.com/trandinhthang/mockjson/db')
      //   .then((response) => response.json())
      //   .then((json) => {
      //     this.setState({ dataThemes: json.themes, dataVocabulary:json.vocabulary });
      //   })
      //   .catch((error) => console.error(error))
      //   .finally(() => {
      //     this.setState({ isLoading: false });
      //   });
      this.NetInfoSubcribtion = NetInfo.addEventListener(
          this._handleConnectivityChange,
      );
    }
    compomentWillDidmount() {
        this.NetInfoSubcribtion && this.NetInfoSubcribtion();
        Voice.destroy().then(Voice.removeAllListeners);
    }

    _handleConnectivityChange = (state) => {
        this.setState( { connection_status: state.isConnected })
    }
    renderFooter=()=>{
      // if(!this.state.isLoading) return null
      // return (         
      //     <View style={{width:width,alignItems:"center"}}>
      //         <ActivityIndicator size="small" color="#ff8000" />
      //     </View>
      // )
    }

    render(){
      const { dataThemes, dataVocabulary,selectThemes,connection_status } = this.state;
      
      return(
        <>
      <SafeAreaView style={{backgroundColor:'#f7f0e6'}}>
         <Text style={[Styles.textTheme,{padding:5}]}>Chủ đề</Text>
          <View  style={{width:width,height:95,borderRadius:20,paddingLeft:8,paddingRight:16}}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={dataThemes}
              keyExtractor={(item,index)=>index.toString()}
              renderItem={({item})=>this._renderItem(item)}
              
            /> 
          </View>
          <Text style={[Styles.textTheme,{paddingLeft:5}]}>Từ vựng</Text>
          <View style={{width:width,marginTop:5,paddingBottom:95,height:458}}>          
            <FlatList
              showsVerticalScrollIndicator={false}
              data={dataVocabulary}
              renderItem={({item})=>this._renderItemVoca(item)}
              keyExtractor={(item,index)=>index.toString()}
              // ListFooterComponent={this.renderFooter}
            />
          </View>
        </SafeAreaView> 
        
          </>
       
      );
    }
    _renderItem(item){
    return(
      <TouchableOpacity 
        onPress={()=>this.setState({selectThemes:item.id})}
        style={[Styles.divThemes,{backgroundColor:'white',borderWidth: 2,borderColor: 'orange'}]}
      >
        <Image style={{width:100,height:40}}
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
            { this.state.connection_status ? 
              (<Image style={{width:80,height:50}} resizeMode="contain" source={{uri:item.image}}/> ) 
              :  (<Image style={{width:80,height:50}} resizeMode="contain" source={VocaImage}/>) }
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
      <VocaStack.Screen name="DetailVoca" component={VocaDetailTest}/>
    </VocaStack.Navigator>
  );
}

