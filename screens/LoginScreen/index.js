import React from "react";
import { StyleSheet, SafeAreaView, Button } from "react-native";

const LoginScreen = () => {
  return <SafeAreaView style={styles.safeArea}>
      <Button title="Login Screen" onPress={() => {}} />
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