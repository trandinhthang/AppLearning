import React,{Component} from 'react';
import {
TouchableOpacity,
View,
Text,
SafeAreaView
} from 'react-native';
import Video from 'react-native-video';
import Styles from '../styles/Styles'
import Icon from 'react-native-vector-icons/Fontisto';

export default class GrammarList extends Component {
    constructor(props) {
        super(props);
        this.state={
            paused: true,
            paused1: true,
            };
    }
    onEnd=(data)=>{
        this.setState({paused:true});
         this.player.seek(0);
         this.setState({paused1:true});
         this.video.seek(0);

    }

  render() {
  return (
    <SafeAreaView >
    <TouchableOpacity  style={{width:20,borderRadius:20,paddingTop:8,backgroundColor:'red'}}
            onPress={()=>this.setState({paused1: !this.state.paused1})}>
            <Icon name='star'/>
            <Video
                ref={(ref) => {this.video = ref}}  
                source={{ uri: 'https://www.collinsdictionary.com/sounds/hwd_sounds/fr_j.mp3' }} 
                paused={this.state.paused1}
                onEnd={this.onEnd}
            />
            </TouchableOpacity>

        <TouchableOpacity  style={{width:20,borderRadius:20,paddingTop:8,backgroundColor:'red'}}
            onPress={()=>this.setState({paused: !this.state.paused})}>
            <Icon name='star'/>
            <Video
                ref={(ref) => {this.player = ref}}  
                source={{ uri: 'https://www.collinsdictionary.com/sounds/hwd_sounds/fr_bonjour.mp3' }} 
                paused={this.state.paused}
                onEnd={this.onEnd}
            />
            </TouchableOpacity>    
    </SafeAreaView>
  );
}
}

