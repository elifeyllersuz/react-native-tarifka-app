import React from 'react';
import {View,Text,Image,TouchableWithoutFeedback} from 'react-native';
import styles from './CategoriesCardStyle';

const CategoriesCard = ({category,image,onSelect}) =>{
    return(
      <TouchableWithoutFeedback onPress={onSelect}>
        <View style={styles.container} >
            <Image style={styles.image} source={{uri:image}} ></Image>
            <View style={styles.body_container}>
                <Text style={styles.category} >{category}</Text>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default CategoriesCard;
