import React from "react";
import { TextInput, Button, StyleSheet, SafeAreaView, Image, Text } from "react-native";

const LoginScreen = () => {
  return <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={{
      uri: "https://tinyurl.com/42evm3m3"
    }} />
      <Text style={styles.title}>Health App</Text>
      <Text style={styles.subtitle}>Welcome back!</Text>
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
      <Button title="Log In" color="#841584" />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff"
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#841584",
    textAlign: "center",
    marginBottom: 5
  },
  subtitle: {
    fontSize: 16,
    color: "#841584",
    textAlign: "center",
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: "#841584",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10
  }
});
export default LoginScreen;