import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';

const index = () => {
  return (
    <ScrollView>
      <View>
        <ImageBackground style={styles.backgroundImage} source={{uri: "https://media1.tenor.com/m/tFsl_zMgnE0AAAAd/monkey-brush.gif"}}>
          <View style={styles.container}>
          
            <Image
              source={{uri: 'https://media1.tenor.com/m/oNMafTuU4uIAAAAd/monkey-rizz.gif'}}
              style={styles.profileImage}
            />
            <Text style={styles.name}>Rizz Monkey</Text>
            <Text style={styles.bio}>The Means of Which All is Revealed</Text>
            <Text style={styles.label}>Age:<Text style={styles.info}> Unknown</Text></Text>
            <Text style={styles.label}>Location:<Text style={styles.info}> Calgary, Alberta</Text></Text>
            <Text style={styles.label}>Charisma:<Text style={styles.info}> 100</Text></Text>            
            <Text style={styles.label}>Attractiveness:<Text style={styles.info}> Max</Text></Text>
              
              
          </View>
          
        </ImageBackground>
        <View style={styles.imageContainer}>
              {[...Array(390)].map((_, index) => (
                <Image key={index} style={styles.image2} source={{ uri: "https://i.kym-cdn.com/entries/icons/facebook/000/043/789/cover5.jpg" }} />
              ))}                                
        </View>      
      </View>
      
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label:{
    fontWeight:"bold",
    fontSize: 16,
    marginBottom: 5,
    borderWidth:1,
    borderColor:"black",
    backgroundColor:"white",
    borderRadius:5,
    flexDirection:"row", 
  },
  bio: {
    fontSize: 18,
    marginBottom: 10,
    borderWidth:2,
    borderColor:"black",
    backgroundColor:"white",
    borderRadius:5,
  },
  info: {
    fontSize: 16,
    fontWeight:"normal",
    marginBottom: 5,   
    flexDirection:"row",
  },
  backgroundImage:{
    flex:1,
    resizeMode:"cover",
    justifyContent:"center",
    width:"100%",
    height:"100%",
  },
  imageContainer:{
    flexDirection:"row",
    flexWrap:"wrap",
  },
  image2:{
    width:50,
    height:50,
  },
});


