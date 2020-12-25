import React from 'react';
import {Text,View,TouchableOpacity, StyleSheet} from 'react-native';
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
        <View style={styles.container}>
            <TouchableOpacity {...{onPress}} 
                style={[styles.inner,{borderColor:correct ? "#f72525" : "white" },
                        {backgroundColor: !disabled ? "#25b8d9" : "#25b8d9"}]}
            >
                <Text style={{...styles.label,color: correct ? "#f72525" : "white"}}>
                {answer}
                </Text>
            </TouchableOpacity>  
        </View>
           
    )
}
const styles =StyleSheet.create({
    container:{
        justifyContent:'center',
        width:'50%',
        height:'50%',
        padding:5
    },
    inner:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:18,
        borderWidth:2
    },
    label:{
        fontSize:18,
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        textTransform:'capitalize' ,
        fontWeight: "bold"  
    }

});
export default QuizButton;