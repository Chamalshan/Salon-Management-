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

const CustReg2=({navigation})=>{

  return (
      <View>
    <TextInput style={styles.textinput5} 
    placeholder="Mobile Number" 
    underlineColorAndroid={'transparent'}
    />
    
    <TextInput style={styles.textinput5} 
    placeholder="Address" 
    underlineColorAndroid={'transparent'}
    />
    </View>
  );
}

export default CustReg2;


const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor:"#EFE5DA",
      justifyContent:'center',
      alignItems:'center',
    },

textinput5:{
    width:375,
    height:40,
    backgroundColor:'#fff',
    borderRadius:25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#3A292A',
    top:'-15.3%',
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
});