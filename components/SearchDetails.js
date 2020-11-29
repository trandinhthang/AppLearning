import React,{useState} from 'react';
import {
    Text, 
    View,
    Image,   
    TouchableOpacity
} from 'react-native';
import { Container,Tab, Tabs, ScrollableTab } from 'native-base';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/AntDesign';

import Video from 'react-native-video';
import Styles from '../styles/Styles';

function SearchDetails({route,navigation}) {
  const {nameFr,data,IPA,url,gramma,antonym,image,examFr1,examVn1,examFr2,examVn2} = route.params;
  const [isPaused, setPaused] = useState(true);

  return (
    <Container>
      <View  hasTabs/>
      <Tabs renderTabBar={()=> <ScrollableTab style={{height:35}} />}>
        <Tab activeTabStyle={{backgroundColor:'#5b91f5'}}  tabStyle={[Styles.searchTab]} textStyle={{color:'#0033ff'}} 
          heading="Pháp-Việt">  
          <View style={Styles.searchDetail}>
            <View style={Styles.searchDetailName}>
              <View style={{flex:1}}>
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                  <View  >
                    <Text style={[Styles.vocaText,{fontStyle:'italic'}]}>{nameFr} <Text style={{fontStyle:'italic'}}>{IPA}</Text></Text>
                     <Text style={[Styles.vocaText,{fontStyle:'italic'}]}>{gramma}</Text>
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
            <View style={Styles.searchDetailContent}> 
              {data.map((item,index)=><Text style={{fontSize:15}} key={index}>➵{item.charAt(0).toUpperCase()}{item.substr(1)}</Text>)}
              <View style={{paddingLeft:15}}>
                <Text>{examFr1.split(" ").map((item,index)=><Text key={index}>
                  <Text  onPress={()=> navigation.navigate('deTwoSearch',{value:item})} 
                    style={{color:"#0033ff"}} >{item}</Text>
                  <Text > </Text></Text>)} 
                </Text>    
                <Text style={{}}>{examVn1}</Text>  
                <Text>{examFr2.split(" ").map((item,index)=><Text key={index}>
                  <Text onPress={()=> alert(item)} style={{color:"#0033ff"}}>{item}</Text>
                  <Text> </Text></Text>)} 
                </Text>       
                <Text style={{}}>{examVn2}</Text>      
                {/* {exam.map((item,index)=><Text key={index}>–
                  <Text  onPress={()=> alert(item)}  style={{color:'#ff0000'}}  > {item.split(' ')[0]} </Text>
                  <Text  onPress={()=> alert(item)}  style={{color:'#003cff'}}  > {item.split(' ')[1]} </Text>
                  <Text  onPress={()=> alert('c')}  style={{color:'#13d126'}}  > {item.split(' ')[2]} </Text>
                  <Text  onPress={()=> alert('d')}  style={{color:'#521e13'}}  > {item.split(' ')[3]} </Text>
                  <Text  onPress={()=> alert('e')}  style={{color:'#e35c0e'}}  > {item.split(' ')[4]} </Text>
                  <Text  onPress={()=> alert('f')}  style={{color:'#8c4253'}}  > {item.split(' ')[5]} </Text>
                  <Text  onPress={()=> alert('j')}  style={{color:'#293e8f'}}  > {item.split(' ')[6]} </Text>
                  <Text  onPress={()=> alert('k')}  style={{color:'#000000'}}  > {item.split(' ')[7]} </Text>
                  <Text  onPress={()=> alert('l')}  style={{color:'#2b0303'}}  > {item.split(' ')[8]} </Text>
                </Text> 
                )}  */}     
              </View>                         
            </View>
          </View>
        </Tab>
        <Tab activeTabStyle={{backgroundColor:'#5b91f5'}} tabStyle={Styles.searchTab} textStyle={{color:'#0033ff'}} 
          heading="Trái Nghĩa">   
          <View style={Styles.searchDetail}>  
            <View style={Styles.searchAntonym}>
              {antonym.map((item,index)=><Text style={{fontSize:15}} key={index}>{item}</Text>)}
            </View>
          </View>
        </Tab>
        <Tab activeTabStyle={{backgroundColor:'#5b91f5'}} tabStyle={Styles.searchTab} textStyle={{color:'#0033ff'}} 
          heading="Hình Ảnh"> 
          <View style={{alignItems:"center"}}>  
              <Image style={{width:250,height:250}} resizeMode="contain" source={{uri:image}}/>          
          </View>
        </Tab>
      </Tabs>
    </Container> 
  );
}
export default SearchDetails;