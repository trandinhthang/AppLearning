import * as React from 'react';
import { Component } from 'react';
import { View, Text,Image,TextInput ,ToastAndroid} from 'react-native';
import { Container, Header, Content, Form, Item, Label, Button, Textarea } from 'native-base';

import {StyleSheet} from 'react-native';

import * as firebase from 'firebase';
import { firebaseConfig } from '../config';
import { ScrollView } from 'react-native-gesture-handler';
import { ImageBackground } from 'react-native';
import Home from "../assests/images/homefrance.png";
import Styles from '../styles/Styles';
import Entypo from 'react-native-vector-icons/Entypo';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default class FeedbackScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            text: "",
            myList: []

        }
    }
    componentDidMount() {
        const myitems = firebase.database().ref("myFeedback");
        myitems.on("value", datasnap => {
            console.log(datasnap.val())
        })

    }
    saveItem() {
        const today = new Date();
        const date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

        const myFeedback = firebase.database().ref("myFeedback");
        if (this.state.text.length > 10 && this.state.text.length < 50) {
            myFeedback.push().set({
                email: this.state.email,
                text: this.state.text,
                time: date
            })
            this.setState({ email: "" });
            this.setState({ text: "" });
            ToastAndroid.show("Phản hồi thành công !", ToastAndroid.SHORT);
        } else {
            ToastAndroid.show("Vui lòng nhập phản hồi !", ToastAndroid.SHORT);
        }

    }

    render() {
        return (
             <ScrollView showsVerticalScrollIndicator={false} >
                
                 <View style={Styles.viewInput}>
                    <TextInput placeholder="Email !" 
                    placeholderTextColor="#239dad" 
                    style={{ fontWeight: 'bold', fontSize: 13, width: 255 }} 
                    value={this.state.email}
                    onChangeText={(email) => this.setState({ email })} 
                    />
                    <Entypo name='paper-plane' color='#239dad' size={16} />
                </View>
                
                 <View style={Styles.viewInput2}>
                    <TextInput placeholder="Gõ phản hồi tại đây !" 
                    placeholderTextColor="#239dad" style={{ fontWeight: 'bold', fontSize: 13, width: 255 }} 
                    value={this.state.text}
                    onChangeText={(text) => this.setState({ text })}
                    numberOfLines = {5}
                    multiline = {true}
                    />
                    
                    <Entypo name='paper-plane' color='#239dad' size={16} />
                </View>
                <View style={{margin:20}}>
                <Button style={{ backgroundColor: 'coral', width:'80%',margin:30 }} onPress={() => this.saveItem()}>
                        <Text style={{ color: "white" ,left:'300%'}}>Gửi góp ý</Text>
                    </Button>
                </View>

            </ScrollView>

           
        )
    }
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 300,
        height: 150,
        marginVertical:10
    },
    textTitle: {
        color: '#fc4c1c',
        fontSize: 20,
        marginVertical: 10
    },
    textBody: {
        fontSize: 16
    }
    

})