import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, View, Image } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return <SafeAreaView style={styles.container}>
      <Image style={styles.logo} resizeMode='center' source={{
      uri: 'https://delgnnnzzjz4p.cloudfront.net/5bdade26e5f3b8c0f8db2ef89f134fd8db006ce7/img/cb-footer.png'
    }} />
      <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} onChangeText={setPassword} value={password} placeholder="Password" secureTextEntry />
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#ffffff"
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 50
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 5
  },
  buttonContainer: {
    width: '80%',
    marginTop: 20
  }
});
export default LoginScreen;