import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import { Text } from 'react-native-paper';
import {KeyboardAccessoryView} from 'react-native-ui-lib/keyboard';

const CustomKeyboard = ({
  onKeyPress,
  setIsCustomKeyboard,
  isCustomKeyboard,
}) => {

    console.log(isCustomKeyboard , "is ")
  const mathKeys = [
    {symbol: 'Q', label: 'A', color:'white', function: '\\frac{}{}'},
    {symbol: 'W', label: 'B', color:'white', function: '\\sqrt{}'},
    {symbol: 'E', label: 'C', color:'white',function: '\\pi{}'},
    {symbol: 'R', label: 'A', color:'white',function: '\\frac{}{}'},
    {symbol: 'T', label: 'B', color:'white',function: '\\sqrt{}'},
    {symbol: 'Y', label: 'C', color:'white',function: '\\pi{}'},
    {symbol: 'U', label: 'A', color:'white',function: '\\frac{}{}'},
    {symbol: 'I', label: 'B', color:'white',function: '\\sqrt{}'},
    {symbol: 'O', label: 'C', color:'white',function: '\\pi{}'},
    {symbol: 'P', label: 'A', color:'white',function: '\\frac{}{}'},
    {symbol: 'A', label: 'B', color:'white',function: '\\sqrt{}'},
    {symbol: 'S', label: 'C', color:'white',function: '\\pi{}'},
    {symbol: 'D', label: 'A', color:'white',function: '\\frac{}{}'},
    {symbol: 'F', label: 'B', color:'white',function: '\\sqrt{}'},
    {symbol: 'G', label: 'C', color:'white',function: '\\pi{}'},
    {symbol: 'H', label: 'B', color:'white',function: '\\sqrt{}'},
    {symbol: 'J', label: 'C', color:'green',function: '\\pi{}'},
    {symbol: 'K', label: 'A', color:'white',function: '\\frac{}{}'},
    {symbol: 'L', label: 'B', color:'white',function: '\\sqrt{}'},
    {symbol: 'enter', label: 'B', color:'white',function: '\\sqrt{}'},
    {symbol: 'Z', label: 'C', color:'white',function: '\\pi{}'},
    {symbol: 'X', label: 'B', color:'white',function: '\\sqrt{}'},
    {symbol: 'C', label: 'C', color:'white',function: '\\pi{}'},
    {symbol: 'V', label: 'A', color:'white',function: '\\frac{}{}'},
    {symbol: 'B', label: 'B', color:'white',function: '\\sqrt{}'},
    {symbol: 'N', label: 'C', color:'white',function: '\\pi{}'},
    {symbol: 'M', label: 'C', color:'white',function: '\\pi{}'},
    {symbol: 'xx', label: 'C', color:'white',function: '\\pi{}'},
  ];

  const handleKeyPress = key => {
    onKeyPress(key);
  };

  const toggleKeyboard = () => {
    setIsCustomKeyboard(!isCustomKeyboard);
  };

  const renderKeyboardAccessoryViewContent = () => {
    if (isCustomKeyboard) {
      return (
        <View style={styles.container}>
          {mathKeys.slice(0 , 10).map((s, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => handleKeyPress(s.function)}
              style={[styles.button , {backgroundColor:s.color}]}>
              <Text style={{fontSize:18 , color:'black'}}>
                {s.symbol}
              </Text>
            </TouchableOpacity>
          ))}
          {mathKeys.slice(10 , 18).map((s, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => handleKeyPress(s.function)}
              style={[styles.button , {backgroundColor:s.color}]}>
              <Text style={{fontSize:18 , color:'black'}}>
                {s.symbol}
              </Text>
            </TouchableOpacity>
          ))}
          {mathKeys.slice(18 , 29).map((s, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => handleKeyPress(s.function)}
              style={styles.button}>
              <Text style={{fontSize:18 , color:'black'}}>
                {s.symbol}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    } else {
      return null;
    }
  };

  return (
    <KeyboardAccessoryView
      renderContent={renderKeyboardAccessoryViewContent}
      scrollBehavior={KeyboardAccessoryView.scrollBehaviors.FIXED_OFFSET}
     
    />
  );
};


const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor: '#EDEDED',
      paddingVertical: 5,
    
      justifyContent: 'center',
    },
    button: {
      height: 50,
      minWidth:'8%',
      marginVertical: 5,
      marginHorizontal: 3,
      paddingHorizontal:10,
      borderRadius: 10,
      backgroundColor: '#F7F7F7',
      justifyContent: 'center',
      alignItems: 'center',
    },
    toggleButton: {
      width: '10%',
      height: 50,
      margin: 5,
      borderRadius: 10,
      backgroundColor: '#F7F7F7',
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputAccessoryView: {
      backgroundColor: '#2A2A2A',
      height: 48,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderTopWidth: 0.8,
      borderColor: '#c4c4c4',
    },
    inputAccessoryButton: {
      backgroundColor: 'gray',
      height: 35,
      width: 30,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 5,
      borderRadius: 5,
    },
  });

export default CustomKeyboard;