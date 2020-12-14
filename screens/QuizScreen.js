
import React, { Component } from "react";
import { StyleSheet, Text, View,Button } from 'react-native'
import QuizList from '../components/QuizList';

export default function QuizScreen(){
  return (
    <View style={styles.container}>
      <QuizList/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});