import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Categories from './pages/Categories';
import Details from './pages/Details';
import Meals from './pages/Meals'

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='CategoriesPage' component={Categories}
        options={{
          title:'Categories',
          headerStyle:{backgroundColor:'white'},
          headerTitleStyle:{color:'#ffa502'},
          
        }} />
        <Stack.Screen name='MealsPage' component={Meals}
        options={{
          title:'Meals',
          headerStyle:{backgroundColor:'white'},
          headerTitleStyle:{color:'#ffa502'},
          headerTintColor:'#ffa502'
          
        }} />
        <Stack.Screen name='DetailPage' component={Details}
        options={{
          title:'Detail',
          headerStyle:{backgroundColor:'white'},
          headerTitleStyle:{color:'#ffa502'},
          headerTintColor:'#ffa502'
          
        }} /> 
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router;
