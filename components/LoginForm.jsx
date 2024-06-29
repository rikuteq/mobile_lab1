import { Button, StyleSheet, Text, View, TextInput, ImageBackground, Image } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import ModalComp from './ModalComp';
import { useRouter } from 'next/router';
import { router } from 'expo-router';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  

  const handleLogin = () => {
    if (email === '' || password === '') {  
      alert('Email or Password cannot be empty');
      return;
    }
  
    if (email.toUpperCase() === 'ELIASIRONS@GMAIL.COM' && password === 'admin') {
      //Redirect to auth    
      router.push("/auth")
    
    } else {
      alert('Email or Password is incorrect');
    }
  }
  
  return (
    <View>
      <ImageBackground source={require('../assets/images/wp2939900.png')} />
      
      <View style={styles.container}>
        <Image source={require('../assets/images/user.png')} style={styles.image}/>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Login" onPress={handleLogin}/>
        <View style={styles.button}>
          <ModalComp/>
        </View>
      </View>
    </View>
  )
}

export default LoginForm

const styles = StyleSheet.create({
  container: {
    flex: 1,   
    alignItems: 'center',
    
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    width: '15%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    color: 'white',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 16,
  },
  button: {
    marginTop: 16,
  },
  
});
