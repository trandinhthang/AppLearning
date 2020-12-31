import React from 'react'
import {View,Text} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

interface QuestionProps{
    questionNr: number;
    question: string;
    correct: boolean;
}

const QuizQuestion = ({questionNr,question}: QuestionProps,correct) => {
    return (
        <View style={{height:'25%',borderRadius:18,borderColor:'white',borderWidth:2,backgroundColor:'#00add4'}}> 
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingLeft:10,paddingRight:10}}>
                <View style={{paddingLeft:5,paddingTop:5}}>
                    <Text style={{color:'white',fontSize:15}}>
                    Question {questionNr}
                    </Text>
                </View>
                <Ionicons name='ios-planet-sharp' size={12} color='white' style={{paddingTop:5}} > 
                    <Text style={{fontSize:16,color:'white',fontWeight:'bold'}}>
                        {questionNr}/10
                    </Text>
                </Ionicons>   
            </View>   
            <View style={{alignItems:'center',paddingTop:15,padding:15,bottom:5}}>
                <Text style={{color:'white',textAlign:'center',fontSize:18,fontWeight:'bold'}}>
                    {question}
                </Text>
            </View>         
        </View>
    )
}
export default QuizQuestion;
