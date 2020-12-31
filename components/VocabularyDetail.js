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

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Swiper from 'react-native-swiper';
import Video from 'react-native-video';
import Styles from '../styles/Styles';

var {height,width}= Dimensions.get("window");

function VocaDetail({route,navigation}) {
  const {nameFr,nameVn,IPA,image,url,exVn1,exFr1,exVn2,exFr2,others} = route.params;

  const [isPaused, setPaused] = useState(true);
  return (
    <View style={{height:height,width:width,paddingTop:35,alignItems:"center",backgroundColor:'#f7f0e6'}}>
      <Video source={{ uri: url }} paused={isPaused} />
      <View style={{height:height-200,width:width-50,padding:15,borderRadius:15,borderWidth:2,borderColor: 'orange',backgroundColor:'white'}}>
        <FontAwesome name='times-rectangle' size={30} color='red' activeOpacity={0.2} 
                  onPress={() => navigation.navigate('homeVoca')}/>
        <View style={{flex:1, flexDirection: 'column',justifyContent: 'space-between'}}>
          <View>
            <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
              <View style={{}}>
                <Text style={Styles.vocaFrTitle}>{nameFr}</Text>
                <Text style={[Styles.vocaVnTitle,{color:'#3d7ef5'}]}>{IPA}</Text>
                <Text style={[Styles.vocaVnTitle,{color:'#3d7ef5'}]}>{nameVn}</Text> 
              </View>  
              <View>
                <Ionicons name='volume-high-outline' size={30} color='#0033ff' activeOpacity={0.2} 
                          onPress={()=>setPaused(false)}/>
              </View>        
              <View style={{}}>
                <Image style={{width:100,height:100}} resizeMode="contain" source={{uri:image}}/>
              </View>
            </View>
            <View  style={{paddingTop:20,borderBottomWidth: 1,borderColor:'red'}} >
              <Text style={{color:"#0033ff",fontSize:16,paddingBottom:5}}>{exFr1}</Text>
              <Text style={{color:"#3d7ef5",fontSize:16,paddingBottom:5}}>{exVn1}</Text>
              <Text style={{color:"#0033ff",fontSize:16,paddingBottom:5}}>{exFr2}</Text>
              <Text style={{color:"#3d7ef5",fontSize:16,paddingBottom:5}}>{exVn2}</Text>
            </View>
            {others.map( (item,index) =>
              <Text key={index} style={{color:"#0022ff",fontSize:16,paddingTop:5}}>{item}</Text>
            )}
          </View> 
        {/* <View  style={{alignItems:'center'}} >
          <Text style={{fontSize:15,color:'#696666'}}>Nhấp vào thẻ để nghe phát âm</Text>
        </View> */}
        </View> 
      </View>
    </View> 
  );
}
export default VocaDetail;
