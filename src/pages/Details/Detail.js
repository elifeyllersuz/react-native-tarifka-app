import React from "react";
import { SafeAreaView ,Text,FlatList,StyleSheet} from "react-native";
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import useFetch from "../../hooks/useFetch/useFetch";
import MealDetail from "../../components/MealDetails/MealDetail";
import Config from "react-native-config";

const Detail = ({route}) => {
  const {id} = route.params;
// console.log(id);
  const {error,loading,data} = useFetch(`${Config.DETAIL_URL}${id}`);
  
 //const renderItem = ({item}) => <MealDetail title={item.strMeal} image={item.strMealThumb} area={item.strArea} instruction={item.strInstructions}/>

  if(loading){
    return <Loading/>
  }

  if(error){
    return <Error/>
  //  console.log(data.response)
  }

 
  return (
    <SafeAreaView style={styles.container}>
          <MealDetail title={data?.meals[0].strMeal} image={data?.meals[0].strMealThumb} area={data?.meals[0].strArea} instruction={data?.meals[0].strInstructions} youtubeLink={data?.meals[0].strYoutube} />
        </SafeAreaView>
   
);
};

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor:"#F2F2F2",
   padding: 5,
  },

});


export default Detail;
