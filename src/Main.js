// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import Splash from './Splash';
import {useEffect} from 'react';
import App from '../App';

const Stack = createStackNavigator();

function Main() {
    useEffect(() => {
        SplashScreen.hide();
    });
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}
            >
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="App" component={App} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Main;
