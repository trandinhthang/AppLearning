import React,{Component} from "react";
import{
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import translate from "../assests/translate.png";
import vocabulary from "../assests/vocabulary.png";

export default function CategoryList(props) {
    const {category,onPress}=props;
        return(
            <TouchableOpacity activeOpacity={0.2} onPress={onPress}
            >
            <View style={styles.container} >
                <Image style={styles.translateImage} source={translate}/>
                <Text style={styles.title}>{category.name}</Text>
            </View>
            </TouchableOpacity>  
        );     
}

const styles= StyleSheet.create({
    container: {
        alignItems:'center',
        padding:16,
        borderRadius:4,
        backgroundColor:'#ff9900',
        // shadowColor:'red',
        // shadowOpacity:0.3,
        // shadowRadius:10,
        // shadowOffset:{width:0,height:0}
        marginBottom:10,
        marginTop:10
    },
    translateImage:{
        width:64,
        height:64
    },
    title:{
        textTransform:'uppercase',
        marginBottom:8,
        fontWeight:'700'
    }

});