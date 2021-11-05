import React from 'react';
import { 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View,
  ImageBackground,
  Image 
} from 'react-native';
import KeyboardAvoidingWrapper from '../Components/KeyboardAvoidingWrapper';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const CategoryScreen=({navigation,route})=>{
  const {id}=route.params.uId;
  console.log(navigation)
  console.log('Category',id)
    return (
      <KeyboardAvoidingWrapper>
      <ImageBackground style={styles.container} source={require("../assets/bg-01.png")}>
        <View style={styles.signupTextCont}>
          <Text style={styles.welcome}>
            Categories
          </Text>
          
          <TouchableOpacity style={styles.button}
          
            onPress={() => navigation.navigate ("ServiceScreen")}>
              <Text style={styles.btnTxt}>
              Hair</Text>
              
          </TouchableOpacity>
        
          <TouchableOpacity style={styles.backbutton}
            onPress={() => navigation.navigate("Home")}>
              <Image
                style={{width:28, height:28}}
                source={require('../assets/back.png')}
              /> 
          </TouchableOpacity>

          
        </View>
      </ImageBackground>
      </KeyboardAvoidingWrapper>
    );
  }

  export default CategoryScreen;

  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor:"#EFE5DA",
      justifyContent:'center',
      alignItems:'center',
    },
    welcome:{
      color:'#3A292A',
      fontSize:40,
      top:50,
      flex:1
    },
    btnTxt:{
      fontSize:20,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center'
    },
    button:{
      backgroundColor:'#3A292A',   
      borderRadius:15,
      width:350,
      height:100,
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
      top:'21%',
      left:'-22%',
    },

    backbutton:{
      backgroundColor:'rgba(52, 52, 52, 0)',   
      borderRadius:25,
      width:200,
      position:'absolute',
      top:'1%',
      left:'-25%',
    },

   


});