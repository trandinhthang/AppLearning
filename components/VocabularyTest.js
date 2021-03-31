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
    ScrollView,
    TouchableWithoutFeedback,
    TouchableHighlight
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Swiper from 'react-native-swiper';
import Video from 'react-native-video';
import Styles from '../styles/Styles';

// phát âm
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Voice, {
    SpeechRecognizedEvent,
    SpeechResultsEvent,
    SpeechErrorEvent,
} from '@react-native-voice/voice';

//phát âm
type Props = {};
type State = {
    recognized: string;
    pitch: string;
    error: string;
    end: string;
    started: string;
    results: string[];
    partialResults: string[];
};

var {height,width}= Dimensions.get("window");

class VocaDetailTest extends Component{
   constructor(props:Props) {
      super(props);
      // phát âm
      Voice.onSpeechStart = this.onSpeechStart;
      Voice.onSpeechEnd = this.onSpeechEnd;
      Voice.onSpeechResults = this.onSpeechResults;
      Voice.onSpeechPartialResults = this.onSpeechPartialResults;

      this.state = {
        // luyện phát âm
        end: '',
        started: '',
        results: [],
        partialResults: [],
        rateStar : false,
        

        // nghe phát âm
        paused: true,
        key:"",
        nameFr: "",
        nameVn: "",
        categorie: "",
        image: "",
        url: "",
        exFr1: "",
        exVn1: "",
        exFr2: "",
        exVn2: "",
        others:  [],
        IPA: ""

        
      };
    }

    // nghe phat âm
    setAudio() {
      this.setState({paused: false})
      setTimeout(() => {
        this.setState({paused: true});
      }, 1000);
    };

    compomentWillDidmount() {
        Voice.destroy().then(Voice.removeAllListeners);
    }
    // phát âm
    onSpeechStart = (e: any) => {
      console.log('onSpeechStart: ', e);
      this.setState({
      started: '√',
      });
    };

    onSpeechEnd = (e: any) => {
        console.log('onSpeechEnd: ', e);
        this.setState({
        end: '√',
        });
    };

     onSpeechResults = (e: SpeechResultsEvent) => {
        console.log('onSpeechResults: ', e);
        this.setState({
        results: e.value,
        });
    };

    onSpeechPartialResults = (e: SpeechResultsEvent) => {
        console.log('onSpeechPartialResults: ', e);
        this.setState({
        partialResults: e.value,
        });
        if(String(this.state.partialResults) !== this.state.nameFr){
          console.log(this.state.nameFr)
        this.setState({ rateStar: false })
        } else {
           console.log(this.state.nameFr)
        this.setState({ rateStar: true })
        }
    };

    _startRecognizing = async () => {
        this.setState({
        started: '',
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

    componentDidMount() {
        const {key,nameFr,nameVn,categorie,image,url,exFr1,exVn1,exFr2,exVn2,others,IPA} = this.props.route.params;
        this.setState({key:key,nameFr:nameFr,nameVn:nameVn,categorie:categorie,image:image,url:url,
        exFr1:exFr1,exVn1:exVn1,exFr2:exFr2,exVn2:exVn2,others:others,IPA:IPA})
    }

  render(){

    return (
     <View style={{height:height,width:width,paddingTop:35,alignItems:"center",backgroundColor:'#f7f0e6'}}> 
      
      <View style={{height:height-230,width:width-50,padding:15,borderRadius:15,borderWidth:2,borderColor: 'orange',backgroundColor:'white'}}>
        
        <View style={{  flexDirection:'row',justifyContent:"space-between"}}>
          <View>
            <FontAwesome name='times-rectangle' size={30} color='red' activeOpacity={0.2} 
                    onPress={() => this.props.navigation.navigate('homeVoca')}/>
          </View>
        
          <View style={{alignSelf: 'flex-end'}} >
          { (this.state.rateStar) ? 
              <View style={{  flexDirection:'row'}}>
              <AntDesign name="star" color="orange" size={25} />  
              <AntDesign name="star" color="orange" size={25} />  
              <AntDesign name="star" color="orange" size={25} />  
              </View>  
          : <View style={{  flexDirection:'row'}}>
              <AntDesign name="star" color="gray" size={25} />  
              <AntDesign name="star" color="gray" size={25} />  
              <AntDesign name="star" color="gray" size={25} />  
              </View>
          }
          </View>
        </View>
        
        <View style={{flex:1, flexDirection: 'column',justifyContent: 'space-between'}}>
          <View>
            <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
              <View style={{}}>
                <Text style={Styles.vocaFrTitle}>{this.state.nameFr}</Text>
                <Text style={[Styles.vocaVnTitle,{color:'#3d7ef5'}]}>{this.state.IPA}</Text>
                <Text style={[Styles.vocaVnTitle,{color:'#3d7ef5'}]}>{this.state.nameVn}</Text> 
              </View>  
             
              {/* phát âm */}
              
              <View>
                <Ionicons name='volume-high-outline' size={30} color='#0033ff' activeOpacity={0.2} 
                          onPress={()=>this.setAudio()}>
                  <Video 
                    source={{ uri: this.state.url }} 
                    paused={this.state.paused}
                  />
                </Ionicons>
                <TouchableHighlight onPress={this._startRecognizing}>
                  <MaterialIcons name="keyboard-voice" size={30} color="red" />
                </TouchableHighlight>
              </View>        
              <View style={{}}>
                <Image style={{width:100,height:90}} resizeMode="contain" source={{uri:this.state.image}}/>
              </View>
            </View>
            <View  style={{paddingTop:10,borderBottomWidth: 1,borderColor:'red'}} >
              <Text style={{color:"#0033ff",fontSize:16,paddingBottom:5}}>{this.state.exFr1}</Text>
              <Text style={{color:"#3d7ef5",fontSize:16,paddingBottom:5}}>{this.state.exVn1}</Text>
              <Text style={{color:"#0033ff",fontSize:16,paddingBottom:5}}>{this.state.exFr2}</Text>
              <Text style={{color:"#3d7ef5",fontSize:16,paddingBottom:5}}>{this.state.exVn2}</Text>
            </View>
            {this.state.others.map( (item,index) =>
              <Text key={index} style={{color:"#0022ff",fontSize:16,paddingTop:5}}>{item}</Text>
            )}
          </View> 
        </View> 
      </View>
    </View> 
    )
  }
}
export default VocaDetailTest;