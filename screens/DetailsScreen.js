import React,{Component} from 'react';
import { Button, View, Text,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoryList from "../components/CategoryList";

// export default class DetailsScreen extends Component{
//   render(){
//       return(
//       <View>
//           <Text>Category</Text>
//       </View>
//       );
//   }
// }
// const styles=StyleSheet.create({
//   container:{
//       flex:1,
//       alignItems:'stretch',
//       backgroundColor:'#FFF',
//       justifyContent:'center',
//       paddingLeft:16,
//       paddingRight:16,
//   }
// });
export default function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Translate')}
      />
    </View>
  );
}
