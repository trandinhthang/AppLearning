
import React from 'react';
import { 
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground,
    TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Styles from '../styles/Styles';
import books from '../assests/images/books.png';
import openbook from '../assests/images/open-book.png';
import paris from "../assests/images/paris.png";
import Home from "../assests/images/Home.png";
//gọi các Screen khác từ đây sang App.js
const HomeScreen =({navigation})=>{
    return(      
        <ImageBackground source={Home} style={{width:"100%",height:"100%"}}>  
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={Styles.textHeader}>
                Bonjour, bonne journée
                </Text>
                <View style={Styles.viewInput}>
                    <TextInput placeholder="Muốn ghi gì thì ghi vào đây nhé !" placeholderTextColor="#239dad" style={{fontWeight:'bold',fontSize:13,width:255}} />
                    <Entypo name='paper-plane' color='#239dad' size={16}/>
                </View>
                <View style={Styles.viewContent}>
                    <View>
                        <Text style={Styles.textContent}>Bắt đầu với những bài học</Text>
                        <TouchableOpacity style={Styles.touchContent}>
                            <Text style={{fontWeight:'bold',color:'white'}}>Đặt mục tiêu</Text>
                            <Icon name='arrow-right' color='white' size={20} style={{paddingLeft:35}} />
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.touchContent} activeOpacity={0.2} 
                                        onPress={() => navigation.navigate('Exam')}>
                            <Text style={{fontWeight:'bold',color:'white'}}>Luyện từ vựng</Text>
                            <Icon name='arrow-right' color='white' size={20} style={{paddingLeft:25}} />
                        </TouchableOpacity>
                        {/* <TouchableOpacity style={Styles.touchContent}>
                            <Text style={{fontWeight:'bold',color:'white'}}>Học nâng cao</Text>
                            <Icon name='arrow-right' color='white' size={20} style={{paddingLeft:26}} />
                        </TouchableOpacity> */}
                    </View>
                    <Image source={paris}
                        style={Styles.imageContent} />
                </View>
                <Text style={Styles.textContent_2}>Góc học tập</Text>
                <TouchableOpacity activeOpacity={0.2} onPress={() => navigation.navigate('Vocabulary')}>
                    <View style={Styles.viewCategories} >
                        <Image style={Styles.translateImage} source={openbook}/>
                        <View style={{paddingHorizontal:30}}>
                            <Text style={{color:'white',fontWeight:'bold',fontSize:16}}>
                                Vocabulaire
                            </Text>
                            <Text style={{color:'white',fontWeight:'bold',fontSize:16}}>Từ vựng</Text>
                            <Text style={{color:'white',fontSize:13}}>20 chủ đề, 120 từ vựng</Text>
                        </View>      
                    </View>
                </TouchableOpacity>      
                <TouchableOpacity activeOpacity={0.2} onPress={() => navigation.navigate('Translate')}>
                    <View style={Styles.viewCategories} >
                        <Image style={Styles.translateImage} source={books}/>
                        <View style={{paddingHorizontal:30}}>
                            <Text style={{color:'white',fontWeight:'bold',fontSize:16}}>
                                Pratiquer L'écoute
                            </Text>
                            <Text style={{color:'white',fontWeight:'bold',fontSize:16}}>Luyện nghe</Text>
                             <Text style={{color:'white',fontSize:13}}>9 chủ đề, 50 bài luyện nghe</Text>
                        </View>        
                    </View>           
                </TouchableOpacity>   
            </ScrollView>                                  
        </ImageBackground>
         
);     
}
export default HomeScreen;
 
// constructor(props){
//     super(props);
//     this.state={
//         categories:[
//         {id:'1', name:'Dịch từ',name1:'Traduire mots'},
//         {id:'2', name:'Từ vựng',name1:'Vocabulaire'},  
//         {id:'3', name:'Ngữ pháp',name1:'Grammaire'}, 
//         {id:'4', name:'Luyện tập',name1:'Grammaire'},           
//         ]   
//     };
//     }
// render(){
//     const {navigation} =this.props;
//     const {categories} =this.state;
//     return(
//         <FlatList
//         data={categories}
//         renderItem={({item})=> <CategoryList category={item} onPress={() => 
//             navigation.navigate("Translate",{ name: item.name },{name1:item.name1}  
//         )} />}
//         keyExtractor={item => item.id}
//         contentContainerStyle={{backgroundColor:"#e1e1e6",paddingLeft:50,paddingRight:50}}
//         /> 
//     )
// }
/* <CategoryList name="Dịch từ" name1=""  />
<CategoryList name="Từ vựng" name1="Vocabulaire" onPress={() => navigation.navigate('Vocabulary')} />
<CategoryList name="Ngữ pháp" name1="Grammaire" onPress={() => navigation.navigate('Grammar')} /> */