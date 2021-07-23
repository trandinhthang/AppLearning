import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Modal
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Voice, {
  SpeechRecognizedEvent,
  SpeechResultsEvent,
  SpeechErrorEvent,
} from '@react-native-voice/voice';
import LottieView from 'lottie-react-native';


class VoiceTest extends Component {
  state = {
    recognized: '',
    pitch: '',
    error: '',
    end: '',
    started: false,
    results: [],
    partialResults: [],
  };

  constructor(props) {
    super(props);
    Voice.onSpeechStart = this.onSpeechStart;
    Voice.onSpeechRecognized = this.onSpeechRecognized;
    Voice.onSpeechEnd = this.onSpeechEnd;
    Voice.onSpeechError = this.onSpeechError;
    Voice.onSpeechResults = this.onSpeechResults;
    Voice.onSpeechPartialResults = this.onSpeechPartialResults;
    Voice.onSpeechVolumeChanged = this.onSpeechVolumeChanged;
  }

  componentWillUnmount() {
    Voice.destroy().then(Voice.removeAllListeners);
  }

  onSpeechStart = (e) => {
    // console.log('onSpeechStart: ', e);
    this.setState({
      started: true,
    });
  };

  onSpeechRecognized = (e) => {
    // console.log('onSpeechRecognized: ', e);
    this.setState({
      recognized: '√',
    });
  };

  onSpeechEnd = (e) => {
    // console.log('onSpeechEnd: ', e);
    this.setState({
      started: false,
    });
  };

  onSpeechError = (e) => {
    // console.log('onSpeechError: ', e);
    this.setState({
      error: JSON.stringify(e.error),
    });
  };

  onSpeechResults = (e) => {
    // console.log('onSpeechResults: ', e);
    this.setState({
      results: e.value,
    });
  };

  onSpeechPartialResults = (e) => {
    // console.log('onSpeechPartialResults: ', e);
    this.setState({
      partialResults: e.value,
    });
  };

  onSpeechVolumeChanged = (e) => {
    // console.log('onSpeechVolumeChanged: ', e);
    this.setState({
      pitch: e.value,
    });
  };

  _startRecognizing = async () => {
    this.setState({
      recognized: '',
      pitch: '',
      error: '',
      started: false,
      results: [],
      partialResults: [],
      end: '',
    });

    try {
      await Voice.start('fr');
    } catch (e) {
      console.error(e);
    }
  };

  _stopRecognizing = async () => {
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
  };

  _cancelRecognizing = async () => {
    try {
      await Voice.cancel();
    } catch (e) {
      console.error(e);
    }
  };

  _destroyRecognizer = async () => {
    try {
      await Voice.destroy();
    } catch (e) {
      console.error(e);
    }
    this.setState({
      recognized: '',
      pitch: '',
      error: '',
      started: false,
      results: [],
      partialResults: [],
      end: '',
    });
  };

  componentDidUpdate(partialResults){
    const getSearch = this.props.getSearch
    getSearch(this.state.partialResults)
  }
  
  render() {
    return (
      <>
        <TouchableHighlight onPress={this._startRecognizing}>
        <MaterialIcons name="keyboard-voice" size={30} color="red" />
        </TouchableHighlight>
       
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.started}
         
        >
          <View style={{ flex:1}}>
            <LottieView
                source={require('../assests/animation/voice.json')}
                autoPlay
                loop={false}
                speed={2}  
            
            />
     
          </View>
        </Modal>

       </>
     
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 25,
    height: 50,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  action: {
    textAlign: 'center',
    color: '#0000FF',
    marginVertical: 5,
    fontWeight: 'bold',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  stat: {
    textAlign: 'center',
    color: '#B0171F',
    marginBottom: 1,
  },
});

export default VoiceTest;