import React,{Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import loupe from "../assests/loupe.png";
import TranslateList from '../components/TranslateList';

export default function TranslateScreen({ navigation }) {

  return (
    <TranslateList/>
  );
}
