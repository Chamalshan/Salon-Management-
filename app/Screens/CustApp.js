import React, { useContext, useState, useEffect } from "react";
import { 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View,
  ImageBackground,
  Button,
  Image,
  TextInput,
  StatusBar 
} from 'react-native';
import { firebase } from '../navigation/firebase';

const App=({navigation,route})=> {

  const  said  = route.params.sid;
  console.log("custapp", said);
  const  id  = route.params.id;
  console.log("custappcus", id);
  const [userData, setUserData] = useState(null);
  const [sid, setsid] = useState(said);
  const [cid, setcid] = useState(id)


  const sendData=()=>{
    firebase
        .firestore()
        .collection('appointment')
        .doc()
        .set({
          cid,
          time:userData.time,
          date:userData.date,
          sid,
          // service:userData.service,
        })
        .then(() => {
          console.log('Done');
          
              // let uId= id;
              // navigation.navigate('Dashboard',{screen:'Profile',params:{uId}});
              // console.log('logedin as customer',uId);
            }
          )
      }
  
  return (
    <ImageBackground style={styles.container} source={require("../assets/bg-01.png")}>
    <View><TextInput style={styles.textinput} 
        placeholder="Date"
        autoCorrect={false}
        value={userData ? userData.oname : ''}
        onChangeText={(txt) => setUserData({...userData, date: txt})}
        />
        <TextInput style={styles.textinput} 
        placeholder="Time"
        autoCorrect={false}
        value={userData ? userData.oname : ''}
        onChangeText={(txt) => setUserData({...userData, time: txt})}
        />
        <TouchableOpacity style={styles.button}
        onPress={() =>{sendData()}}>
            <Text style={styles.btnTxt}>
                Add Appointment
            </Text>
            
        </TouchableOpacity>
        </View>
        </ImageBackground>
  );
}
export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textinput: {
    width: 375,
    height: 40,
    position:'relative',
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#3A292A",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 100,
    marginVertical: 10,
    marginHorizontal: 10,
  },

  btnTxt: {
    fontSize: 20,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center",
  },

  button: {
    backgroundColor: "#3A292A",
    borderRadius: 25,
    width: 200,
    marginVertical: 10,
    paddingVertical: 12,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 100,
    marginVertical: 10,
    marginHorizontal: 10,
    position: "absolute",
    top: "100%",
    left:'20%',
  },
});
