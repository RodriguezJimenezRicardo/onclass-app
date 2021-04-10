import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();
import pendientes from './screens/pendientes';
function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name= "pendientes" component ={pendientes}/>
    </Stack.Navigator>

  )
}
export default function App()  {
  return (
    <NavigationContainer> 
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
