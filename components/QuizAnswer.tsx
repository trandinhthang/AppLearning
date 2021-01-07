import React,{Fragment,useState} from 'react';
import {View,Text, Modal} from 'react-native';

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
        <View style={{height:'50%',flexDirection:'row',flexWrap:'wrap'}}>
            {   answers.map((answer, key)=>(
                    <Fragment key={answer}>
                        <QuizButton {...{key,answer}} 
                            correct= {userAnswer?.correctAnswer === answer}
                            disabled={userAnswer ?  true: false }
                            onPress={ () => {
                                setAnswer.current = answer; 
                                checkAnswer();                                                    
                        }}/> 
                    </Fragment>
            ))} 
                
        </View>
    )
}
export default QuizAnswer;