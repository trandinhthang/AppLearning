import React from 'react';

import {Container} from 'native-base';
// import Styles from '../styles/Styles';
// import Video from 'react-native-video';
import YouTube from 'react-native-youtube';

const VideoDetailScreen = ({route}) => {
  const {urlVideo, keyVideo} = route.params;
  return (
    <Container style={{backgroundColor: '#b2d4eb'}}>
      {/* <Video 
                controls
                source={urlVideo}  //source={{uri: urlVideo}}
                style={{flex:1}}
                resizeMode="contain"
            />  */}
      <YouTube
        videoId={keyVideo} // The YouTube video ID
        apiKey="AIzaSyDCXWL7RepDSqUldAP6Je8X4s9llv5Nl5M"
        play // control playback of video with true/false
        fullscreen // control whether the video should play in fullscreen or inline
        loop // control whether the video should loop when ended
        style={{alignSelf: 'stretch', height: 300}}
      />
    </Container>
  );
};

export default VideoDetailScreen;
