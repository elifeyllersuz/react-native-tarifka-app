import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import styles from './MealCardStyle';
const MealCard = ({meal,image,onSelect}) => {

  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri:image}} ></Image>
        <View style={styles.meal_container}>
          <Text style={styles.title}>{meal}</Text>
        </View>

      </View>
    </TouchableWithoutFeedback>
  )
}

export default MealCard;
