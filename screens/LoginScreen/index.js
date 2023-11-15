import React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";

const LoginScreen = () => {
  return <SafeAreaView style={styles.safeArea}>
      <Text style={styles.textStyling}>Login Screen</Text>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  textStyling: {
    color: "red"
  }
});
export default LoginScreen;