
import React from 'react';
import { ImageBackground,StyleSheet,Image,Text,StatusBar,TouchableOpacity,Button} from 'react-native';
import * as Font from 'expo-font';
import Login from './LoginScreen';
import * as firebase from "firebase";


const WelcomeScreen=({navigation})=>{
    return (
        <ImageBackground style={styles.container} source={require("../assets/bg-01.png")}>
            <Image style={styles.girl}
            source={require('../assets/girl.png')}/>
            <Text style={styles.text1}>
            Book your favorite 
            {'\n'}
            Hair Style
            </Text>
          <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate ("Login")}>
              <Text style={styles.btnTxt}>Get Started</Text>
          </TouchableOpacity>  
        </ImageBackground>
    );
}

export default WelcomeScreen;
  



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#EFE5DA',
        paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,

    },
    girl:{

        top:'20%',
        left:'20%',
    },
    text1:{
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:30,
        top:500,

        color:"#3A292A",
        position:"absolute",
        paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
        paddingLeft: 10,
    },
    btnTxt:{
      fontSize:20,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center'
    },
    button:{
      backgroundColor:'#3A292A',   
      borderRadius:25,
      width:200,
      marginVertical:10,
      paddingVertical:12,
      elevation:5,
      shadowColor:'#000',
      shadowOffset:{
        width:1,
        height:1,
      },
      shadowRadius:100,
      marginVertical:10,
      marginHorizontal:10,
      position:'absolute',
      top:'88%',
      left:'40%',
    },
})
