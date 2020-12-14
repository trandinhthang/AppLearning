import React, { useState, useEffect, Fragment, useRef } from "react";
import {  View,Text,ActivityIndicator} from "react-native";
import {  TouchableWithoutFeedback} from 'react-native-gesture-handler';

import {getQuizQuestions, Difficulty, QuestionState} from './QuizUtil';

import QuizQuestion from './QuizQuestion';
import QuizAnswer from './QuizAnswer';

import Play from 'react-native-vector-icons/Feather';


export type AnswerObject = {
  question: string;
  answer: string;
  correct:boolean;
  correctAnswer: string;
}

function QuizList(){
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [TOTAL_QUESTIONS] = useState(10);
  const [number, setNumber] = useState(0);
  const setAnswer = useRef(null);

  //Không đồng bộ
  const startQuiz = async () =>{
    setLoading(true);
    setGameOver(false);
    const newQuestions = await getQuizQuestions(
                        TOTAL_QUESTIONS,
                        Difficulty.HARD
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }
  //Check answers
  const checkAnswer = () =>{
    if(!gameOver){
      //User answer
      const answer = setAnswer.current;
      //Check if answer is corrent
      const correct = questions[number].correct_answer === answer;
      //Increment the score
      if(correct) setScore((prev) =>  prev + 1);
      //Save answer in the array of answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      };
      setUserAnswers((prev) => [...prev, answerObject])
      setTimeout(()=>{
        nextQuestion();
      },800);
    }
  };
  //Next question
  const nextQuestion = () =>{
    //Move on to the next question if not the last question
    const nextQ= number + 1;
    if(nextQ === TOTAL_QUESTIONS){
      setGameOver(true);
    }
    else{
      setNumber(nextQ);
    }
  };
  useEffect(() => {
    startQuiz();
  }, []);

  return (
    <View style={{flex:1,justifyContent:'center',position:'relative',padding:20,backgroundColor:'red'}}>
    { !loading ? <Fragment>
      <View style={{flex:1}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'black'}}>
          <Text style={{fontWeight:'bold', color:'white',  fontSize:16}}>
          Question
          </Text>
          <Text style={{fontSize:16,color:'white'}}>
          {number + 1} / {questions.length}
          </Text>
        </View>
          <Text>Score {score}</Text>
        <View>
        </View>
        {questions.length > 0 ?  
          <>
            <QuizQuestion questionNr={number+1}
                          question={questions[number].question}               
            />
            <QuizAnswer answers={questions[number].answers} 
                        {...{setAnswer, checkAnswer}}
                        userAnswer={userAnswers ? userAnswers[number] : undefined}
            />
          </>
          : null
        }  
      </View>
      <View style={{  backgroundColor:'blue',alignItems:"center",justifyContent:'center',
                      borderRadius:300,width:50,height:50,position:'absolute',bottom:20,right:20}}>
        <>
          { !gameOver && !loading && number != TOTAL_QUESTIONS -1 ?
          ( <TouchableWithoutFeedback onPress={() => nextQuestion()} >
              <Play name='arrow-right' color='white' size={30} active={true}/>
            </TouchableWithoutFeedback> ) :
          ( <TouchableWithoutFeedback onPress={() => startQuiz()} >
              <Play name='play' color='white' size={30} active={true} style={{paddingLeft:5}}/>
            </TouchableWithoutFeedback>)
          }  
        </>
      </View>
      </Fragment> 
        : ( <View style={{width:'100%',alignItems:"center"}}>
              <ActivityIndicator size="small" color="white" />
            </View>)
        }    
    </View>
  )
}
export default QuizList;