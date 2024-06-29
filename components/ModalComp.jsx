import { View, Text, Button, Modal, StyleSheet, TextInput, ImageBackground, Image  } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import ModalComp from './ModalComp';

const ModalNew = () => {
  const [isModelvalue, setModelvalue] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [searchText, setSearchText] = useState('');

  const navigation = useNavigation();

  const handleSignup = () => {  
    setModelvalue(false);
  }

  const toggleModel = () => {
    setModelvalue(!isModelvalue)
  }

  return (
    <View style={styles.container}>
      <View style={styles.signup}>
        <Button title="Signup" onPress={toggleModel}></Button>
      </View>
      <Modal visible={isModelvalue} animationType="slide" onRequestClose={toggleModel}>
        <View style={styles.modelcontent}>
          <View>
            <ImageBackground source={require('../assets/images/wp2939900.png')} />
            <View style={styles.container}>
              <Text style={styles.title}>Signup</Text>
              <TextInput
                style={styles.input}
                placeholder="First name"
              />
              <TextInput
                style={styles.input}
                placeholder="Surname"
              />
              <TextInput
                style={styles.input}
                placeholder="Mobile number or email address"
              />
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
              <TextInput
                style={styles.input}
                placeholder="Search"
                value={searchText}
                onChangeText={setSearchText}
              />
              <View style={styles.button}></View>
            </View>
          </View>
          <View style={styles.button}>
            <Button title="Signup" onPress={handleSignup}/>
          </View>
          <View style={styles.button}>
            <Button title="Close" onPress={toggleModel}></Button>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalNew;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modelcontent: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
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
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  signup: {
    backgroundColor: 'gray',
  },
});
