import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, StyleSheet } from 'react-native';
const patientsData = [{
  id: '1',
  name: 'John Doe',
  age: 30
}, {
  id: '2',
  name: 'Jane Doe',
  age: 28
}, {
  id: '3',
  name: 'Bob Smith',
  age: 35
}];

const PatientItem = ({
  item
}) => <View style={styles.itemContainer}>
    <Image style={styles.image} source={{
    uri: 'https://tinyurl.com/42evm3m3'
  }} />
    <View style={styles.textContainer}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.age}>{item.age} years old</Text>
    </View>
  </View>;

const HomeScreen = () => <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Patients List</Text>
    <FlatList data={patientsData} renderItem={({
    item
  }) => <PatientItem item={item} />} keyExtractor={item => item.id} />
  </SafeAreaView>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 20
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  textContainer: {
    justifyContent: 'center'
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  age: {
    fontSize: 16,
    color: '#757575'
  }
});
export default HomeScreen;