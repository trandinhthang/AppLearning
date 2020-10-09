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
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Swiper from 'react-native-swiper';
import Video from 'react-native-video';
import Styles from '../styles/Styles';

function SearchDetails({route,navigation}) {
  const {nameFr,API,nameVn,url,gramma} = route.params;

  const [isPaused, setPaused] = useState(true);
  return (
    <Container>
      <View style={{backgroundColor:'#97f086',padding:5}}>
        <Ionicons name='arrow-back-outline' size={20}  color='blue' activeOpacity={0.2} onPress={() => navigation.navigate('homeSearch')}>
          <Text style={{fontSize:12}}>back</Text>
        </Ionicons>
      </View>
      <View  hasTabs/>
      <Tabs renderTabBar={()=> <ScrollableTab  />}>
        <Tab tabStyle={{backgroundColor:'#97f086',borderWidth:2,borderColor:'white'}} textStyle={{color:'#0208c4'}} heading="PHÁP - VIỆT">  
          <View style={Styles.searchDetail}>
            <View style={Styles.vocaHeader}>
              <View style={{flex:1}}>
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                  <View >
                    <Text style={Styles.vocaText}>{nameFr} {API}</Text>
                    <Text style={Styles.vocaText}>{nameVn}</Text>
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
            <View style={{marginTop:10,height:350,backgroundColor:'white'}}>
              <Text>Ví dụ :))))</Text>
            </View>
          </View>
        </Tab>
        <Tab tabStyle={{backgroundColor:'#97f086',borderWidth:2,borderColor:'white'}} textStyle={{color:'#0208c4'}} 
            heading="NGỮ PHÁP"> 
          <View style={Styles.searchDetail}>  
            <View style={{marginTop:5,height:350,backgroundColor:'white'}}>
              <Text>{gramma}</Text>
            </View>
          </View>
        </Tab>
        <Tab tabStyle={{backgroundColor:'#97f086',borderWidth:2,borderColor:'white'}} textStyle={{color:'#0208c4'}} heading="ĐỒNG NGHĨA">   

        </Tab>
        <Tab tabStyle={{backgroundColor:'#97f086',borderWidth:2,borderColor:'white'}} textStyle={{color:'#0208c4'}} heading="HÌNH ẢNH"> 

        </Tab>
        <Tab tabStyle={{backgroundColor:'#97f086',borderWidth:2,borderColor:'white'}} textStyle={{color:'#0208c4'}} heading="GHI CHÚ">

        </Tab>
      </Tabs>
    </Container> 
  );
}
export default SearchDetails;
