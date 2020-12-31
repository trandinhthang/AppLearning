
import React, { Component } from "react";
import { StyleSheet, Text, View,Button } from 'react-native'
import QuizList from '../components/QuizList';

export default function QuizScreen({route}){
  const { itemId } = route.params;
  return (
    <View style={styles.container}>
      <Text>{itemId}</Text>
      <QuizList/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});