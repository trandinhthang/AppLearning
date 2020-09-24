import React,{Component} from 'react';
import {
Button,
View,
Text
} from 'react-native';
import Video from 'react-native-video';
export default  class Test extends Component {
    play() {
      this.video.play()
      this.video.seekTo(25)
    }
    pause() {
      this.video.pause()
    }
    render() {
      return (
        <View>
          <Video
            source={{ uri: 'https://www.collinsdictionary.com/sounds/hwd_sounds/fr_bonjour.mp3' }} 
            ref={(ref) => { this.video = ref }}
          />
          <Button title="play" onPress={() => this.play()}/> 
          <Button title="pause" onPress={() => this.pause()}/> 
        </View>
      )
    }
  }