import { StyleSheet,Dimensions } from "react-native";
const deviceSize = Dimensions.get('window');


export default StyleSheet.create({
  container: {
  //  marginHorizontal: deviceSize.width * 0.04,
    flex:1,
    marginVertical:9,
    justifyContent:'flex-end',
    alignItems:'center'
    
  },
  image: {
    width:deviceSize.width*0.95,
    height:deviceSize.height/3,
    resizeMode:'cover',
    borderRadius:10
    
  },
  meal_container: {
    position:'absolute',
    backgroundColor:'black',
    buttom:0,
    width:'100%',
    opacity:0.7,
    alignItems:"flex-end",
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10

  },
  title: {
    fontSize:30,
    color:'white',
    fontWeight:'bold',
    paddingHorizontal:10,
    paddingVertical:5
  }
})
