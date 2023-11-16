import { Pressable } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, Image, Text } from 'react-native';

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return <SafeAreaView style={styles.container}>
      <Pressable><Image style={styles.logo} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} /></Pressable>
      <Text style={styles.title}>Health App</Text>
      <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} onChangeText={setPassword} value={password} placeholder="Password" secureTextEntry />
      <TextInput style={styles.input} onChangeText={setConfirmPassword} value={confirmPassword} placeholder="Confirm Password" secureTextEntry />
      <Button title="Sign Up" onPress={() => {}} data={[1, 2, 3]} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5'
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5
  }
});
export default SignupScreen;