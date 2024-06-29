import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, Button, Pressable } from 'react-native'
import React, { useState } from 'react'

const Custom_text = () => {
  const [image, setImage] = useState("https://i.kym-cdn.com/entries/icons/facebook/000/043/789/cover5.jpg");
  const [text, setText] = useState("It's Joever...");

  const changeFrover = () => {
    setImage("https://media.tenor.com/BCI8zrcTA8YAAAAC/it's-joever-frog.gif");
    setText("It's Frover...");
  }
  const changeJoever = () => {
    setImage("https://i.kym-cdn.com/entries/icons/facebook/000/043/789/cover5.jpg");
    setText("It's Joever...");
  }
  return (    
    <ScrollView>            
      <View style={{}}>
        <Text style={styles.text1}>{text}</Text>
        <Image style={styles.image} source={{uri: image}}/>
        <Button title='submit' onPress={()=>alert("It's truly joever")}></Button>
        
        <Pressable onPress={(changeFrover)}>
          <Text style={styles.text1}>
            Frover
          </Text>
        </Pressable>
        
        <Pressable onPress={(changeJoever)}>
          <Text style={styles.text1}>
            Joever
          </Text>
        </Pressable>
        
        <View style={styles.imageContainer}>
              {[...Array(400)].map((_, index) => (
                <Image key={index} style={styles.image2} source={{ uri: "https://i.kym-cdn.com/entries/icons/facebook/000/043/789/cover5.jpg" }} />
              ))}                                
        </View>                                 
      </View>   
    </ScrollView>   
  )
}

export default Custom_text

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: "aqua",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      
    },
    text1:{
      flex: 2,
      fontWeight:"bold",
      fontSize:75,
      height: 500,
      width: 500,
      
      //position:"absolute",
      //margintop:20,
    },
    text2:{
      flex: 3,
      backgroundColor: "green",
      height: 100,
      width: 70,
    },
    text3:{
      flex: 3,
      backgroundColor: "black",
      color:"white",
      height: 100,
      width: 70,
    },
    image:{
      width:800,
      height:500,
    },
    image2:{
      width:50,
      height:50,
      margin: 5,
    },
    imageContainer:{
      flexDirection:"row",
      flexWrap:"wrap",
    },
    
});