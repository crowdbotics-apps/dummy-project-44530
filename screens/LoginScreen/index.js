import React from "react";
import { StyleSheet, SafeAreaView, TextView } from "react-native";

const LoginScreen = () => {
  return <SafeAreaView style={styles.safeArea}>
      <TextView style={styles.textStyling}>Login Screen</TextView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyling: {
    color: 'red'
  }
});
export default LoginScreen;