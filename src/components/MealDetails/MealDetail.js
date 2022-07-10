import React from 'react';
import { ScrollView, Text, Image, View, TouchableOpacity, Linking } from 'react-native';
import styles from './MealDetailStyle';

const MealDetail = ({ title, image, area, instruction,youtubeLink }) => {


  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.area}>{area}</Text>
      <View style={styles.indicator}/>
      <View style={styles.info_container}>
        <Text style={styles.instruction}>{instruction}</Text>
        <TouchableOpacity
        style={styles.button}
        onPress={() => Linking.openURL(youtubeLink)}>
        <Text style={styles.link}>Watch on Youtube</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default MealDetail;
