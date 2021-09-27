import React, { useState,useEffect }  from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { firebase } from '../navigation/firebase';


export default function CustReg({navigation}){
//export default function Form() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const onLoginPress = () => {
      firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then((response) => {
      const uid = response.user.uid
      const usersRef = firebase.firestore().collection('users')
      
      const usr = usersRef
          .doc(uid)
          .get()
          .then(firestoreDocument => {
            if (!firestoreDocument.exists) {
              const user = firestoreDocument.data()
              navigation.navigate('MerchantReg', {user})
            }else{
            const user = firestoreDocument.data()
            navigation.navigate('CustReg', {user})
            }
        })
      })
  }

    return (
      <View style={styles.container}>
          <TextInput style={styles.inputbox} 
          underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder='E-mail'
          onChangeText={(text) => setEmail(text)}
          value={email}
          autoCapitalize="none"
          placeholderTextColor='#3A292A'/>

          <TextInput style={styles.inputbox} 
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholderTextColor="#aaaaaa"
          placeholder='Password'
          onChangeText={(text) => setPassword(text)}
          value={password}
          autoCapitalize="none"
          placeholderTextColor='#3A292A'
          secureTextEntry/>
          <TouchableOpacity style={styles.button}
          onPress={()=> onLoginPress()}>
              <Text style={styles.btnTxt}>
                  Login</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgotTxt}>Forgot Password?</Text>
          </TouchableOpacity>
      </View>
    );
  }

  const styles= StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent:'center',
      alignItems:'center'
    },
    inputbox:{
      width:300,
      height:40,
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
    },
    forgotTxt:{
      color: '#3A292A',
      fontSize:16,
    }
  });