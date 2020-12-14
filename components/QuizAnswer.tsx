import React,{Fragment} from 'react';
import {View,Text} from 'react-native';

import QuizButton from './QuizButton';
import {AnswerObject} from './QuizList'

interface AnswerProps{
    answers: string;
    setAnswer: any;
    checkAnswer: () => void;
    userAnswer: AnswerObject | undefined;
}

function QuizAnswer ({answers,setAnswer,checkAnswer,userAnswer}: AnswerProps ) {
    return (
        <View style={{flexDirection:'column',alignItems:'center',marginTop:15,paddingTop:14,
                    paddingHorizontal:24.5,backgroundColor:'yellow'}}>
            {
                answers.map((answer, key)=>(
                    <Fragment key={answer}>
                        <QuizButton {...{key,answer}} 
                            correct= {userAnswer?.correctAnswer === answer}
                            disabled={userAnswer ?  true: false }
                            onPress={ () => {
                                setAnswer.current = answer; 
                                checkAnswer()
                        }}
                        />  
                    </Fragment>
                ))
            }          
        </View>
    )
}
export default QuizAnswer;