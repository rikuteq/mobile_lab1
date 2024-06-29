import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'
import { router } from 'expo-router';

const profile = () => {
  const handleLogout = () => {
    router.push("../../");
  }
  
  return (
    <View>
      <Text style={styles.profileText}>Profile</Text>
      <Image style={styles.image} source={{uri: "../../assets/images/pfp.png"}}/>
      <Text style={styles.profileInfo}>rikuteq</Text>
      <View>
        <Text style={styles.profileInfo}>eliasirons@gmail.com</Text>
        <Text style={styles.profileInfo}>825-561-4995</Text>
        <Text style={styles.profileInfo}>Address</Text>
      </View>
      <View style={styles.button}>    
        <Button title='Edit profile'></Button>
          
      </View>
      <View style={styles.button}>
        <Button onPress={handleLogout}  title='Sign out'></Button>
      </View>

    </View>
  )
}

export default profile

const styles = StyleSheet.create({
    profileText: {
        fontSize: 80,
        fontWeight: "bold",
        marginTop: 5,
        marginLeft: 5,
        marginBottom: 5,
        
    },
    profileInfo: {
        fontSize: 20, 
        marginTop: 5,
        marginLeft: 100,
        marginBottom: 5,
        
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginTop: 50,
        marginLeft: 100,
        
    },
    button: {
        marginTop: 5,
        marginLeft: 80,
        marginBottom: 20,
        width: "15%",
        height: 20,
    }
})