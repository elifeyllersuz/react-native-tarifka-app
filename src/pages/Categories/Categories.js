import React ,{useState,useEffect} from 'react';
import {SafeAreaView,Text,FlatList,ActivityIndicator,StyleSheet} from 'react-native';
import Config from 'react-native-config';
import axios from 'axios';
import CategoriesCard from '../../components/CategoriesCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const  Categories =  ({navigation}) => {
    
  const {loading,data,error} = useFetch(Config.API_URL);
    // const [error,setError] = useState(null);
    // const [loading,setLoading] = useState(true);  
    // const [data,setData] = useState([]);
   
    // useEffect(() => {
    //     fetchData();
    // },[]);

    // const fetchData = async () => {
    //   try{
    //     const {data:categoryData} = await axios.get(Config.API_URL);
    //     setData(categoryData);
    //     setLoading(false);
    //   }
    //   catch(error){
    //     setError(error.message);
    //     setLoading(false);
    //   }
    // }

    const handleProductSelect = category => {
      navigation.navigate('MealsPage',{category})
    }

    const renderCategory = ({item}) => <CategoriesCard category={item.strCategory} image={item.strCategoryThumb}
    onSelect={() => handleProductSelect(item.strCategory)}/>
   
  
    if(loading){
      return <Loading/>
    }
  
    if(error){
      return <Error/>
    }
   
    return(
       <SafeAreaView style={styles.container}>
       <FlatList
        data={data.categories}
        renderItem={renderCategory}
        />
       
       </SafeAreaView>
    )
}
export default Categories;

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor:"#ffa500",
   padding: 5,
  },

});
