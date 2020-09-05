// import React,{Component} from 'react';
// import { Button, ViewButton, 
//     View, 
//     Text,
//     FlatList ,
//     StyleSheet,
//     ScrollView 
// } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';

// import HomeScreen from "./screens/HomeScreen";
// import TranslateScreen from "./screens/TranslateScreen";
// import VocabularyScreen from "./screens/VocabularyScreen";
// import GrammarScreen from "./screens/GrammarScreen";
// import Icon from 'react-native-vector-icons/AntDesign';

// const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

// function AppNavigator({navigation}){
//   return(
// <Stack.Navigator initialRouteName="Home" screenOptions={{
//           headerTitleAlign:'center',
//           headerStyle: {
//           backgroundColor: '#fc4c1c',//màu nền
//           "height": 40,
//           },
//           headerTintColor: '#fff',//màu nút mũi tên
//           headerTitleStyle: {
//           fontWeight: '100',//nét chữ
//       },
//   }}>
//   <Stack.Screen name="Home" options={{
//       headerTitle: "Trang chủ",
//       headerLeft: () => (
//       <Icon.Button
//         name="menuunfold"
//         size={20}
//         color="white"
//         backgroundColor="#fc4c1c"
//         onPress={() => navigation.openDrawer()}
//       />      
//       ),
//     }} component={HomeScreen} /> 
//   <Stack.Screen name="Translate"  options={{ title: 'Dịch Từ' }} component={TranslateScreen} /> 
//   <Stack.Screen name="Vocabulary" options={{ title: 'Từ Vựng' }} component={VocabularyScreen} /> 
//   <Stack.Screen name="Grammar" options={{ title: 'Ngữ Pháp' }} component={GrammarScreen} /> 
// </Stack.Navigator>

//   )
// }
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="AppNavigator"  drawerContentOptions={{
//         activeTintColor: '#fc4c1c',
//         activeBackgroundColor:'white',
//         itemStyle: { marginVertical: 5 }
//       }} drawerStyle={{backgroundColor: '#e1e1e6'}}
//       >
//         <Drawer.Screen name="Home"  component={AppNavigator} />
//         <Drawer.Screen name="Dịch từ"  component={TranslateScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/AntDesign';
import HomeScreen from './screens/HomeScreen';
import TranslateScreen from './screens/TranslateScreen';
import VocabularyScreen from './screens/VocabularyScreen';
import GrammarScreen from './screens/GrammarScreen';

const HomeStack = createStackNavigator();
const TranslateStack = createStackNavigator();
const VocabularyStack = createStackNavigator();
const GrammarStack = createStackNavigator();
const Drawer = createDrawerNavigator();
//gọi từ screen
const HomeStackScreen =({navigation})=>(
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" options={{
          headerTitleAlign:'center',
          headerTitle: "Trang chủ",
          headerLeft: () => (
          <Icon.Button
            name="menuunfold"
            size={20}
            color="white"
            backgroundColor="#fc4c1c"
            onPress={() => navigation.openDrawer()}
          />      
          ),
        }}  component={HomeScreen}  />
      </HomeStack.Navigator> 
)
const TranslateStackScreen =({navigation})=>(
      <TranslateStack.Navigator >
         <TranslateStack.Screen name="Translate" component={TranslateScreen} /> 
      </TranslateStack.Navigator> 
)
const VocabularyStackScreen =({navigation})=>(
      <VocabularyStack.Navigator>
         <VocabularyStack.Screen name="Vocabulary" component={VocabularyScreen} /> 
      </VocabularyStack.Navigator> 
)
const GrammarStackScreen =({navigation})=>(
      <GrammarStack.Navigator>
         <GrammarStack.Screen name="Grammar" component={GrammarScreen} /> 
      </GrammarStack.Navigator> 
)
//gọi từ stack screen
const App =()=>{
  return(
    <NavigationContainer >
     <Drawer.Navigator initialRouteName="Home" screenOptions={{
          headerTitleAlign:'center',
          headerStyle: {
          backgroundColor: '#fc4c1c',//màu nền
          "height": 40,
          },
          headerTintColor: '#fff',//màu nút mũi tên
          headerTitleStyle: {
          fontWeight: '100',//nét chữ
        },
      }}> 
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Translate" component={TranslateStackScreen} />
        <Drawer.Screen name="Vocabulary" component={VocabularyStackScreen} />
        <Drawer.Screen name="Grammar" component={GrammarStackScreen} />
      </Drawer.Navigator> 
    </NavigationContainer>
  )
}
export default App;

