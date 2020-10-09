import React,{Component} from 'react';
import { SafeAreaView, View, Text,StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import Sound from 'react-native-sound';
import Icon from 'react-native-vector-icons/Fontisto';
const audioList=[
  {
    title:'salut',
    url:'https://www.collinsdictionary.com/sounds/hwd_sounds/fr_merci.mp3'
  }
];
var sound1,sound2,sound3;
function playSound(item,index){
  if(index==0){
    sound1= new Sound(item.url,'',(error,sound)=>{
      if(error){
        alert('error'+error+message);
        return;
      }
      sound1.play(()=>{
        sound1.release();
      });
    });
  }
  else if(index==1){
    sound2 =new Sound(item.url,'',(error,sound)=>{
    if(error){
        alert('error'+error+message);
        return;
      }
      sound2.play(()=>{
        sound2.release();
      });
    });
  }
}
export default class AudioTranslate_ extends Component {
  render(){
    return (
     <View >
      {audioList.map((item,index)=>{
        return(
          <View key={item.title} >
            <TouchableOpacity onPress={()=>{
            return playSound(item,index);
            }}>
            <Icon name="volume-up" color="#0066ff" size={20}/>
          </TouchableOpacity>
          </View>  
        );
      })}  
     </View>
  );
  }
}