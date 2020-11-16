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

import {DrawerContent}  from './screens/DrawerContent';
import HomeScreen from "./screens/HomeScreen";
import TranslateScreen from "./screens/TranslateScreen";
import VocabularyScreen from "./screens/VocabularyScreen";
import GrammarScreen from "./screens/GrammarScreen";

import SettingScreen from "./screens/SettingScreen";

import SearchHome from './components/SearchList';
import SearchDetails from './components/SearchDetails';
import SearchDeTwo from './components/SearchDeTwo';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const SearchStack = createStackNavigator();
//Stack Screen Home
function HomeStackScreen({navigation}) {
  return (
    <HomeStack.Navigator initialRouteName="Home" screenOptions={{
      headerTitleAlign:'center',
      headerTintColor: '#fff',//màu nút mũi tên
      headerTitleStyle: {
      fontFamily:"Vaptimi",
      fontSize: 25,//nét chữ
      },
    }}>
      <HomeStack.Screen name="Home" component={HomeScreen}  options={{
        headerTitle: "F-Learn",
        headerStyle: {
          backgroundColor: '#fc0000',//màu nền
          "height": 40,
        },
        headerLeft: () => (
        <Icon.Button
          name="menuunfold"
          size={20}
          color="white"
          backgroundColor="#fc0000"
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
        // <Image style={{width:50,height:35,marginRight:5}} 
        //     source={{uri: 'https://t4.ftcdn.net/jpg/01/03/24/93/240_F_103249357_XRB7kytn7IBk6UK2bheSzwThqrlPeH42.jpg'}}
        // />         
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
        headerTitle: "Vocabulary",
        headerStyle: {
          backgroundColor: '#ff8000',//màu nền
          "height": 40,
        },
        headerRight: () => (
        <IconT
          style={{marginRight:8}}
          name="logo-apple"
          size={30}
          color="white"
        />      
        ),
      }}/>
      <HomeStack.Screen name="Grammar" component={GrammarScreen}/>
  
    </HomeStack.Navigator>
  );
}
//Stack Screen Setting
function SettingsStackScreen({navigation}) {
  return (
    <SettingsStack.Navigator screenOptions={{
      headerTitleAlign:'center',
      headerStyle: {
      backgroundColor: '#fc4c1c',//màu nền
      "height": 40,
      },
      headerTintColor: '#fff',//màu nút mũi tên
      headerTitleStyle: {
      fontWeight: '100',//nét chữ
      },
    }}
    >
    <SettingsStack.Screen options={{
        headerTitle: "Setting",
        headerLeft: () => (
        <Icon.Button
          name="menuunfold"
          size={20}
          color="white"
          backgroundColor="blue"
          onPress={() => navigation.openDrawer()}
        />      
        ),
      }}  
      name="Setting"
      component={SettingScreen}
    />
    </SettingsStack.Navigator>
  );
}
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
        fontSize: 25,//nét chữ//nét chữ
      },
      headerRight: () => (
      <IconT
        style={{margin:8}}
        name="logo-snapchat"
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
        }}  name="Search" component={SearchHome}
      />
      <SearchStack.Screen name="detailSearch" component={SearchDetails} options={{headerTitle: "Search",}} 
      />
      <SearchStack.Screen name="deTwoSearch" component={SearchDeTwo} options={{headerTitle: "Search Two",}} 
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
          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }  else if (route.name === 'Search') {
            iconName = focused ? 'search-outline' : 'search-outline';
          }
          return <IconT name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#fc4c1c',
        inactiveTintColor: 'gray',

    }}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Search" component={SearchStackScreen}  />
      <Tab.Screen name="Settings" component={SettingsStackScreen}  />
    </Tab.Navigator>
  )
}
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {... props}/>} >
        <Drawer.Screen name="Home" component={TabsScreen} />
        <Drawer.Screen name="Feedback" component={SettingsStackScreen} />
      </Drawer.Navigator>    
    </NavigationContainer>
  );
}
