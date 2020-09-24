import React, { Component } from 'react';
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
import Icon from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import Video from 'react-native-video';
import Styles from '../styles/Styles';

var {height,width}= Dimensions.get("window");
export default class VocabularyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataThemes: [],
      dataVocabulary: [],
      selectThemes:0,

      isLoading: true,

      paused: true,
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
  onEnd=(data)=>{
      this.setState({paused:true});
        this.player.seek(0);
  }

  render() {
    const { dataThemes, dataVocabulary,isLoading,selectThemes } = this.state;
    return (
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
  _renderItemVoca(item){
    let theme=this.state.selectThemes
    if(theme==0||theme==item.categorie){
       return(
        <SafeAreaView >        
          {/* <TouchableOpacity  style={{width:20,borderRadius:20,paddingTop:8,backgroundColor:'red'}}
            onPress={()=>this.setState({paused: !this.state.paused})}>
            <Icon name='star'/>
            <Video
                ref={(ref) => {this.player = ref}}  
                source={{ uri: item.url }} 
                paused={this.state.paused}
                onEnd={this.onEnd}
            />
          </TouchableOpacity> */}
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
                    name="star"
                    color="white"
                    size={20}
                    onPress={() => alert('Đã thêm vào yêu thích')}
                  />  
                  <Ionicons name="volume-high-outline"
                    color="white"
                    size={20}
                    onPress={()=>this.setState({paused: !this.state.paused})}
                  >
                    <Video
                      ref={(ref) => {this.player = ref}}  
                      source={{ uri: item.url }} 
                      paused={this.state.paused}
                      onEnd={this.onEnd}
                    />
                  </Ionicons>
                    
                     
                </View>  
              </View>
            </View>
          </View> 
        </SafeAreaView>
    );
    }
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
}

