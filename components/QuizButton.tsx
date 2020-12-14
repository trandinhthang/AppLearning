import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {elevate} from 'react-native-elevate';

interface ButtonProps{
    key: number;
    answer: string;
    onPress: () => void;
    correct: boolean;
    disabled: boolean;
}

const QuizButton =({answer, onPress, correct,disabled})=> {
    return (
        <RectButton {...{onPress}} 
            style={[styles.container,elevate(5),{backgroundColor:!disabled ? "#fff" : "#ccc" }]}
        >
            <Text style={{...styles.label,color: correct ? "red" : "green"}}>
            {answer}
            </Text>
        </RectButton>      
    )
}
const styles =StyleSheet.create({
    container:{
        height:43,
            width:'100%',
            alignItems:'center',
            flexDirection:'row',
            marginBottom:14,
            paddingHorizontal:13,
            borderRadius:2,
            backgroundColor:'black'
    },
    label:{
        fontSize:16,
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        color:'white',
        textTransform:'capitalize' ,  
    }

});
export default QuizButton;