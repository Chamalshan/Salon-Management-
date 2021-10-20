import React, { useContext, useState,useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View,
  ImageBackground,
  Button,
  Image,
  StatusBar 
} from 'react-native';

import Logo from "../Components/Logo";

const Advertisements=({navigation})=>{
  const [image,setImage]= useState(null);

  const PickImage = async() =>{
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing:true,
        aspect:[4,3],
        quality:1
      })
      console.log(result)
      if (!result.cancelled) {
        setImage(result.uri)
      }
    }
    return (

      <ImageBackground style={styles.container} source={require("../assets/bg-01.png")}>
        <View style={styles.allcon}>
        <TouchableOpacity style={styles.backbutton}
            onPress={() => navigation.navigate("Home")}>
              <Image
                style={{width:28, height:28}}
                source={require('../assets/back.png')}
              /> 
          </TouchableOpacity>
        <Text style={styles.header}>Add Advertisements</Text>
        {/* <Image
          style={{width:105, height:111, top:'2%'}}
          source={require('../assets/pic.png')}/> */}
        <Button title ="Choose Image" onPress={PickImage} />
        {image && <Image source={{uri:image}} style={{
          width:200,
          height:200
        }}/>}
        </View>
      </ImageBackground>
    );
  }

  export default Advertisements;

  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor:"#EFE5DA",
      justifyContent:'center',
      alignItems:'center',
    },

    allcon:{
      flexGrow: 1,
        alignItems:"flex-end",
        justifyContent:"center",
        marginVertical:16,
        flexDirection:'row'
    },

    backbutton:{
      backgroundColor:'rgba(52, 52, 52, 0)',   
      borderRadius:25,
      width:200,
      position:'absolute',
      top:'1%',
      left:'-30%',
    },

    header:{
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:30,
        top:'3%',
        color:"#3A292A",
        position:"absolute",
        // paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
        paddingLeft: 10,
      },
    
    },
    
);