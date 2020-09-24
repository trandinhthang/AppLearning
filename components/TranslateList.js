import React, {Component} from 'react';
import {
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  Input,
  View,
  Button
} from 'react-native';
import Styles from '../styles/Styles';
import AudioTranslate from './AudioTranslate';

const FranceVietNam = require('../json/France_VietNam.json')
const VietNamFrance = require('../json/VietNam_France.json')
export default class TranslateList extends Component {
  constructor(props) {
      super(props)
      this.state = {
          input: '',
          output: '',
          from:'Français',
          to:'Vietnamese'
      }
  }
  render() {
    return (
      <ScrollView style={Styles.parent}   >  
        <Text style={Styles.text1} >
          {this.state.from} --- {this.state.to}
        </Text>
        <TextInput
          placeholder="Tìm kiếm/Chercher"
          style={Styles.textinput}
          onChangeText={(e) => this.setState({input: e})}
          onSubmitEditing={(e) => this.showMeaning(e) }
        />  
        <View style={Styles.fixToText}>
          <Button 
            title="Việt-Pháp"
            color="#fc4c1c"
            onPress={(value) => this.switchLanguage(value)} 
            value={this.state.Vietnam}
          />
          <Button
            title="Pháp-Việt"
            color="#fc4c1c"
            onPress={(value) => this.switchLanguage1(value)} 
            value={this.state.France}
          />
        </View>
        <Text  style={Styles.text1}>{this.state.to}</Text> 
        <Text style={Styles.text3}>{ this.state.output } <AudioTranslate /> </Text>  
      </ScrollView>
    )
  }
  switchLanguage(Vietnam) {
    this.state.from = 'Vietnamese'
    this.state.to = 'Français'
    this.state.Vietnam = false
    this.setState({Vietnam})
  }
  switchLanguage1(France) {
    this.state.from = 'Français'
    this.state.to = 'Vietnamese'
    this.state.France = true
    this.setState({France})
  }
  showMeaning(e) {
    const input = this.state.input
    const meaning = input in FranceVietNam ?
        FranceVietNam[input] :
        null
    const meaningDe = input in VietNamFrance ?
        VietNamFrance[input] :
        null
    if (meaning) {
        this.switchLanguage1(false)
    }
    if (meaningDe) {
        this.switchLanguage(true)
    }
    this.setState({output: meaning || meaningDe || 'Not Found'})
  }
}
