import React,{useState} from 'react';
import {
    Text, 
    View,
    Image,   
    TouchableOpacity,
    Alert
} from 'react-native';
import { Container,Tab, Tabs, ScrollableTab } from 'native-base';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/AntDesign';

import Video from 'react-native-video';
import Styles from '../styles/Styles';

const list = [
  { id: 1,
    "name": "lutte",
    "data": "đấu tranh",
    "IPA": "[lyt]",
    "url":"https://www.collinsdictionary.com/sounds/hwd_sounds/FR-W0086430.mp3",
    "gramma":"Danh từ giống cái",
    "examFr1":"Lutte des classes",
    "examVn1":"Đấu tranh giai cấp",	
    "examFr2":"Luttes politiques, religieuses",
    "examVn2":"Đấu tranh chính trị, tôn giáo",			
    "antonym":[],
    "image":""
  },
  { id: 2,
    nameFr: "incendie",
    "data": "đám cháy",
    "IPA": "[ɛ̃sɑ̃di]",
    "url":"https://www.collinsdictionary.com/sounds/hwd_sounds/fr_incendie.mp3",
    "gramma":"Danh từ giống đực",
    "examFr1":"Incendie de forêt",
    "examVn1":"Đám cháy rừng",	
    "examFr2":"Lutte contre l'incendie",
    "examVn2":"Chống hoả hoạn",			
    "antonym":[],
    "image":""
  }
];

function SearchDeTwo({route,navigation}) {
   const {nameFr} = route.params;
  //  const found = beasts.find(element => element === name.nameFr);
  // const found= beasts.map(function(e) { return e.name;}).indexOf('thang');
  // const found= array.findIndex(item=>item.name==='maison')
  const found = list.filter((item)=>{return item.name===nameFr})      
  return (
    <View>
      {found.map(e=><View><Text key={e.key}>{e.name} {e.data} {e.IPA}</Text></View>)}
    </View>   
  );
}
export default SearchDeTwo;

