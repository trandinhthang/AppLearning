import React, { useState, useEffect, Fragment, useRef } from "react";
import {  View,Text,ActivityIndicator,ImageBackground, Alert} from "react-native";
import {  TouchableWithoutFeedback} from 'react-native-gesture-handler';

import {getQuizQuestions, Difficulty, QuestionState} from './QuizUtil';

import QuizQuestion from './QuizQuestion';
import QuizAnswer from './QuizAnswer';
import QuizImage from "../assests/images/quizschool.jpg"

import Play from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

export type AnswerObject = {
  question: string;
  answer: string;
  correct:boolean;
  correctAnswer: string;
}

function QuizList({route}){
  const { diff }= route.params;
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [TOTAL_QUESTIONS] = useState(10);
  const [number, setNumber] = useState(0);
  const setAnswer = useRef(null);
  enum Difficulty{
    EASY="easy",
    MEDIUM="medium",
    HARD="hard",
  }
  //Không đồng bộ
  const startQuiz = async () =>{
    setLoading(true);
    setGameOver(false);
    if(diff==='MEDIUM'){
      const newQuestions = await getQuizQuestions(
                        TOTAL_QUESTIONS,
                        Difficulty.MEDIUM,
      );
      setQuestions(newQuestions);
    }  else {
      const newQuestions = await getQuizQuestions(
                        TOTAL_QUESTIONS,
                        Difficulty.HARD,
      );
      setQuestions(newQuestions);
    }
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
      if(correct) {
        setScore((prev) =>  prev + 50);
        Alert.alert('Chúc mừng bạn','Chính xác ! + 50♥' );
      } else{
        Alert.alert('Liu liu','Sai rồi nhé ! ');
      }
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
      },4000);
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
  <ImageBackground source={QuizImage} style={{width:"100%",height:"100%"}}>  
    <View style={{flex:1,justifyContent:'center',position:'relative',padding:15,paddingTop:2}}>
    { !loading ? <Fragment>
      <View style={{flex:1,paddingTop:15}}>
        {questions.length > 0 ?  
          <>
            <QuizQuestion questionNr={number+1}
                          question={questions[number].question}               
            />    
          </>
          : null
        } 
        
        <View style={{paddingTop:5}}>
          <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'white',width:55,height:55,borderRadius:300,left:'42%'}}              
          >
            <Text style={{fontSize:16,color:'red'}}>
              ♥{score} 
            </Text> 
          </View> 
        </View>
       
        {questions.length > 0 ?  
          <>
            <QuizAnswer answers={questions[number].answers} 
                        {...{setAnswer, checkAnswer}}
                        userAnswer={userAnswers ? userAnswers[number] : undefined}
            />
          </>
          : null
        }  
      </View>
      <View style={{backgroundColor:'white',alignItems:"center",justifyContent:'center',
                    width:60,height:60,bottom:4,borderRadius:300,left:10}}
      >
        <Text style={{color:'red',fontSize:8}}>Độ khó</Text>
        <Text style={{fontSize:12,color:'red'}}>{diff}</Text>
      </View> 
      <View style={{  backgroundColor:'white',alignItems:"center",justifyContent:'center',
                      borderRadius:300,width:50,height:50,position:'absolute',bottom:20,right:20}}
      >
        <>
          { !gameOver && !loading && number != TOTAL_QUESTIONS -1 ?
          ( <TouchableWithoutFeedback onPress={() => nextQuestion()} >
              <Ionicons name='rocket' color='red' size={30} active={true}/>
            </TouchableWithoutFeedback> ) :
          ( <TouchableWithoutFeedback onPress={() => startQuiz()} >
              <Ionicons name='ios-game-controller-sharp' color='red' size={30} active={true} />
            </TouchableWithoutFeedback>)
          }  
        </>
      </View>
      </Fragment> 
        : ( <View style={{width:'100%',alignItems:"center"}}>
              <ActivityIndicator size="small" color="orange" />
            </View>)
        }    
    </View>
    </ImageBackground>
  )
}
export default QuizList;