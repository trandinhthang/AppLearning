import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/AntDesign';
import IconT from 'react-native-vector-icons/Ionicons';

import HomeScreen from "./screens/HomeScreen";
import TranslateScreen from "./screens/TranslateScreen";
import VocabularyScreen from "./screens/VocabularyScreen";
import GrammarScreen from "./screens/GrammarScreen";

import SettingScreen from "./screens/SettingScreen";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();
//Stack Screen Home
function HomeStackScreen({navigation}) {
  return (
    <HomeStack.Navigator initialRouteName="Home" screenOptions={{
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
      <HomeStack.Screen name="Home" component={HomeScreen}  options={{
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
      }}/>
      <HomeStack.Screen name="Translate" component={TranslateScreen}/>
      <HomeStack.Screen name="Vocabulary" component={VocabularyScreen}/>
      <HomeStack.Screen name="Grammar" component={GrammarScreen}/>
  
    </HomeStack.Navigator>
  );
}
//Stack Screen Setting
function SettingsStackScreen() {
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
        headerTitle: "Cài đặt",
        headerLeft: () => (
        <Icon.Button
          name="menuunfold"
          size={20}
          color="white"
          backgroundColor="#fc4c1c"
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
//Tab Screen 
function TabsScreen(){
  return(
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <IconT name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#fc4c1c',
        inactiveTintColor: 'gray',

    }}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Settings" component={SettingsStackScreen}  />
    </Tab.Navigator>
  )
}
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={TabsScreen} />
        <Drawer.Screen name="Feedback" component={SettingsStackScreen} />
      </Drawer.Navigator>    
    </NavigationContainer>
  );
}
