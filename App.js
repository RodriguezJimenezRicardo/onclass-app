import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();

import pendientes from './screens/pendientes';
import horario from './screens/horario';
import amigos from './screens/amigos';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    initialRouteName = "horario"
    activeColor = "#c8a2cb"//color del icono
    labelStyle = {{fontSize:12}}
    style = {{backgroundColor: '#5a7a7c'}}
    >
      <Tab.Screen
       name="horario"
       component={horario}
       options={{
         tabBarLabel : 'horario',
         tabBarIcon : ({color}) =>(
           <MaterialCommunityIcons name="home" color = {color} size = {26}/>
         ),
       }}
      />
      <Tab.Screen
       name="pendientes"
       component={pendientes}
       options={{
         tabBarLabel : 'pendientes',
         tabBarIcon : ({color}) =>(
           <MaterialCommunityIcons name="bell" color = {color} size = {26}/>
         ),
       }}
      />
      <Tab.Screen
       name="amigos"
       component={amigos}
       options={{
         tabBarLabel : 'amigos',
         tabBarIcon : ({color}) =>(
           <MaterialCommunityIcons name="account" color = {color} size = {26}/>
         ),
       }}
      />
    </Tab.Navigator>
  );
}

export default function App()  {
  return (
    <NavigationContainer> 
      <MyTabs/>
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
