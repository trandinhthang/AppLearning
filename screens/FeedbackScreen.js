import * as React from 'react';
import { Component } from 'react';
import { View, Text, } from 'react-native';
import { Container, Header, Content, Form, Item, Label, Button, Textarea } from 'native-base';
import { TextInput } from 'react-native-paper';

import * as firebase from 'firebase';
import { firebaseConfig } from '../config';


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
        if (this.state.text.length > 10 || this.state.text.length < 50) {
            myFeedback.push().set({
                email: this.state.email,
                text: this.state.text,
                time: date
            })
            this.setState({ email: "" });
            this.setState({ text: "" });
            alert("Phản hồi thành công")
        } else {
            alert("Vui lòng nhập nội dung từ 10-50 kí tự")
        }

    }

    render() {
        return (

            <View style={{ backgroundColor: 'oldlace', height: '100%' }}>
                <Label style={{fontWeight:'bold', color:'#f02005', fontSize:30, textAlign:'center'}}> 
                    Xin chào
                </Label>
                <Label style={{fontWeight:'bold', color:'#f02005', fontSize:20, textAlign:'center',margin:10}}> 
                   Hãy gửi phản hồi của các bạn
                </Label>
                <View style={{margin:20}}>
                    <TextInput 
                        style={{backgroundColor:'white'}}
                       selectionColor="orange"
                        mode='outlined'
                        style={{width:'100%'}}
                        label="Email"
                        value={this.state.email}
                        onChangeText={(email) => this.setState({ email })} />
                    <TextInput 
                      
                        mode='outlined'
                        style={{width:'100%',height:100}}
                        label="Nội dung"
                        value={this.state.text}
                        onChangeText={(text) => this.setState({ text })} />

                    <Button style={{ backgroundColor: 'coral', width:'80%',margin:30 }} onPress={() => this.saveItem()}>
                        <Text style={{ color: "white" ,left:'300%'}}>Gửi góp ý</Text>
                    </Button>
                </View>
            </View>



        )
    }
}

