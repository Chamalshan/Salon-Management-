import React from 'react';
import { 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View,
  ImageBackground 
} from 'react-native';

import Logo from "../Components/Logo";


const SelectScreen=({navigation})=>{
    return (
      <ImageBackground style={styles.container} source={require("../assets/bg-01.png")}>
        <Logo/>
        <View style={styles.signupTextCont}>
          <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate ("CustReg")}>
              <Text style={styles.btnTxt}>
                  Sign Up as User</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}
          onPress={() => navigation.navigate ("MerchantReg")}>
              <Text style={styles.btnTxt}>
                  Sign Up as Merchant</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.signupTextCont}>
            <Text style={styles.signupText}>Already a user?</Text>
              <TouchableOpacity>
                <Text style={styles.signupBtn}
                onPress={() => navigation.navigate ("Login")}>Login</Text>
              </TouchableOpacity>        
          </View>
      </ImageBackground>
    );
  }

  export default SelectScreen;

  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor:"#EFE5DA",
      justifyContent:'center',
      alignItems:'center',
    },
    signupTextCont:{
      flexGrow: 1,
      alignItems:"flex-end",
      justifyContent:"center",
      marginVertical:16,
      flexDirection:'row'
    },
    signupText:{
      color:'#3A292A',
      fontSize:18
    },
    signupBtn:{
      color:'#745B5F',
      fontSize:18,
      fontWeight:'700'
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
      width:300,
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
      top:'10%',
      //left:'40%',
    },
    button2:{
      backgroundColor:'#3A292A',   
      borderRadius:25,
      width:300,
      marginVertical:10,
      paddingVertical:12,
      elevation:5,
      shadowColor:'#000',
      shadowOffset:{
        width:1,
        height:1,
      },
      shadowRadius:100,
      marginVertical:20,
      marginHorizontal:10,
      position:'absolute',
      top:'80%',
      //left:'40%',
    },
    
});