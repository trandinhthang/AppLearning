import React, { Component } from "react";
import {  FlatList,ActivityIndicator,View } from "react-native";
import { Container, Header, Item, Input, Icon,
        Button,Content, List, ListItem, Left, Body, 
        Right, 
        Thumbnail, 
        Text
} from 'native-base';
import _ from 'lodash'

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      fullData:[],
      loading:false,
      error:null

    };
  }
  componentDidMount(){
    this.requestAPIPhotos()
  }
  requestAPIPhotos=()=>{
    this.setState({loading:true})
    const apiURL="http://192.168.1.4:3000/search"
    fetch(apiURL).then((res)=>res.json())
    .then((resJson)=>{
      this.setState({
        loading:false,
        data:resJson,
        fullData:resJson
      })
    }).catch(error=>{
      this.setState({error,loading:false})
    })
  }

 _renderItemSearch= ({item,index}) =>{
    return(
      <ListItem avatar>
        <Body>
          <Text>{item.nameFr}</Text>
          <Text >{item.nameVn}</Text>
        </Body>
      </ListItem>

    );
  }

  renderFooter=()=>{
    if(!this.state.loading) return null
    return (
      <View style={{paddingVertical:20,boderTopWidth:1,borderColor:"red"}}>
        <ActivityIndicator animating size="large"/>
      </View>
    )
  }
  handleSearch =(text)=>{
    const formatedQuery = text.toLowerCase()
    const data= _.filter(this.state.fullData, search=>{
      if(search.nameFr.includes(formatedQuery)){
        return true
      }
      return false
    })
    this.setState({data,query:text})
  }

  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Tra từ " onChangeText={this.handleSearch} />
          </Item>
        </Header>
        <List>
          <FlatList
            data={this.state.data}
            renderItem={this._renderItemSearch}
            keyExtractor={(item,index)=>index.toString()}
            ListFooterComponent={this.renderFooter}
          />
        </List>         
      </Container>
    ); 
  }
}

// import React, { Component } from 'react';
// import { ActivityIndicator, FlatList, View } from 'react-native';
// import { Container, Header, Item, Input, Icon,
//         Button,Content, List, ListItem, Left, Body, 
//         Right, 
//         Thumbnail, 
//         Text
// } from 'native-base';
// import _ from 'lodash';

// export default class Test extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data: [],
//       dataFull: [],
//       isLoading: true
//     };
//   }
//   componentDidMount() {
//     fetch('http://192.168.1.4:3000/db')
//       .then((response) => response.json())
//       .then((json) => {
//         this.setState({ data: json.search,dataFull:json.search });
//       })
//       .catch((error) => console.error(error))
//       .finally(() => {
//         this.setState({ isLoading: false });
//       });
//   }
//   handleSearch =(text)=>{
//     const formatedQuery =text.toLowerCase()
//     const data=_.filter(this.state.dataFull, search=>{
//       if(search.name.includes(formatedQuery)){
//         return true
//       }
//       return false
//     })
//     this.setState({data,query:text})

//   }

//   render() {
//     const { data, isLoading } = this.state;

//     return (
//       <Container>
//         <Header searchBar rounded>
//           <Item>
//             <Icon name="ios-search" />
//             <Input placeholder="Tra từ" onChangeText={this.handleSearch} />
//           </Item>
//         </Header>
//           {isLoading ? <ActivityIndicator/> : (
//             <FlatList
//               data={data}
//               keyExtractor={(item,index)=>index.toString()}
//               renderItem={({ item }) => this._renderItemSearch(item)}
//             />
//           )}
//       </Container>

//     );
//   }
//   _renderItemSearch(item){
//     return(
//       <ListItem avatar>
//         <Body>
//           <Text>{item.name}</Text>
//           <Text note>xin chào</Text>
//         </Body>
//         <Right>
//           <Text note>3:43 pm</Text>
//         </Right>
//       </ListItem>    
//     ) 
//   }
// };

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
var tr='tran dinh thang'
function SearchDetails({route,navigation}) {
  const {nameFr,data,IPA,url,gramma,antonym,image,examFr1,examVn1,examFr2,examVn2} = route.params;
  const [isPaused, setPaused] = useState(true);

  return (
    <Container>
      <View  hasTabs/>
      <Tabs renderTabBar={()=> <ScrollableTab style={{height:35}} />}>
        <Tab activeTabStyle={{backgroundColor:'#5b91f5'}}  tabStyle={Styles.searchTab} textStyle={{color:'#0033ff'}} heading="PHÁP - VIỆT">  
          <View style={Styles.searchDetail}>
            <View style={Styles.searchDetailName}>
              <View style={{flex:1}}>
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                  <View  >
                    <Text style={[Styles.vocaText]}>{nameFr} <Text style={{fontStyle:'italic'}}>{IPA}</Text></Text>
                     <Text style={[Styles.vocaText]}>{data}</Text>
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
            <View style={Styles.searchDetailContent}> 
              <Text style={{fontStyle:'italic',fontSize:15}}>{gramma}</Text>  
              <Text>  {examFr1.split(" ").map((item,index)=><Text key={index}>
                <Text   style={{textDecorationLine: "underline",fontStyle:'italic'}} >{item}</Text>
                <Text > </Text></Text>)} 
              </Text>    
              <Text style={{fontStyle:'italic'}}>  {examVn1}</Text>  
              <Text>  {examFr2.split(" ").map((item,index)=><Text key={index}>
                <Text onPress={()=> alert(item)} style={{textDecorationLine: "underline",fontStyle:'italic'}} >{item}</Text>
                <Text> </Text></Text>)} 
              </Text>       
              <Text style={{fontStyle:'italic'}}>  {examVn2}</Text>      
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
        </Tab>
        <Tab activeTabStyle={{backgroundColor:'#5b91f5'}} tabStyle={Styles.searchTab} textStyle={{color:'#0033ff'}} heading="TRÁI NGHĨA">   
          <View style={Styles.searchDetail}>  
            <View style={Styles.searchAntonym}>
              {antonym.map((item,index)=><Text style={{fontSize:15}} key={index}>{item}</Text>)}
            </View>
          </View>
        </Tab>
        <Tab activeTabStyle={{backgroundColor:'#5b91f5'}} tabStyle={Styles.searchTab} textStyle={{color:'#0033ff'}} 
            heading="HÌNH ẢNH"> 
          <View style={{alignItems:"center"}}>  
              <Image style={{width:250,height:250}} resizeMode="contain" source={{uri:image}}/>          
          </View>
        </Tab>
      </Tabs>
    </Container> 
  );
}
export default SearchDetails;
