import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
      borderWidth:1,
      borderColor:'#bdbdbd',
      backgroundColor :'#eeeeee',
      margin:10,
      flexDirection:'row',
      borderRadius:20   },
    image:{
      width:80,
      minHeight:70,
     // borderRadius:5
    //  backgroundColor:'white',
      resizeMode : 'contain'
    },
    body_container:{
      flex:1,
      padding:12,
      
    },
    category:{
      fontWeight:'bold',
      fontSize:20
    }
})


