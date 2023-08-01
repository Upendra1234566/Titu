import React from "react";
import { View,Text } from "react-native";
import Main from "./Main";

const Back = ()=> {

  return(
    <View style={{flex:1,justifyContent:`center`,alignItems:`center`, backgroundColor:`blue`}}>

      <View style={{flex:1,backgroundColor:"#fff", justifyContent:"center", alignItems:"center"}}>
      <Text>Back</Text>

      </View>
   
    </View>
  )
}

export default Back;