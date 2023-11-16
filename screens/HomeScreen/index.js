import React from "react";
import { SafeAreaView, View, Text, Image, FlatList, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
const patientsData = [{
  id: "1",
  name: "John Doe",
  age: 30
}, {
  id: "2",
  name: "Jane Doe",
  age: 28
}, {
  id: "3",
  name: "Bob Smith",
  age: 35
}];

const PatientItem = ({
  item
}) => <View style={styles.itemContainer}>
    <Image style={styles.image} source={{
    uri: "https://tinyurl.com/42evm3m3"
  }} />
    <View style={styles.textContainer}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.age}>{item.age} years old</Text>
    </View>
  </View>;

const HomeScreen = () => <SafeAreaView style={styles.container}>
    <FlatList data={patientsData} renderItem={PatientItem} keyExtractor={item => item.id} />
  </SafeAreaView>;

const Tab = createBottomTabNavigator();

const App = () => {
  return <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5"
  },
  itemContainer: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0"
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  textContainer: {
    justifyContent: "center"
  },
  name: {
    fontSize: 18,
    fontWeight: "bold"
  },
  age: {
    fontSize: 16,
    color: "#757575"
  }
});
export default App;