import React from "react";
import { View,Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Back from "./Back";
import Back1 from "./back1";
import Screen1 from "./Screen1";
import Main from "./Main";




const Stack = createNativeStackNavigator();

const Appnabition = ()=> {

  return(
    <NavigationContainer>
    <Stack.Navigator>
       
       {/* <Stack.Screen name="Back1" component={Back1}  options={{headerShown:true}}/> */}

        {/* <Stack.Screen name="Main" component={Main}  options={{headerShown:true}}/>   */}
        <Stack.Screen name="Screen1" component={Screen1}  options={{headerShown:false}}/>

        </Stack.Navigator>
     </NavigationContainer>
  )
}

export default Appnabition;