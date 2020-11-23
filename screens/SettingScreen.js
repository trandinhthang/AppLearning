// import React, { Component } from "react";
// import { Image } from 'react-native';
// import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
// const cards = [
//   {
//     text: 'Card One',
//     name: 'One',
//     image: require('../assests/images/books.png'),
//   }
// ];

// class SettingScreen extends Component {
   
//   render() {
//     return (
//        <Container>
//         <View>
//           <DeckSwiper
//             dataSource={cards}
//             renderItem={item =>
//               <Card style={{ elevation: 3 }}>
//                 <CardItem>
//                   <Left>
//                     <Thumbnail source={item.image} />
//                     <Body>
//                       <Text>{item.text}</Text>
//                       <Text note>NativeBase</Text>
//                     </Body>
//                   </Left>
//                 </CardItem>
//                 <CardItem cardBody>
//                   <Image style={{ height: 300, flex: 1 }} source={item.image} />
//                 </CardItem>
//                 <CardItem>
//                   <Icon name="heart" style={{ color: '#ED4A6A' }} />
//                   <Text>{item.name}</Text>
//                 </CardItem>
//               </Card>
//             }
//           />
//         </View>
//       </Container>
//     );
//   }
// }


// export default SettingScreen;

import React, { Component } from "react";
import { StyleSheet, Text, View,Button } from 'react-native'


const data=[
  {
    "name":"Thang",
    "date":"20/11"
  },
  {
    "name":"Tran",
    "date":"28/11",
  }
]
export default function SettingScreen(){
  return (
    <View style={styles.container}>
       <Text>TTT</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white"
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent"
  }
});