import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Image, Text, ScrollView, SafeAreaView, StyleSheet, Pressable } from "react-native";
import CustomKeyboard from "../../utils/CustomKeyboard";
import { TextInput } from "react-native-paper";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const [isCustomKeyboard, setIsCustomKeyboard] = useState(false);

  const handleKeyPress = key => {
   console.log(key , " Keys ")
  };


  return <SafeAreaView style={styles.container}>
    {/* <ScrollView contentContainerStyle={styles.scrollView}> */}
      <View style={styles.group}>
        <Pressable onPress={()=>{
          setIsCustomKeyboard(!isCustomKeyboard)
        }}>
          <Image style={styles.logo} source={require("./logo.png")} />
        </Pressable>
        <Text style={styles.text}>
          Let's build something amazing together!
        </Text>
      </View>


      <View style={{ flex:1, justifyContent: 'flex-end' , alignContent:'flex-end', }}>
        <CustomKeyboard
          setIsCustomKeyboard={setIsCustomKeyboard}
          isCustomKeyboard={isCustomKeyboard}
          onKeyPress={handleKeyPress} 
        /> 

        
      </View>

      {/* <Pressable onPress={() => {
        navigation.navigate('Camera');
      }}>
          <Text style={styles.text}>Login</Text>
        </Pressable>

        <Pressable onPress={() => {
        navigation.navigate('SideDrawer');
      }}>
          <Text style={styles.text}>Signup</Text>
        </Pressable>  */}
    {/* {/* </ScrollView> */}
  </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex:1
  },
  scrollView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20
  },
  group: {
    alignItems: "center"
  },
  logo: {
    height: 180,
    width: 180,
    padding: 40,
    borderRadius: 30,
    margin: 40
  },
  text: {
    textAlign: "center",
    fontSize: 28,
    color: "#828AB0",
    fontWeight: 700
  },
  tSrdkCYV: {
    width: 187,
    height: 33
  }
});
export default WelcomeScreen;