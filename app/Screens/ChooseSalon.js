import { StatusBar } from 'expo-status-bar';
import React,{ useContext, useState,useEffect } from 'react';
import { TouchableOpacityBase } from 'react-native';
import { 
  StyleSheet, 
  Text,
  ImageBackground, 
  Picker,
  TouchableOpacity,
  View } from 'react-native';

export default function App(navif=Geolocation,route) {
  const  id  = route.params.id;
  console.log("Edit Profile", id);
  const [city, setcity] = useState('')
  const [selectedValue, setSelectedValue] = useState("Gender");
  return (
    <ImageBackground style={styles.container} source={require("../assets/bg-01.png")}>
      <Text style={styles.header}>Choose your Salon</Text>
      <Text style={styles.service}>Service</Text>
      <Text style={styles.salon}>Choose Salon</Text>
      <Picker style={styles.cityText}
          itemStyle={{backgroundColor:'#000'}}
          placeholder="City"
          labelValue={city}
          selectedValue={selectedValue}
          onValueChange={(city, itemIndex) => 
            {if(city !== "disabled"){
              setSelectedValue(city)}
              setcity(city)
            }}
          
        >
          <Picker.Item label="City" value="disabled" color="#000" />
          <Picker.Item label="Galle" value="Galle" />
          <Picker.Item label="Colombo" value="Colombo" />
          <Picker.Item label="Mathara" value="Mathara" />
          <Picker.Item label="Kaluthara" value="Kaluthara" />
          <Picker.Item label="Gampaha" value="Gampaha" />
          <Picker.Item label="Hambanthota" value="Hambanthota" />
          <Picker.Item label="Nuwaraeliya" value="Nuwaraeliya" />
          <Picker.Item label="Kandy" value="Kandy" />
          <Picker.Item label="Panadura" value="Panadura" />
          <Picker.Item label="Ambalangoda" value="Ambalangoda" />
        </Picker>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.btnTxt}>
                Search
            </Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
      </ImageBackground>
  );
}

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
    top:'-35%',
    color:"#3A292A",
    position:"relative",
    paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
    paddingLeft: 10,
  },
  service:{
    fontFamily:'Roboto',
    //fontWeight:'bold',
    fontSize:20,
    top:'-32%',
    color:"#3A292A",
    position:"relative",
    paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
    paddingLeft: 10,
    left:-150
  },
  salon:{
    fontFamily:'Roboto',
    fontWeight:'bold',
    fontSize:20,
    top:'-30%',
    color:"#3A292A",
    position:"relative",
    paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
    paddingLeft: 10,
    left:-120
  },
  cityText:{
    width:175,
    height:40,
    fontFamily:'Roboto',
    fontWeight:'bold',
    fontSize:20,
    //backfaceVisibility : "visible",
    // borderRadius:25,
    // paddingHorizontal:16,
    // fontSize:16,
    color:'#3A292A',
    top:'-28%',
    left:'-23%',
    // elevation:5,
    // shadowColor:'#000',
    // shadowOffset:{
    //   width:1,
    //   height:1,
    // },
    // shadowRadius:100,
    marginVertical:10,
    marginHorizontal:10,
  },
  button:{
    backgroundColor:'#3A292A',   
    borderRadius:25,
    width:100,
    height:40,
    top:'25%',
    marginVertical:10,
    paddingVertical:7,
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
    left:'60%',
  },
  btnTxt:{
    fontSize:20,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },
});
