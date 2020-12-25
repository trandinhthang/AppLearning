import React from 'react'
import {View,Text} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

interface QuestionProps{
    questionNr: number;
    question: string;
}

const QuizQuestion = ({questionNr,question}: QuestionProps) => {
    return (
        <View style={{height:'25%',borderRadius:18,borderColor:'white',borderWidth:2,backgroundColor:'#00add4'}}> 
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingLeft:10,paddingRight:10}}>
                <View style={{paddingLeft:5}}>
                    <Text style={{color:'white',fontSize:15}}>
                    Question {questionNr}
                    </Text>
                </View>
                <Ionicons name='md-snow-sharp' color='white' size={20}/>
            </View>   
            <View style={{alignItems:'center',paddingTop:10,padding:15,bottom:5}}>
                <Text style={{color:'white',textAlign:'center',fontSize:18,fontWeight:'bold'}}>
                    {question}
                </Text>
            </View>         
        </View>
    )
}
export default QuizQuestion;
