import React, { useState } from 'react'
import { Text, View, TextInput,Image,TouchableOpacity, Alert, Modal} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fail from '../assests/images/checkFalse.png'
import Win from '../assests/images/checkTrue.png'

import {dataQuiz,themeQuiz} from '../json/FillWord.json'

const QuizFillWord = ({
  data,
  onAnsUpdate,
  numOfQuiz,
  actQuiz,
  onSetActQuiz,
  onSetStep
}) => {
  const text = data.word || null;
  const text_ = text.split("");

  const [otp, setOtp] = useState(Array(text.length).fill(""));

  const handleChange = (ele, index) => {
    setOtp([...otp.map((data, i) => (i === index ? ele : data))]);
    // if (ele.nextSibling) {
    //   ele.nextSibling.focus();
    // }
  };
  const nextQuiz = () => {
    const result = otp.join("").toLowerCase();
    console.log(`actQuiz`, actQuiz)
    console.log(`numOfQuiz`, numOfQuiz)
    
    if (actQuiz < numOfQuiz -1 ) {
      if (result === data.word) {
        console.log("Chức mừng");
        onSetActQuiz(actQuiz + 1);
        setOtp(Array(text.length + 1).fill(""));
      } else {
        console.log("Sai rồi nhé");
      }
    } else {
      onSetStep(2);
    }
  };

    return (
        <>

        <View style={{justifyContent:"space-evenly", flexDirection:"row",height:160}}>
        {text_.map((data, i) => {
        return (
          <TextInput
          key={i}
          name="otp"
          value={otp[i]}
          onChangeText={text => handleChange(text,i)}
          placeholder={"_"}
          placeholderTextColor={"white"}
          style=  {{  backgroundColor:"green",fontWeight:"600",alignSelf:'center',
          fontSize: 20,color:'white',width:'11%', borderRadius:10,
          borderWidth:0.5,borderColor:'grey',textAlign:'center',
          textTransform: "lowercase"
        }}
          maxLength={1}
          />
         ) })}
                
        </View> 
            <View style={{alignItems:'center',height:150}}> 
      
              {data.image ? 
              <Image style={{width:250,height:150}}  
              source={{uri:"https://i.pinimg.com/564x/f6/74/47/f674475070ac5c9b0e938428458c8226.jpg"}}/>
               : <Text>{ data.reverse}</Text>} 
                
            </View>
            <TouchableOpacity onPress={nextQuiz}>
            <View style={{ flexDirection:"row",justifyContent:'center',width:"100%",height:50,paddingTop:20}}>
                
                    <View style={{  backgroundColor:'white',width:100,height:50,alignItems:'center',
                                    justifyContent:'center', borderRadius:20,borderWidth:0.5,borderColor:'green'}}>
                        <Text style={{color:'green', fontWeight:'bold'}} >   KIỂM TRA </Text>
                    </View>       
              
            </View> 
            </TouchableOpacity>
        </>

    )
}
export default QuizFillWord;
