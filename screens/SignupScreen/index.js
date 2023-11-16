import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Button, Image, Text, View } from "react-native";

const SignUpScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} />
        <Text style={styles.title}>Health App</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput style={styles.input} onChangeText={setName} value={name} placeholder="Name" />
        <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="Email" keyboardType="email-address" />
        <TextInput style={styles.input} onChangeText={setPassword} value={password} placeholder="Password" secureTextEntry />
        <Button title="Sign Up" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 40
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5
  }
});
export default SignUpScreen;