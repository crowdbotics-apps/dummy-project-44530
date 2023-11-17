import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Image, Text, ScrollView, SafeAreaView, StyleSheet, Pressable } from "react-native";

const WelcomeScreen = () => {

  const navigation = useNavigation()

  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.group}>
          <Pressable>
            <Image style={styles.logo} source={require("./logo.png")} />
          </Pressable>
          <Text style={styles.text}>
            Let's build something amazing together!
          </Text>
        </View>

        <Pressable onPress={()=>{
          navigation.navigate('LoginScreen')
        }}>
          <Text style={styles.text}>Login</Text>
        </Pressable>

        <Pressable onPress={()=>{
          navigation.navigate('SignUpScreen')
        }}>
          <Text style={styles.text}>Signup</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8FC",
    height: "100%"
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