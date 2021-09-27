import React from 'react';
import { 
  ActivityIndicatorBase,
  StyleSheet, 
  Text, 
  TextInput, 
  Image,
  TouchableOpacity, 
  View ,
  StatusBar,
  ImageBackground,
  ScrollView
} from 'react-native';
import KeyboardAvoidingWrapper from '../Components/KeyboardAvoidingWrapper';


const ShopReg=({navigation})=>{
    return (
      <KeyboardAvoidingWrapper>
      <ImageBackground style={styles.container}
        source={require('../assets/bg-01.png')}>
        <TouchableOpacity>
          <Image
            style={{width:28, height:28,position:'absolute',top:"10%",left:"-45%",}}
            source={require('../assets/back.png')}
            onPress={() => navigation.navigate("SelectScreen")}
            />
        </TouchableOpacity>
        <Text style={styles.header}>Register your Salon</Text>
        <Image
          style={{width:105, height:111, top:'0%'}}
          source={require('../assets/pic.png')}/>
        <TextInput style={styles.textinput} placeholder="Shop Name" 
        underlineColorAndroid={'transparent'}/>
        <TextInput style={styles.textinput} placeholder="Email" 
        underlineColorAndroid={'transparent'}/>
        <TextInput style={styles.textinput} placeholder="Mobile" 
        underlineColorAndroid={'transparent'}/>
        <TextInput style={styles.textinput} placeholder="Gender" 
        underlineColorAndroid={'transparent'}/>
        <TextInput style={styles.textinput} placeholder="Website" 
        underlineColorAndroid={'transparent'}/>
        <TextInput style={styles.textinput} placeholder="Location" 
        underlineColorAndroid={'transparent'}/>
        <TextInput style={styles.textinput} placeholder="Appointments that can be handled once" 
        underlineColorAndroid={'transparent'} secureTextEntry/>
        <TextInput style={styles.textinput} placeholder="Service" 
        underlineColorAndroid={'transparent'} secureTextEntry/>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.btnTxt}>
                Sign Up
            </Text>
        </TouchableOpacity>
      </ImageBackground>
        
      </KeyboardAvoidingWrapper>
    );
  }

export default ShopReg;

  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor:"#EFE5DA",
      justifyContent:'center',
      alignItems:'center',
    },
    header:{
      fontFamily:'Roboto',
      fontWeight:'bold',
      fontSize:30,
      top:'-1%',
      color:"#3A292A",
      position:"relative",
      paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
      paddingLeft: 10,
    },
    textinput:{
      width:375,
      height:40,
      top:'0%',
      backgroundColor:'#fff',
      borderRadius:25,
      paddingHorizontal:16,
      fontSize:16,
      color:'#3A292A',
      elevation:5,
      shadowColor:'#000',
      shadowOffset:{
        width:1,
        height:1,
      },
      shadowRadius:100,
      marginVertical:10,
      marginHorizontal:10,
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
      top:'86.5%',
      //left:'40%',
    },
});