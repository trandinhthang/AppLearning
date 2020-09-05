import {StyleSheet} from 'react-native';

const Styles= StyleSheet.create({
    container: {
        alignItems:"center",
        padding:5,
        borderRadius:20,
        backgroundColor:"white",
        marginBottom:10,
        marginTop:10 
        
    },
    translateImage:{
        width:50,
        height:50
    },
    title1:{
        fontWeight:'100',  
        color:"#918c8c"  
    },
    title:{

        fontWeight:'100'    
    },
    textinput:{
        padding:8,
        marginTop:5,//lề trên
        marginLeft:5,
        marginRight:5,
        borderRadius:10,
        backgroundColor:"white"
    },
    text1:{
        marginTop:5,//lề trên
        marginLeft:5,
        marginRight:5
    },
    text2:{
        backgroundColor:"white",
        marginLeft:5,
        marginRight:5,
        height: 50,//chiều rộng
        padding:10,
        borderRadius:10,
    },
    text3:{
        backgroundColor:"white",
        marginLeft:5,
        marginRight:5,
        height: 500,//chiều rộng
        padding:10,
        borderRadius:10,
    }

});
export default Styles;