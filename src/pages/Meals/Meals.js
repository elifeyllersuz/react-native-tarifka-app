import React from 'react';
import { Text, View,SafeAreaView,StyleSheet,FlatList } from 'react-native';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import MealCard from '../../components/MealCard/MealCard';

const Meals = ({ route ,navigation}) => {
  const { category } = route.params;
  const { loading, error, data } = useFetch(`${Config.MEAL_URL}${category}`)
  //console.log(category);

  const goToDetail = id  => {
    navigation.navigate('DetailPage',{id});
  }
   
  const renderItem = ({ item }) => <MealCard meal={item.strMeal} image={item.strMealThumb}
  onSelect={() => goToDetail(item.idMeal)}/>
  
  
  

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
    
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data?.meals}
        renderItem={renderItem}
        keyExtractor={item => item.idMeal}
      />
    </SafeAreaView>
  )
 
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#FFA500',
    padding:5
  }
})

export default Meals;
