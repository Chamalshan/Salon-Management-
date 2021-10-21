import React,  { useContext, useState, useEffect } from 'react';
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
  ScrollView,
  Button,
  Picker,
} from 'react-native';
import { firebase } from '../navigation/firebase';
import KeyboardAvoidingWrapper from '../Components/KeyboardAvoidingWrapper';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

const ShopReg=({navigation})=>{
  const [name, setName] = useState('')
  const [oname, setOname] = useState('')
  const [email, setEmail] = useState('')
  const [mobileno, setmobile] = useState('')
  const [website, setWebsite] = useState('')
  const [location, setLocation] = useState('')
  const [appointments, setAppointments] = useState('')
  const [image, setImage] = useState(null);
  const [password, setPassword] = useState('')
  const [confirmPassword, setcofirmPassword] = useState('')
  const [regno, setregno] = useState('')
  const onRegisterPress = () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match.")
      return
  }
   firebase
       .auth()
       .createUserWithEmailAndPassword(email, password)
       .then((response) => {
               const uid = response.user.uid
               const data = {
                   id: uid,
                   name,
                   oname,
                   regno,
                   email,
                   mobileno,
                   website,
                   location,
                   appointments,
                   password
               };
               const usersRef = firebase.firestore().collection('shop')
               usersRef
                   .doc(uid)
                   .set(data)
                   .then(() => {
                       navigation.navigate('Dashboard', {user: data})
                   })
                 })
 }

  const PickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })
    console.log(result)
    if (!result.cancelled) {
      setImage(result.uri)
    }
  }

    return (
      <KeyboardAvoidingWrapper>
      <ImageBackground style={styles.container}
        source={require('../assets/bg-01.png')}>
        <TouchableOpacity>
          <Image
            style={{width:28, height:28,position:'absolute',top:"10%",left:"-45%",}}
            source={require('../assets/back.png')}
            onPress={() => navigation.navigate("Dashboard")}
            />
        </TouchableOpacity>
        <Text style={styles.header}>Register your Salon</Text>
        {/* <Image
          style={{width:105, height:111, top:'0%'}}
          source={require('../assets/pic.png')}/> */}
        <TextInput style={styles.textinput} 
          placeholder="Shop Name" 
          underlineColorAndroid={'transparent'}
          labelValue={name}
          onChangeText={(name) => setName(name)}
          autoCapitalize="none"
          autoCorrect={false}/>

        <TextInput style={styles.textinput} 
          placeholder="Owner Name" 
          underlineColorAndroid={'transparent'}
          labelValue={oname}
          onChangeText={(name) => setOname(name)}
          autoCapitalize="none"
          autoCorrect={false}/>

        <TextInput style={styles.textinput}
        placeholder="Shop Register No" 
        underlineColorAndroid={'transparent'} 
        labelValue={regno}
        onChangeText={(regno)=>setregno(regno)}
        />

        <TextInput style={styles.textinput} 
          placeholder="Email" 
          underlineColorAndroid={'transparent'}
          labelValue={email}
          onChangeText={(email) => setEmail(email)}
          autoCapitalize="none"
          autoCorrect={false}/>

        <TextInput style={styles.textinput} 
          placeholder="Mobile" 
          underlineColorAndroid={'transparent'}
          labelValue={mobileno}
          onChangeText={(mobileno) => setmobile(mobileno)}
          autoCapitalize="none"
          autoCorrect={false}/>

        <TextInput style={styles.textinput} 
          placeholder="Website" 
          underlineColorAndroid={'transparent'}
          labelValue={website}
          onChangeText={(website) => setWebsite(website)}
          autoCapitalize="none"
          autoCorrect={false}/>

        <TextInput style={styles.textinput} 
          placeholder="Location" 
          underlineColorAndroid={'transparent'} 
          labelValue={location}
          onChangeText={(location) => setLocation(location)}
          autoCapitalize="none"
          autoCorrect={false}
          />

        <TextInput style={styles.textinput} 
          placeholder="Appointments handled at once" 
          underlineColorAndroid={'transparent'} 
          labelValue={appointments}
          onChangeText={(appointments) => setAppointments(appointments)}
          autoCapitalize="none"
          autoCorrect={false}
          />
          <TextInput style={styles.textinput} 
        labelValue={password}
        onChangeText={(userPassword)=>setPassword(userPassword)}
        placeholder="Password"
        secureTextEntry={true}
        />
        
        <TextInput style={styles.textinput} 
        placeholder=" Confirm Password" 
        underlineColorAndroid={'transparent'} 
        secureTextEntry={true}
        labelValue={confirmPassword}
        onChangeText={(confirmPassword)=>setcofirmPassword(confirmPassword)}
        />

        

        <Button title="Choose Image" onPress={PickImage} />
          {image && <Image source={{ uri: image }} style={{
          width: 100,
          height: 100
        }} />}
         <Button title="Choose Image" onPress={PickImage} />
            {image && <Image source={{ uri: image }} style={{
            width: 100,
            height: 100,
            position:'absolute'
        }} />}
        
        <TouchableOpacity style={styles.button}>
            <Text style={styles.btnTxt}
            onPress={() => { onRegisterPress() }}>
                Register
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
      position:'relative',
      
      //left:'40%',
    },
});