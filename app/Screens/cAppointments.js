import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text,
    StyleSheet, 
    View,
    Platform,
   ImageBackground,
   Image,
   TouchableOpacity,
   TextInput } from 'react-native';
import KeyboardAvoidingWrapper from '../Components/KeyboardAvoidingWrapper';

const CappointmentScreen=({navigation})=>{
    return (
        <KeyboardAvoidingWrapper>
            <ImageBackground style={styles.container} source={require("../assets/bg-01.png")}>
            <View style={styles.appoinmentTextCont}>
                <Text style={styles.appoinmenttext}>Appointments </Text>
            </View>
            </ImageBackground>
        </KeyboardAvoidingWrapper>
    );
}

export default CappointmentScreen;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor:"#EFE5DA",
        justifyContent:'center',
        alignItems:'center',
    },

    appoinmentTextCont:{
        flexGrow: 1,
        alignItems:"flex-end",
        justifyContent:"center",
        marginVertical:16,
        flexDirection:'row'
    },

    appoinmenttext:{
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:30,
        top:0,
        left:"-45%",
        color:"#3A292A",
        position:"absolute", 
        
    },
});
  