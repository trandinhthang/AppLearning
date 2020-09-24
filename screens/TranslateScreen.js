import React,{Component} from 'react';
import {ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TranslateList from '../components/TranslateList';

export default function TranslateScreen() {
  return (
    <ScrollView style={{backgroundColor:"#c2bebe"}}>     
     <TranslateList />
    </ScrollView>
  );
}
