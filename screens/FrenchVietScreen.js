import * as React from 'react';
import { Component } from 'react';
import { View, Text,TextInput ,} from 'react-native';
import { ScrollView, useWindowDimensions } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import HTML from "react-native-render-html";

const htmlContent = `
    <h1>This HTML snippet is now rendered with native components !</h1>
    <h2>Enjoy a webview-free and blazing fast application</h2>
    <img src="https://i.imgur.com/dHLmxfO.jpg?2" />
    <em style="textAlign: center;">Look at how happy this native cat is</em>
`;
const FrenchVietScreen = () => {
  const contentWidth = useWindowDimensions().width;
  const contentHeight = useWindowDimensions().height;
  const [word,setWord] = React.useState("")
  const [data,setData] = React.useState(null)
  const [loading,setLoading] = React.useState(false)

  async function searchAPI(word){
    try {
      const res = await fetch( `https://api.tracau.vn/WBBcwnwQpV89/df/${word}`)
      const dataSearch = await res.json()
      const dataFinal = dataSearch.tratu[0].fields.fulltext
      setLoading(false)
      setData(dataFinal)
    } catch (error) {
      console.log(`error`, error)
    }
  }
  const onSubmit = () => {
    setData(null)
    setLoading(true)
    searchAPI(word)
  }
  
  return (
    <View>
         <View style={{
            flexDirection:'row',
            justifyContent:"space-between",
            alignItems:'center',
            backgroundColor:'white',
            borderRadius:12,
            paddingLeft:25,
            height:53,
         
         }}>
            <TextInput placeholder="Pháp Việt !" 
            placeholderTextColor="#239dad" 
            style={{ fontWeight: 'bold', fontSize: 16, width: 255 }} 
            value={word}
            onChangeText={setWord} 
            />
            <AntDesign onPress={()=> onSubmit()}  name='search1' color='#239dad' size={25} style={{   marginRight:20}} />
        </View>
        <View style={{backgroundColor:"white",padding:10, margin:10,height:contentHeight-175}}>
          <ScrollView  >
            {loading && (<Text>Loading</Text>)}
            {data &&( <HTML source={{ html: data }} contentWidth={contentWidth} />) }

          </ScrollView>
        </View>
    </View>
  )
}

export default FrenchVietScreen
