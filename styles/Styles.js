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
        color:"white",
        fontFamily:"Vaptimi"   
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
        backgroundColor:'#ff8000',
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
        padding:10,
        height:50
    },
    vocaText:{
        color:"#0033ff",
        fontSize:15
    },
    vocDesc:{
        backgroundColor:'white',
        padding:5,
        height:370,
        marginTop:10
    }, 
    searchTab:{
        backgroundColor:'#afc6f0',
        borderWidth:1,
        borderColor:'white'
    },
    searchDetail:{
        paddingTop:5,
        paddingRight:10,
        paddingLeft:10,
        paddingBottom:15,
        backgroundColor:'#afc6f0'
    }, 
    searchDetailName:{
        backgroundColor:'white',
        paddingLeft:10,
        paddingRight:10,
        height:50,
        borderRadius:5
    },
    searchDetailContent:{
        padding:10,
        marginTop:5,
        height:420,
        backgroundColor:'white',
        borderRadius:5
    },
    searchAntonym:{
        padding:10,
        height:475,
        backgroundColor:'white',
        borderRadius:5
    },

});
export default Styles;