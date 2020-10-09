import {StyleSheet} from 'react-native';
const Styles= StyleSheet.create({
    container: {
        alignItems:"center",
        padding:6,
        borderRadius:20,
        backgroundColor:"white",
        marginBottom:7,
        marginTop:8 ,
        backgroundColor:'#ff5959'
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
    textInput:{   
        marginTop:5,//lề trên
        marginLeft:5,
        backgroundColor:"white",
        width:330,
    },
    textTo:{
        marginTop:5,//lề trên
        marginLeft:5,
        marginRight:5,
        color:"#0400ff"
    },
    textOutput:{
        backgroundColor:"white",
        marginLeft:5,
        marginTop:5,
        marginRight:5,
        height: 100,
        padding:8
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
        backgroundColor:'#f58e27',
        borderRadius:15,
        padding:5,
        flexDirection:"row",
        marginVertical:8
    },
    vocaDetail:{
        padding:5,
        backgroundColor:'#ffe4b5'
    },
    vocaHeader:{
        backgroundColor:'white',
        padding:5,
        height:50
    },
    vocaText:{
        color:"#0033ff",
        fontSize:15
    },
    searchDetail:{
        padding:5,
        backgroundColor:'#a7f299'
    },
    vocDesc:{
        backgroundColor:'white',
        padding:5,
        height:370,
        marginTop:10
    }            
});
export default Styles;