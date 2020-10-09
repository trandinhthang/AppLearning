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
