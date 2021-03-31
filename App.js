
import * as React from 'react';
import { View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/AntDesign';
import IconT from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';

import {DrawerContent}  from './screens/DrawerContent';
import HomeScreen from "./screens/HomeScreen";
import TranslateScreen from "./screens/TranslateScreen";
import VocabularyScreen from "./screens/VocabularyScreen";
import ExamScreen from "./screens/ExamScreen";
import WordScreen from "./screens/WordScreen";
import TestScreen from './screens/Test';
import NetworkScreen from './screens/Network'

import QuizList from "./components/QuizList";

import SearchHome from './components/SearchList';
import SearchDetails from './components/SearchDetails';
import SearchDeTwo from './components/SearchDeTwo';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const QuizStack = createStackNavigator();
const SearchStack = createStackNavigator();
const WordStack = createStackNavigator();
const TestStack = createStackNavigator();
const NetworkStack = createStackNavigator();
//Stack Screen Home
function HomeStackScreen({navigation}) {
  return (
    <HomeStack.Navigator initialRouteName="Home" screenOptions={{
      headerTitleAlign:'center',
      headerTintColor: '#fff',//màu nút mũi tên
      headerTitleStyle: {
      fontSize: 20,//nét chữ
      },
    }}>
      <HomeStack.Screen name="Home" component={HomeScreen}  options={{
        headerTitle: "F-Bonjour",
        headerStyle: {
          backgroundColor: '#52a5f2',//màu nền
          "height": 40,
        },
        headerLeft: () => (
        <Icon.Button
          name="menuunfold"
          size={20}
          color="white"
          backgroundColor="#52a5f2"
          onPress={() => navigation.openDrawer()}
        />      
        ),
        headerRight: () => (
        <IconT
          style={{marginRight:8}}
          name="logo-react"
          size={30}
          color="white"
        />         
        ),
      }}/>
      <HomeStack.Screen name="Translate" component={TranslateScreen} options={{
        headerTitle: "Translate",
        headerStyle: {
          backgroundColor: '#005eff',//màu nền
          "height": 40,
        },
        headerRight: () => (
        <MaterialCommunityIcons
          style={{marginRight:8}}
          name="google-translate"
          size={30}
          color="white"
        />      
        ),
      }}/>
      <HomeStack.Screen name="Vocabulary" component={VocabularyScreen} options={{
        headerTitle: "Vocabulaire",
        headerStyle: {
          backgroundColor: '#ff8000',//màu nền
          "height": 40,
        },
        headerRight: () => (
        <Foundation
          style={{marginRight:8}}
          name="book-bookmark"
          size={30}
          color="white"
        />      
        ),
      }}/>
      <HomeStack.Screen name="Exam" component={QuizList} options={{
        headerTitle: "Entrainement",
        headerStyle: {
          backgroundColor: '#0aa4bf',//màu nền
          "height": 40,
        },
        headerTintColor: '#fff',
        headerRight: () => (
        <Icon
          style={{marginRight:8}}
          name="star"
          size={30}
          color="white"
        />      
        ),
      }}/>
      <WordStack.Screen name="Word" component={WordScreen} options={{
        headerTitle: "Remplir Mot",
        headerStyle: {
          backgroundColor: 'green',//màu nền
          "height": 40,
        },
        headerTintColor: '#fff',
        headerRight: () => (
        <IconT
          style={{marginRight:8}}
          name="md-school"
          size={30}
          color="white"
        />      
        ),
      }}/>
      <TestStack.Screen name="Test" component={TestScreen} options={{
        headerTitle: "Luyện phát âm",
        headerStyle: {
          backgroundColor: 'green',//màu nền
          "height": 40,
        },
        headerTintColor: '#fff',
        headerRight: () => (
        <IconT
          style={{marginRight:8}}
          name="md-school"
          size={30}
          color="white"
        />      
        ),
      }}/>
      <NetworkStack.Screen name="Network" component={NetworkScreen} options={{
        headerTitle: "Network",
        headerStyle: {
          backgroundColor: 'green',//màu nền
          "height": 40,
        },
        headerTintColor: '#fff',
        headerRight: () => (
        <IconT
          style={{marginRight:8}}
          name="md-school"
          size={30}
          color="white"
        />      
        ),
      }}/>
    </HomeStack.Navigator>
  );
}
/*Stack Screen Quiz
function QuizStackScreen({navigation}) {
  return (
    <QuizStack.Navigator screenOptions={{
      headerTitleAlign:'center',
      headerStyle: {
      backgroundColor: '#0aa4bf',//màu nền
      "height": 40,
      },
      headerTintColor: '#fff',//màu nút mũi tên
      headerTitleStyle: {
      fontWeight: '100',//nét chữ
      },
    }}
    >
    <QuizStack.Screen options={{
        headerTitle: "Quiz",
        headerLeft: () => (
        <Icon.Button
          name="menuunfold"
          size={20}
          color="white"
          backgroundColor="#0aa4bf"
          onPress={() => navigation.openDrawer()}
        />      
        ),
        headerRight: () => (
        <Icon
          style={{margin:8}}
          name="star"
          size={30}
          color="white"
        />  
        ),
      }}  
      name="Quiz"
      component={QuizScreen}
    />
    </QuizStack.Navigator>
  );
}*/
//Stack Screen Search
function SearchStackScreen({navigation}) {
  return (
    <SearchStack.Navigator screenOptions={{
      headerTitleAlign:'center',
      headerStyle: {
        backgroundColor: '#005eff',//màu nền 23d400
        "height": 40,
      },
      headerTintColor: '#fff',//màu nút mũi tên
      headerTitleStyle: {
        fontFamily:"Vaptimi",
        fontSize: 20,//nét chữ//nét chữ
      },
      headerRight: () => (
      <MaterialCommunityIcons
        style={{margin:8}}
        name="shield-search"
        size={30}
        color="white"
      />  
      ),
    }}>
      <SearchStack.Screen options={{
          headerLeft: () => (
          <Icon.Button
            name="menuunfold"
            size={20}
            color="white"
            backgroundColor="#005eff"
            onPress={() => navigation.openDrawer()}
          />      
          ),
        }}  name="Recherche" component={SearchHome}
      />
      <SearchStack.Screen name="detailSearch" component={SearchDetails} options={{headerTitle: "Recherche",}} 
      />
      <SearchStack.Screen name="deTwoSearch" component={SearchDeTwo} options={{headerTitle: "Recherche",}} 
      />
    </SearchStack.Navigator>
  );
}
//Tab Screen 
function TabsScreen(){
  return(
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name ==='Chính') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          /*} else if (route.name === 'Quiz') {
            iconName = focused ? 'md-book-sharp' : 'md-book-outline';*/
          }  else if (route.name === 'Từ điển') {
            iconName = focused ? 'search-outline' : 'search-outline';
          }
          return <IconT name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#fc4c1c',
        inactiveTintColor: '#52a5f2',

    }}>
      <Tab.Screen name="Chính" component={HomeStackScreen} />
      {/* <Tab.Screen name="Từ điển" component={SearchStackScreen}  />     */}
    </Tab.Navigator>
  )
}
const App = () =>{
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {... props}/>} >
        <Drawer.Screen name="Home" component={TabsScreen} />
      </Drawer.Navigator>    
    </NavigationContainer>
  );
}
export default App;
