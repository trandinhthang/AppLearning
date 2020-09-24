import {StyleSheet} from 'react-native';
const Styles= StyleSheet.create({
    container: {
        alignItems:"center",
        padding:5,
        borderRadius:20,
        backgroundColor:"white",
        marginBottom:10,
        marginTop:10 ,
        backgroundColor:'#ff8800'
    },
    translateImage:{
        width:50,
        height:50
    },
    title1:{
        fontWeight:'100',  
        color:"white"  
    },
    title:{
        fontWeight:'bold' ,
        color:"white"    
    },
    parent: {
        marginLeft:5
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
    text3:{
        backgroundColor:"white",
        marginLeft:5,
        marginTop:5,
        marginRight:5,
        height: 100,
        padding:8,
        borderRadius:10,
    },
    fixToText:{
        borderRadius:10,
        marginLeft:5,
        marginRight:5,
        marginTop:5,
        flexDirection: 'row', 
        justifyContent: 'space-between'     
    },
    divThemes:{
        alignItems:'center',
        borderRadius:10,
        marginLeft:5,
        marginBottom:5
    },
    vocaFrTitle:{
        fontSize:15,
        color:'white',
        fontWeight:'bold'    
    },
    vocaVnTitle:{
        color:'white',
        fontWeight:'100'    
    },
    feedItem:{
        margin:15,
        backgroundColor:'#ff8800',
        borderRadius:15,
        padding:8,
        flexDirection:"row",
        marginVertical:8
    }
    
    
    

        
});
export default Styles;