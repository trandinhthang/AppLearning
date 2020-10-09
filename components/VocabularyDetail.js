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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Swiper from 'react-native-swiper';
import Video from 'react-native-video';
import Styles from '../styles/Styles';

function VocaDetail({route,navigation}) {
  const {nameFr,image,url,IPA,exVn,exFr,gramma} = route.params;

  const [isPaused, setPaused] = useState(true);
  return (
    <View style={Styles.vocaDetail}>
      <Ionicons name='arrow-back-outline' size={20} color='#d40000' activeOpacity={0.2} onPress={() => navigation.navigate('homeVoca')}>
        <Text style={{fontSize:12}}>back</Text>
      </Ionicons>

        
      <View style={Styles.vocaHeader}>
        <View style={{flex:1}}>
          <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
            <View >
              <Text style={Styles.vocaText}>{nameFr}</Text>
              <Text style={Styles.vocaText}>{IPA}</Text>
            </View> 
            <View>
              <Ionicons name="volume-high-outline" color="#0066ff" size={30}
                        onPress={()=>setPaused(false)}>
                <Video
                  source={{ uri: url }} 
                  paused={isPaused} 
                />
              </Ionicons>
            </View>
          </View>
        </View> 
      </View>
      <View style={Styles.vocDesc}>
        <View>
          <Text style={Styles.vocaText}>Ngữ Pháp - Grammaire</Text>
          <Text >      {gramma}</Text>
          <Text style={Styles.vocaText}>Ví dụ - Exemple</Text>
          <View style={{paddingLeft:20}}>
            <Text >{exFr}</Text>
            <Text >{exVn}</Text>
          </View>
        </View>   
      </View>
    </View>
    
  );
}
export default VocaDetail;
