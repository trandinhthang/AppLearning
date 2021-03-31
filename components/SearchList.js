import React, { Component } from "react";
import {  FlatList,ActivityIndicator,View,TouchableOpacity} from "react-native";
import { Container, Header, Item, Input, Icon,
        List, ListItem, Left, Body, 
        Right, Text
} from 'native-base';
import { SearchBar } from 'react-native-elements';
import _ from 'lodash';

const searchList = [
  {
    "id": 1,
    "nameFr": "absent",
    "data": [
      "vắng mặt",
      "thiếu"
    ],
    "IPA": "[apsɑ̃]",
    "url": "https://www.collinsdictionary.com/sounds/hwd_sounds/FR-W0000210.mp3",
    "gramma": "Danh từ giống đực",
    "examFr1": "La gaieté est absente de cette maison",
    "examVn1": "Căn nhà này thiếu sự vui tươi",
    "examFr2": "Il est absent de son bureau",
    "examVn2": "Ông ta không có mặt ở văn phòng",
    "antonym": [
      "Présent",
      "Có mặt, hiện tại, này",
      " Dire du mal des absents",
      " Nói xấu những người vắng mặt"
    ],
    "image": ""
  },
  {
    "id": 2,
    "nameFr": "aller",
    "data": [
      "đi"
    ],
    "IPA": "[ale]",
    "url": "https://www.collinsdictionary.com/sounds/hwd_sounds/FR-W0036840.mp3",
    "gramma": "Nội động từ",
    "examFr1": "Aller à pied /à cheval /en voiture",
    "examVn1": "Đi bộ/đi ngựa/đi xe ô-tô",
    "examFr2": "Allez plus vite !",
    "examVn2": "Đi nhanh lên!",
    "antonym": [
      "Rester",
      "Còn lại, ở lại",
      " Château dont il ne reste que des ruines",
      " Lâu đài chỉ còn lại những tàn tích"
    ],
    "image": "https://cdn.pixabay.com/photo/2017/09/03/17/26/woman-2711279_960_720.jpg"
  },
  {
    "id": 3,
    "nameFr": "année",
    "data": [
      "năm",
      "tuổi"
    ],
    "IPA": "[ane]",
    "url": "https://www.collinsdictionary.com/sounds/hwd_sounds/FR-W0101210.mp3",
    "gramma": "Danh từ giống cái",
    "examFr1": "Etudiant de deuxième année",
    "examVn1": "Sinh viên năm hai",
    "examFr2": "Elle est dans sa dix-huitième année",
    "examVn2": "Cô ta đang tuổi mười tám",
    "antonym": [],
    "image": ""
  },
  {
    "id": 4,
    "nameFr": "aujourd'hui",
    "data": [
      "hôm nay",
      "ngày nay",
      "đời nay"
    ],
    "IPA": "[oʒuʀdɥi]",
    "url": "https://www.collinsdictionary.com/sounds/hwd_sounds/fr_aujourd_hui.mp3",
    "gramma": "Trạng từ",
    "examFr1": "Il doit partir dès aujourd'hui",
    "examVn1": "Nó phải ra đi ngay ngày hôm nay",
    "examFr2": "Les jeunes d'aujourd'hui",
    "examVn2": "Thanh niên thời nay",
    "antonym": [],
    "image": ""
  },
  {
    "id": 5,
    "nameFr": "avion",
    "data": [
      "máy bay",
      "phi cơ"
    ],
    "IPA": "[avjɔ̃]",
    "url": "https://www.collinsdictionary.com/sounds/hwd_sounds/FR-W0002020.mp3",
    "gramma": "Danh từ giống đực",
    "examFr1": "Avion de lutte contre les incendies",
    "examVn1": "Máy bay chữa cháy",
    "examFr2": "Avion à réaction",
    "examVn2": "Máy bay phản lực",
    "antonym": [],
    "image": "https://cdn.pixabay.com/photo/2017/09/06/12/55/virgin-2721333_960_720.jpg"
  },
  {
    "id": 6,
    "nameFr": "croître ",
    "data": [
      "mọc",
      "sinh trưởng"
    ],
    "IPA": "[kʀwatʀ]",
    "url": "https://www.collinsdictionary.com/sounds/hwd_sounds/fr_croitre.mp3",
    "gramma": "Động từ",
    "examFr1": "Les végétaux croissent lentement",
    "examVn1": "Cây sinh trưởng chậm",
    "examFr2": "",
    "examVn2": "",
    "antonym": [
      "Baisser",
      "Hạ thấp",
      " Baisser un tableau",
      " Hạ thấp bức tranh"
    ],
    "image": ""
  },
  {
    "id": 7,
    "nameFr": "économie",
    "IPA": "[ekɔnɔmi]",
    "data": [
      "tiết kiệm"
    ],
    "url": "https://www.collinsdictionary.com/sounds/hwd_sounds/FR-W0027870.mp3",
    "gramma": "Danh từ giống cái",
    "examFr1": "Avoir le sens de l'économie",
    "examVn1": "Có tính tiết kiệm",
    "examFr2": "",
    "examVn2": "",
    "antonym": [],
    "image": ""
  },
  {
    "id": 8,
    "nameFr": "élever",
    "IPA": "[el(ə)ve]",
    "data": [
      "chăn nuôi",
      "nuôi nấng"
    ],
    "url": "https://www.collinsdictionary.com/sounds/hwd_sounds/FR-W0010890.mp3",
    "gramma": "Động từ",
    "examFr1": "Élever des lapins",
    "examVn1": "Nuôi thỏ",
    "examFr2": "Élever un enfant",
    "examVn2": "Nuôi nấng một đứa trẻ",
    "antonym": [],
    "image": ""
  },
  {
    "id": 9,
    "nameFr": "érable",
    "IPA": "[eʀabl]",
    "data": [
      "cây thích"
    ],
    "url": "https://www.collinsdictionary.com/sounds/hwd_sounds/FR-W0052010.mp3",
    "gramma": "Danh từ giống đực",
    "examFr1": "",
    "examVn1": "",
    "examFr2": "",
    "examVn2": "",
    "antonym": [],
    "image": ""
  }
]

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