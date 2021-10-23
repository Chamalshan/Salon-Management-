import { useContext, useState,useEffect } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View,
  ImageBackground,
  Button,
  Image,
  TextInput,
  StatusBar 
} from 'react-native';

export default function App(navigation) {
  return (
    <ImageBackground style={styles.container} source={require("../assets/bg-01.png")}>
    <View><TextInput style={styles.textinput} 
        placeholder="Date"
        autoCapitalize="none"
        autoCorrect={false}
        />
        <TextInput style={styles.textinput} 
        placeholder="Time"
        autoCapitalize="none"
        autoCorrect={false}
        />
        <TouchableOpacity style={styles.button}
        onPress={() =>alert('Appointment Added')}>
            <Text style={styles.btnTxt}>
                Add Appointment
            </Text>
            
        </TouchableOpacity>
        </View>
        </ImageBackground>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textinput: {
    width: 375,
    height: 40,
    position:'relative',
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#3A292A",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 100,
    marginVertical: 10,
    marginHorizontal: 10,
  },

  btnTxt: {
    fontSize: 20,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center",
  },

  button: {
    backgroundColor: "#3A292A",
    borderRadius: 25,
    width: 200,
    marginVertical: 10,
    paddingVertical: 12,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 100,
    marginVertical: 10,
    marginHorizontal: 10,
    position: "absolute",
    top: "100%",
    left:'20%',
  },
});
