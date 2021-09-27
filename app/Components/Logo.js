import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Image
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Logo() {
    return (
      <View style={styles.container}>
      <Image 
        style={{width:273, height:304}}
       source={require('../assets/encapture.png')}
      />
      <Text style={styles.logotext}>Welcome to Salon App</Text>
      </View>
    );
  }

  const styles= StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent:'flex-end',
      alignItems:'center'
    },
    logotext:{
      marginVertical:15,
      fontSize:20,
      color:'#3A292A'
    },
    en:{
      width:273,
      height:304,
      position:'absolute',
      top:180,
    }
  });