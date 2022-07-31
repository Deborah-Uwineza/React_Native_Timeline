import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoard from './screens/OnBoard';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import ChapterI from './screens/ChapterI';
import Chapter2 from './screens/Chapter2';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='OnBoard' component={OnBoard} options={{
          headerShown: false,
        }} />
        <Stack.Screen name='SignIn' component={Login} options={{
          headerShown: false,
        }} /> 

        <Stack.Screen name='SignUp' component={SignUp} options={{
          headerShown: false,
        }} /> 
        
        <Stack.Screen name='Chapter' component={ChapterI} options={{
          headerShown: false,
        }} />
        <Stack.Screen name='Chapter2' component={Chapter2} options={{
          headerShown: false,
        }}/>
      </Stack.Navigator> 
    </NavigationContainer>
  );
}

