import React, { useState } from "react";
import { View,Text, Button } from "react-native";



const Back1 = (props)=> {

    

  return(
    <View style={{flex:1,justifyContent:`center`,alignItems:`center`, backgroundColor:`skyblue`}}>
    <Text>Back1</Text>
    <Button title="Next" onPress={()=> props.navigation.navigate(`Screen1`)}/>


    </View>
  )
}

export default Back1;