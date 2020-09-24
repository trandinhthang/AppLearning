import React,{Component} from 'react';
import {ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GrammarList from '../components/GrammarList';

export default function Test({ navigation }) {
  return (   
    <GrammarList/>
      
  );
}
