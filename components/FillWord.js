import React, { Component, useState } from 'react'
import { Text, View, TextInput,Image,TouchableOpacity, Alert, Modal} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fail from '../assests/images/checkFalse.png'
import Win from '../assests/images/checkTrue.png'

import {dataQuiz,themeQuiz} from '../json/FillWord.json'
import QuizFillWord from './QuizFillWord';

const FillWord = ({route}) => {
    const id = route.params
    console.log(`id`, id)
    const theme_ = themeQuiz.find(item => item.id === id)
    const data = dataQuiz.filter( item => item.themeId === id)
    const [step, setStep] = useState(1);
    const [activeQuiz, setActiveQuiz] = useState(0);
    const [answer, setAnswer] = useState([]);

    return (
      <View>
          { step === 1 &&  <View style={{backgroundColor:'white',height:"100%",width:"100%"}}>
            <Text style={{fontSize:17,paddingTop:10,padding:25,marginLeft:24,color:'green',fontWeight:'bold'}}> 
            {theme_.theme}
            </Text>
            <QuizFillWord
                data={data[activeQuiz]}
                onAnsUpdate={setAnswer}
                numOfQuiz={data.length}
                actQuiz={activeQuiz}
                onSetActQuiz={setActiveQuiz}
                onSetStep= {setStep}
               />
           
            <Modal animationType="slide" transparent visible={false}>
                <View style={{  flex: 1,borderRadius:20,borderWidth:2,borderColor:'green',alignItems:'center',backgroundColor: 'white',
                                justifyContent:'center',marginTop:250,marginLeft:50,marginRight:50,marginBottom:200 }}>
                <Image source={Win} style={{width:70,height:70}}/>
                <Text style={{fontSize: 20, color: 'green',fontWeight:'bold'}}>
                    Ố la la !
                </Text>
                <Text style={{fontSize: 16, color: 'green'}}>
                    Bạn đã trả lời chính xác
                </Text>
                </View>
            </Modal> 
        </View>   }
        { step === 2 && <View><Text>End</Text></View>}
      </View>

    )
}
export default FillWord;
