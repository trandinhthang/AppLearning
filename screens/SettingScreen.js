import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  ActivityIndicator
} from "react-native";
import { Container, Header, Input, Icon,
        Button,Content, List, ListItem, Left, Body, 
        Right, Thumbnail
} from 'native-base';
import { SearchBar } from 'react-native-elements';
import _ from 'lodash';

class SettingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search:null,
            data: [],
            fullData:[],
            loading:false,
            error:null,
            query:""
        };
    }
    componentDidMount(){
        this.requestAPISearch()
    }
    //fetch data từ server
    requestAPISearch= _.debounce(()=>{
        this.setState({loading:true})
        const apiURL="http://192.168.56.1:3000/DATA"
        fetch(apiURL).then((res)=>res.json())
        .then((resJson)=>{
            this.setState({
                loading:false,
                data:resJson,
                fullData:resJson
        })
        })
        .catch(error=>{
            this.setState({error,loading:false})
        })
    }, 250)
    renderFooter=()=>{
        if(!this.state.loading) return null
        return (
        <View style={{paddingVertical:20,boderTopWidth:1,borderColor:"red"}}>
            <ActivityIndicator animating size="large"/>
        </View>
        )
    }
    //rerder list từ điển
    _renderItemSearch= ({item,index}) =>{
        const {navigate} = this.props.navigation;
        return(       
            <ListItem avatar >
                <Body>
                    <Text style={{color:'#041700', fontSize:14}} >{item.nameFr} {item.API}</Text>
                    <Text style={{color:'#4c6148',fontSize:14}} >{item.nameVn}</Text>  
                </Body>
                <Right>
                    <Icon name="ios-search" style={{fontSize: 20, color: '#136e02'}} 
                            onPress={() => navigate('detailSearch', item)}  />
                </Right>
            </ListItem>                                 
        );
    }
    //xử lý function tra từ
    handleSearch =(text)=>{
        const formatedQuery = text.toLowerCase() //cho về kí tự thường
        const data= _.filter(this.state.fullData, search=>{ //đổ dữ liệu vào mảng fullData
            if(search.nameFr.includes(formatedQuery)){
                return true
            }
            return false
        })
        this.setState({data,query:text})
    }
     _renderItemSearch= ({item}) =>{
        const {navigate} = this.props.navigation;
        return(       
            <View> 
                    <Text style={{color:'#041700', fontSize:14}} >{item}</Text> 
                {/* <Right>
                    <Icon name="ios-search" style={{fontSize: 20, color: '#136e02'}} 
                            onPress={() => navigate('detailSearch', item)}  />
                </Right> */}
            </View>                                 
        );
    }
  render() {
    return (
        <Container>
            <SearchBar
                lightTheme 
                inputStyle={{backgroundColor:'white',fontSize:15,marginTop:5}}
                containerStyle={{backgroundColor:'#97f086'}}
                inputContainerStyle={{backgroundColor:'white',borderRadius:30,height:30}}
                placeholder="Tra từ Pháp sang Việt"
                onChangeText={this.handleSearch}
                value={this.state.search}
            />
            <List style={{backgroundColor:'#a7f299'}}>
                <SectionList
                    sections={this.state.data}
                    keyExtractor={(item,index)=>index.toString()}
                    renderItem={this._renderItemSearch}
                    renderSectionHeader={({section})=>(
                        <View>
                            <Text>{section.nameFr} {section.API}</Text>
                        </View>
                    )}
                />

            </List>         
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  }
});

export default SettingScreen;
