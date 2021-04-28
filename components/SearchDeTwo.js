import React,{useState} from 'react';
import {
    Text, 
    View,
    Image,   
    TouchableOpacity,
    TextInput
} from 'react-native';
import { Container,Tab, Tabs, ScrollableTab } from 'native-base';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/AntDesign';

import Video from 'react-native-video';
import Styles from '../styles/Styles';
const FranceDictionary = require('../json/FranceDictionary.json');

function SearchDeTwo({route,navigation}) {
  const {value} = route.params;
  const [isPaused, setPaused] = useState(true);
  const setAudio = () => {
    setPaused(false);
    setTimeout(() => {
      setPaused(true);
    }, 1000);
  };
  const found = FranceDictionary.FranceDictionary.filter((item)=>{return item.nameFr===value}) 
 
  return (
    <Container>
      <View  hasTabs/>
      <Tabs renderTabBar={()=> <ScrollableTab style={{height:35}} />}>
        <Tab activeTabStyle={{backgroundColor:'#5b91f5'}}  tabStyle={[Styles.searchTab]} textStyle={{color:'#0033ff'}} heading="Pháp - Việt">  
          <View style={Styles.searchDetail}>
            <View style={Styles.searchDetailName}>
              <View style={{flex:1}}>
              {found.map((e,index,ex)=>
                <View  key={index}  style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                  <View >
                    <Text style={Styles.vocaText}>{e.nameFr} <Text >{e.IPA}</Text></Text>
                    <Text  style={Styles.vocaText}>{e.gramma}</Text>
                  </View>
                  <View>
                    <Ionicons name="volume-high-outline" color="#0066ff" size={30}
                              onPress={()=>setAudio()}>
                      <Video
                        source={{ uri: e.url }} 
                        paused={isPaused} 
                      />
                    </Ionicons>
                  </View>
                </View>
              )}    
              </View> 
            </View>  
            {found.map((e,index)=>
            <View key={index}  style={Styles.searchDetailContent}> 
              {e.data.map((item,index)=><Text style={{fontSize:15}} key={index}>‣{item.charAt(0).toUpperCase()}{item.substr(1)}</Text>)}
              <View  style={{paddingLeft:15}}>
                <Text >{e.examFr1.split(" ").map((item,index)=><Text key={index}>
                  <Text  onPress={()=> navigation.navigate('deTwoSearch',{value:item})} style={{color:"#0033ff"}} >{item}</Text>
                  <Text > </Text></Text>)} 
                </Text>    
                <Text style={{}}>{e.examVn1}</Text>  
                <Text >{e.examFr2.split(" ").map((item,index)=><Text key={index}>
                  <Text onPress={()=> navigation.navigate('deTwoSearch',{value:item})} style={{color:"#0033ff"}}>{item}</Text>
                  <Text> </Text></Text>)} 
                </Text>       
                <Text style={{}}>{e.examVn2}</Text>     
              </View>                         
            </View>
            )}
          </View>
        </Tab>

        {found.map( (item,index) =>     
          (item.antonym.length) > 0 ?
            <Tab key={index} activeTabStyle={{backgroundColor:'#5b91f5'}} tabStyle={Styles.searchTab} textStyle={{color:'#0033ff'}} heading="Trái Nghĩa">   
              <View style={Styles.searchDetail}>  
                <View style={Styles.searchAntonym}>
                  <Text >{item.antonym}</Text>
                </View>
              </View>
            </Tab> : null
        )}
        
        {found.map( (item,index) =>
          (item .image !== "") ?
            <Tab key={index} activeTabStyle={{backgroundColor:'#5b91f5'}} tabStyle={Styles.searchTab} 
            textStyle={{color:'#0033ff'}} heading="Hình Ảnh"> 
              <View  style={{alignItems:"center"}}>  
                  <Image  style={{width:250,height:250}} resizeMode="contain" source={{uri:item.image}}/>          
              </View>
            </Tab>  : null 
        )}     
        <Tab activeTabStyle={{backgroundColor:'#5b91f5'}} tabStyle={Styles.searchTab} textStyle={{color:'#0033ff'}} 
          heading="Ghi chú">   
            <View style={{height:'100%',alignItems:"center",backgroundColor:'#afc6f0'}}>  
                <TextInput
                  placeholder="Ghi chú sẽ tự động được lưu"
                  style={[Styles.textInput2,{marginTop:50}]}
                  // onChangeText={(e) => this.setState({input: e})}
                  // onSubmitEditing={(e) => this.showMeaning(e) }
                />  
            </View>
        </Tab> 
      </Tabs>
    </Container> 
      
  );
}
export default SearchDeTwo;
{/* <View>
      <View key={index}><Text >{e.nameFr}</Text></View>
</View>  */}
