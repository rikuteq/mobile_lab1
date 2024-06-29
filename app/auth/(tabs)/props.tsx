// pass data as a props to child components
import { View, Text, Button } from 'react-native'
import React from 'react'




const ParentComponent = () => {
  const handleEvent = () => {
    alert("Event handled");
  }
  const greeting = "Hello from props";
  let a = 10;
  return (
    <View>
      <Text style={{fontSize:48}}>props {greeting}</Text>
      <ChildComponent greeting={greeting}/>
      <ChildComponent2 onClick={handleEvent}/>  
    </View>
  )
};

const ChildComponent = (props:any) => {
  return (
    <View>
      <Text style={{fontSize:40}}>{props.greeting}</Text>
    </View>
  )
};

const ChildComponent2 = (props:any) => {
  return (
    <View>
      <Text style={{fontSize:40}}>{props.a}</Text>
      <Button title="Submit" onPress={props.onClick}></Button>
    </View>
  )
};

export default ParentComponent; ChildComponent; ChildComponent2;
