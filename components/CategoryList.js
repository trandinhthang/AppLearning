import React,{Component} from "react";
import{
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import Styles from '../styles/Styles';
import books from "../assests/images/books.png";

export default function CategoryList(props) {
    const {onPress}=props;
    // const {category}=props;
        return(
            <TouchableOpacity activeOpacity={0.2} onPress={onPress}>
            <View style={Styles.container} >
                <Image style={Styles.translateImage} source={books}/>
                <Text style={Styles.title}>{props.name1}</Text>
                <Text style={Styles.title1}>{props.name}</Text>

            </View>
            </TouchableOpacity>  
        );     
}