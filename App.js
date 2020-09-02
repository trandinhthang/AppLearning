import 'react-native-gesture-handler';
import{
    View,
    Text
} from 'react-native';
import  React,{Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigator from './AppNavigator';

export default class App extends Component {
    render(){
        return (
            <AppNavigator/>
        );
    }
}

