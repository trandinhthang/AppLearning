import React,{useState} from 'react';
import {
    Text, 
    View,
    Image,   
} from 'react-native';
import { Container,Tab, Tabs, ScrollableTab } from 'native-base';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Video from 'react-native-video';
import Styles from '../styles/Styles';

function SearchDetails({route,navigation}) {
  const {nameFr,IPA,nameVn,url,gramma,exam,speciality,antonym,image} = route.params;

  const [isPaused, setPaused] = useState(true);
  return (
    <Container>
      <View  hasTabs/>
      <Tabs renderTabBar={()=> <ScrollableTab  />}>
        <Tab tabStyle={Styles.searchTab} textStyle={{color:'#0208c4'}} heading="PHÁP - VIỆT">  
          <View style={Styles.searchDetail}>
            <View style={Styles.vocaHeader}>
              <View style={{flex:1}}>
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                  <View >
                    <Text style={Styles.vocaText}>{nameFr} {IPA}</Text>
                  </View> 
                  <View>
                    <Ionicons name="mic-circle-outline" color="#0066ff" size={30}
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
            <View style={Styles.searchText}>
              <Text>{gramma}</Text>
              {exam.map(item=><View ><Text>{item}</Text></View>)}
              <Text>{speciality}</Text>
            </View>
          </View>
        </Tab>
        <Tab tabStyle={Styles.searchTab} textStyle={{color:'#0208c4'}} 
            heading="TRÁI NGHĨA">   
          <View style={Styles.searchDetail}>  
            <View style={Styles.searchText}>
              {antonym.map(item=><View ><Text>{item}</Text></View>)}
            </View>
          </View>
        </Tab>
        <Tab tabStyle={Styles.searchTab} textStyle={{color:'#0208c4'}} 
            heading="HÌNH ẢNH"> 
          {/* <View style={{margin:50}}>  
              <Image style={{width:250,height:250}} resizeMode="contain" source={{uri:image}}/>          
          </View> */}
        </Tab>
      </Tabs>
    </Container> 
  );
}
export default SearchDetails;
