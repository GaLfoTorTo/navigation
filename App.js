import React from 'react';
import {} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import Login from './src/Components/Pages/Login/index';
import Home from './src/Components/Pages/Home';
import Foto from './src/Components/Pages/Foto';
import Sobre from './src/Components/Pages/Sobre';
import Contato from './src/Components/Pages/Contato';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Login' 
          component={Login} 
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Foto' component={Foto} />
        <Stack.Screen name='Sobre' component={Sobre} />
        <Stack.Screen name='Contato' component={Contato} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}