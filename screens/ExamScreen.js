
import React, { Component } from "react";
import { StyleSheet, Text, View,Button } from 'react-native'
import ExamList from '../exam/ExamList';

export default function QuizScreen(){
  return (
    <View style={styles.container}>
      <ExamList/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});
