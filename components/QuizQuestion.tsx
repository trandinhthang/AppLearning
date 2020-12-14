import React from 'react'
import {View,Text} from 'react-native';

interface QuestionProps{
    questionNr: number;
    question: string;
}

const QuizQuestion = ({questionNr,question}: QuestionProps) => {
    return (
        <View style={{flexDirection:'row',alignItems:'center',paddingRight:10, paddingBottom:10, paddingTop:10, backgroundColor:'green'}}>
            <Text style={{color:'white',fontSize:16,marginRight:10}}>
                {questionNr}
            </Text>
            <Text style={{color:'white',textAlign:'left',fontSize:16,marginRight:10}}>
                {question}
            </Text>
        </View>
    )
}
export default QuizQuestion;
