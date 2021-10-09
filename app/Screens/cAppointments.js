import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Platform } from 'react-native';
import KeyboardAvoidingWrapper from '../Components/KeyboardAvoidingWrapper';

const CappointmentScreen=({navigation})=>{
    return (
        <KeyboardAvoidingWrapper>
            <View style={styles.container}>
                <Text style={styles.text1}>Appointments </Text>
            </View>
        </KeyboardAvoidingWrapper>
    );
}

export default CappointmentScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EFE5DA',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Platform.OS === 'android'? StatusBar.currentheight : 0,
    },

    text1:{
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:30,
        top:30,
        left:20,
        color:"#3A292A",
        position:"absolute",
        paddingTop: Platform.OS === 'android'? StatusBar.currentheight : 0,
        
    },
});
  