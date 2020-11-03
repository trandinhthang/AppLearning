import React, { Component } from "react";
import {  FlatList,ActivityIndicator,View,TouchableOpacity} from "react-native";
import { Container, Header, Item, Input, Icon,
        Content, List, ListItem, Left, Body, 
        Right, Thumbnail, Text
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
        const apiURL="http://192.168.56.1:3000/search"
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
                <Left>
                    <Icon name="ios-search" style={{fontSize: 20, color: '#0208c4'}} 
                            onPress={() => navigate('detailSearch', item)}  />
                </Left>

                <Body>
                    <TouchableOpacity onPress={() => navigate('detailSearch', item)} >
                        <Text style={{color:'#041700', fontSize:14}} >{item.nameFr} {item.IPA}</Text> 
                        <Text style={{color:'#4c6148',fontSize:14}} >{item.data}</Text>      
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
        const data= _.filter(this.state.fullData, search=>{ //đổ dữ liệu vào mảng fullData
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
                inputStyle={{backgroundColor:'white',fontSize:15,marginTop:5}}
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