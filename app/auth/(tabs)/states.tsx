// States
import { View, Text, Button } from 'react-native'
import React, {useState} from 'react'

const States = () => {
  const[count, setCount] = useState(0);
  return (  
    <View>
      <Text>states</Text>
      <Button title="Add Count" onPress={()=>setCount(count + 1)}></Button>
      <Text style={{fontSize:58}}>{count}</Text>
      <Button title="Decrease Count" onPress={()=>setCount(count - 1)}></Button>
    </View>
  )
};

export default States;