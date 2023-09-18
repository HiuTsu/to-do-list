import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import home from './react-app'; // Importe o componente home corretamente
import start from './react-app'; // Importe o componente start corretamente

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name='home' component={home} /> {/* Use letras maiúsculas para o nome do componente */}
        <Stack.Screen name='start' component={start} /> {/* Use letras maiúsculas para o nome do componente */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // Estilos do seu aplicativo, se necessário
});
