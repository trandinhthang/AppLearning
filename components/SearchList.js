import React, { Component } from "react";
import {  FlatList,ActivityIndicator,View,TouchableOpacity} from "react-native";
import { Container, Header, Item, Input, Icon,
        List, ListItem, Left, Body, 
        Right, Text
} from 'native-base';
import { SearchBar } from 'react-native-elements';
import _ from 'lodash';

export default class SearchHome extends Component {
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
        const apiURL="http://my-json-server.typicode.com/trandinhthang/jsonDictionary/search"
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
            <View style={{height:480,width:"100%",backgroundColor:"#afc6f0",marginTop:130}}>
                <ActivityIndicator size="small" color="#0000ff" />
            </View>
        )
    }
    //rerder list từ điển
    _renderItemSearch= ({item,index}) =>{
        const {navigate} = this.props.navigation;
        return(   
            <ListItem avatar >                                               
                <Left>
                    <Icon name="ios-search" style={{fontSize: 20, color: '#0208c4'}} 
                            onPress={() => navigate('detailSearch', item)}  />
                </Left>

                <Body>
                    <TouchableOpacity onPress={() => navigate('detailSearch', item)} >
                        <Text style={{color:'#041700', fontSize:14}} >{item.nameFr} {item.IPA}</Text> 
                        <Text>{item.data.map((item,index)=>
                            <Text style={{color:'#4c6148',fontSize:14}} key={index}>‣{item} </Text>)}
                        </Text>
                    </TouchableOpacity>
                </Body>
                <Right>
                    <Icon name="ios-rocket-outline" style={{fontSize: 20, color: '#0208c4'}} 
                            onPress={() => navigate('detailSearch', item)}  />
                </Right>                                   
            </ListItem>          
                                       
        );
    }
    //xử lý function tra từ
    handleSearch =(text)=>{
        const formatedQuery = text.toLowerCase() //cho về kí tự thường
        const data= _.filter(this.state.fullData, search=>{ //lọc dữ liệu vào mảng fullData
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
            <SearchBar
                lightTheme 
                inputStyle={{backgroundColor:'white',fontSize:15,marginTop:0}}
                containerStyle={{backgroundColor:'#afc6f0'}}
                inputContainerStyle={{backgroundColor:'white',borderRadius:30,height:30}}
                placeholder="Tra từ Pháp sang Việt"
                onChangeText={this.handleSearch}
                value={this.state.search}
            />
            {/* <Header searchBar rounded>
                <Item>
                    <Icon name="ios-search" />
                    <Input placeholder="Tra từ " onChangeText={this.handleSearch} />
                </Item>
            </Header> */}
            
            <List style={{backgroundColor:'#afc6f0',marginBottom:48}}>
                <FlatList
                    showsVerticalScrollIndicator={false}
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