import { StatusBar } from 'expo-status-bar';
import React,{ useContext, useState,useEffect } from 'react';
import { TouchableOpacityBase } from 'react-native';
//import MapView from 'react-native-maps';
import { 
  StyleSheet, 
  Text,
  ImageBackground, 
  TouchableOpacity,
  Image,
  View,
  Dimensions 
} from 'react-native';
  import pic from './assets/Hair_Salon_Stations.jpg'; 
  import pic2 from './assets/maps.jpg';
  import pic3 from './assets/salon.jpg';
  import pic4 from './assets/salon2.jpg';
  import pic5 from './assets/salon3.jpg';

export default function App() {
  const [city, setcity] = useState('')
  const [selectedValue, setSelectedValue] = useState("Gender");
  return (
    <ImageBackground style={styles.container} source={require("./assets/bg-01.png")}>
      <Text style={styles.header}>Salon Name</Text>
      <Image source={pic} style={styles.pict} /> 
      <Text style={styles.Location}>Location: </Text>
      <Text style={styles.Telephone}>Telephone: </Text>
      <Text style={styles.Owner}>Owner: </Text>
      <Text style={styles.Employees}>Number of Employees: </Text>
      <Image source={pic2} style={styles.pictu} />
      <Image source={pic3} style={styles.pictu1} />
      <Image source={pic4} style={styles.pictu2} />
      <Image source={pic5} style={styles.pictu3} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnTxt}>Choose Salon</Text>
      </TouchableOpacity >
      {/* <View style={styles.mapp}>
      <MapView style={styles.map} />
      </View> */}
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
    top:'2%',
    color:"#3A292A",
    position:"relative",
    paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
    paddingLeft: 10,
  },
  Location:{
    fontFamily:'Roboto',
    //fontWeight:'bold',
    fontSize:20,
    top:'5%',
    color:"#3A292A",
    position:"relative",
    paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
    paddingLeft: 10,
    left:-144
  },
  Telephone:{
    fontFamily:'Roboto',
    //fontWeight:'bold',
    fontSize:20,
    top:'5%',
    color:"#3A292A",
    position:"relative",
    paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
    paddingLeft: 10,
    left:-138
  },
  Owner:{
    fontFamily:'Roboto',
    //fontWeight:'bold',
    fontSize:20,
    top:'5%',
    color:"#3A292A",
    position:"relative",
    paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
    paddingLeft: 10,
    left:-155
  },
  Employees:{
    fontFamily:'Roboto',
    //fontWeight:'bold',
    fontSize:20,
    top:'5%',
    color:"#3A292A",
    position:"relative",
    paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
    paddingLeft: 10,
    left:-83
  },
  

  button:{
    backgroundColor:'#3A292A',   
    borderRadius:25,
    width:200,
    height:60,
    top:'87%',
    marginVertical:10,
    paddingVertical:16,
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
    //left:'60%',
  },
  btnTxt:{
    fontSize:20,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },
  pict:{ 
    width: 400, 
    height: 159,
    top:'4%'
  },
  pictu:{ 
    width: 400, 
    height: 159,
    top:'6%'
  },
  pictu1:{ 
    width: 75, 
    height: 75,
    top:'8%',
    left:'-30%'

  },
  pictu2:{ 
    width: 75, 
    height: 75,
    top:'-3%'
  },
  pictu3:{ 
    width: 75, 
    height: 75,
    top:'-14%',
    left:'30%'
  },
});
