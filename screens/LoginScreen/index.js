import React from "react";
import { StyleSheet, SafeAreaView, Button } from "react-native";

const LoginScreen = ({
  route
}) => {
  const {
    id
  } = route.params || {};
  return <SafeAreaView style={styles.safeArea}>
      <Button title="Login Screen" onPress={() => {}} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center"
  },
  textStyling: {
    color: "red"
  }
});
export default LoginScreen;