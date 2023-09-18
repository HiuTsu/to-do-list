import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
const Stack = createStackNavigator();


export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Função de manipulação do botão de registro
  const handleRegistroPress = () => {
    // Implemente a lógica de registro aqui
    // Por exemplo, você pode enviar os dados para um servidor ou realizar ação local
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Image style={styles.backgroundImage} source={require('.\assets\wallpaper.png')} />

      <TextInput
        style={styles.TextInput}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
      />

      <TextInput
        style={styles.TextInput}
        value={senha}
        onChangeText={setSenha}
        placeholder="Senha"
        secureTextEntry={true}
      />

      {/* Botão de login */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      {/* Botão de registro */}
      <TouchableOpacity onPress={handleRegistroPress}>
        <Text style={styles.registroText}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  backgroundImage: {
    position: 'absolute',
    width: '120%',
    height: '120%',
  },

  TextInput: {
    zIndex: 1,
    width: '90%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom: 17,
  },

  // Estilos para o botão de login
  loginButton: {
    backgroundColor: 'blue', // Cor do botão
    width: '30%',
    height: 40,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },

  loginText: {
    color: 'white', // Cor do texto do botão
    fontWeight: 'bold',
  },

  // Estilos para o botão de registro


  registroText: {
    color: 'white', // Cor do texto do botão de registro
    fontWeight: 'bold',
    marginBottom: 1
  },
});


