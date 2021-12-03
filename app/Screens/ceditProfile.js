import React, { useContext, useState, useEffect } from "react";
import {
  ActivityIndicatorBase,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
  ImageBackground,
  Picker,
  ScrollView,
  Platform,
  Button,
  Image,
} from "react-native";
//import * as firebase from "firebase";
import LoginScreen from "./LoginScreen";
import { AuthContext } from "../navigation/AuthProvider";
import { firebase } from "../navigation/firebase";
import DateTimePicker from "@react-native-community/datetimepicker";
import KeyboardAvoidingWrapper from "../Components/KeyboardAvoidingWrapper";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import { Feather } from '@expo/vector-icons';

export default function CustReg({ navigation,route }) {
  const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);
    const [userData, setUserData] = useState(null);
    const [selectedValue,setSelectedValue] = useState();

  // useEffect( async () => {
  //   if (Platform.OS !== 'web') {
  //     const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
  //     if (status !== 'granted') {
  //       alert('Permission denied!')
  //     }
  //   }
  // },[])

  // state={gender:""};
  // showgender=(option) =>{
  //   alert(option);
  //   this.setState({gender: option});
  // }

  console.log(navigation);
  const  id  = route.params.id;
  console.log("Edit Profile", id);

  const getUser = async() => {
    const currentUser = await firebase 
    .firestore()
    .collection('users')
    .doc(id)
    .get()
    .then((documentSnapshot) => {
      if( documentSnapshot.exists ) {
        console.log('User Data', documentSnapshot.data());
        setUserData(documentSnapshot.data());
      }
    })
}
  
  const onUpdatePress = async() => {
    let imgUrl = await uploadImage();

    if( imgUrl == null && userData.userImg ) {
      imgUrl = userData.userImg;
    }

    firebase
    .firestore()
    .collection('users')
    .doc(id)
    .update({
      firstname: userData.firstname,
      oname: userData.lastname,
      gender: userData.gender,
      mobileno: userData.mobileno,
      address: userData.address,
      userImg: imgUrl,
    })
    .then(() => {
      console.log('User Updated!');
      alert(
        'Profile Updated!',
        'Your profile has been updated successfully.'
      );
          let uId= id;
          console.log('logedin as customer',uId);
          navigation.navigate('cProfile',{uId});
        }
      )
  }


  const PickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync()
        .then((image) => {
              console.log(image);
              const imageUri = image.uri;
              setImage(imageUri);
            //   this.bs.current.snapTo(1);
            });
        // if(!result.cancelled) {
        //   uploadImage(result.uri)
        //   .then((image) =>{
        //     Alert.alert("Success");
        //     console.log(image);
        //     const imageUri = image.uri;
        //     setImage(imageUri);
        //   }).catch((error) => {
        //     Alert.alert(error);
        //   })
        // }        
      }

      const uploadImage = async () => {
        if( image == null ) {
                return null;
              }
      const uri= image;
      const response = await fetch(uri);
      let filename = uri.substring(uri.lastIndexOf('/') + 1);
      const blob = await response.blob();

      setUploading(true);
      setTransferred(0);

      var ref = firebase.storage().ref().child("images/"+filename);
      const task= ref.put(blob);

      // Set transferred state
      task.on('state_changed', (taskSnapshot) => {
        console.log(
          `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
        );
  
        setTransferred(
          Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) * 100,
        );
      });
  
      try {
              await task;
        
              const url = await ref.getDownloadURL();
              console.log(url);
        
              setUploading(false);
              setImage(null);
        
              // Alert.alert(
              //   'Image uploaded!',
              //   'Your image has been uploaded to the Firebase Cloud Storage Successfully!',
              // );
              return url;
        
            } catch (e) {
              console.log(e);
              return null;
            }

    }

  const formatNumber = (phoneNumberString) => {
    let newText = "";
    let cleaned = ("" + phoneNumberString).replace(/\D/g, "");

    for (var i = 0; i < cleaned.length; i++) {
      if (i == 1) {
        if (newText == 0) {
          newText = "0";
        } else {
          alert("Badly Formatted");
        }
      }
      if (i == 2) {
        if (newText == 7) {
          newText = newText;
        } else {
          alert("Badly Formatted");
        }
      }
      if (i == 3) {
        newText = newText + "-";
      }

      newText = newText + cleaned[i];
      setState({ mobileno: newText });
      console.log("mobileno", state.mobileno, newText);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <KeyboardAvoidingWrapper>
      <ImageBackground
        style={styles.container}
        source={require("../assets/bg-01.png")}
      >
        <TouchableOpacity
          style={styles.backbutton}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={{ width: 28, height: 28 }}
            source={require("../assets/back.png")}
          />
        </TouchableOpacity>

        <Text style={styles.header}>Update Your Profile</Text>
        <TouchableOpacity onPress={() => {PickImage()}}>
            <View
              style={{
                height: 75,
                width: 75,
                borderColor:'#3A292A',
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
                
              }}>
              <ImageBackground
                source={{
                  uri: image
                    ? image
                    : userData
                    ? userData.userImg ||
                      'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg'
                    : 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg',
                }}
                style={{height: 75, width: 75}}
                imageStyle={{borderRadius: 50}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                    <Feather 
                        name="camera" 
                        size={24} 
                        color="#fff"
                        style={{
                        opacity: 0.7,
                        alignItems: 'center',
                         justifyContent: 'center',
                         borderWidth: 1,
                        borderColor: '#fff',
                        borderRadius: 10,
                        }} 
                    />
                </View>
                </ImageBackground>
            </View>
            </TouchableOpacity>

        <TextInput
          style={styles.textinput1}
          placeholder="Firstname"
          value={userData ? userData.firstname : ''}
          onChangeText={(txt) => setUserData({...userData, firstname: txt})}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <TextInput
          style={styles.textinput2}
          placeholder="Lastname"
          value={userData ? userData.lastname : ''}
          onChangeText={(txt) => setUserData({...userData, lastname: txt})}
          autoCapitalize="none"
          autoCorrect={false}
        />

        {/* <View style={styles.pickercont}>
            <Picker
                itemStyle={{ backgroundColor: "#fff" }}
                placeholder="Gender"
                
                selectedValue={selectedValue}
                    onValueChange={(gender, itemIndex) => {
                    if (gender !== "disabled") {
                    setSelectedValue(userData ? userData.gender : '');
                    }
                    {(txt) => setUserData({...userData, gender: txt})}
                }}
            >
          <Picker.Item label="Gender" value="disabled" color="#aaa" />
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
        </Picker>
        </View> */}

        

        <TextInput
          style={styles.textinput5}
          placeholder="Mobile Number"
          value={userData ? userData.mobileno : ''}
          onChangeText={(txt) => setUserData({...userData, mobileno: txt})}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <TextInput
          style={styles.textinput5}
          placeholder="Address"
          value={userData ? userData.address : ''}
          onChangeText={(txt) => setUserData({...userData, address: txt})}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            onUpdatePress();
          }}
        >
          <Text style={styles.btnTxt}>Update</Text>
        </TouchableOpacity>
      </ImageBackground>
    </KeyboardAvoidingWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#EFE5DA",
    justifyContent: "center",
    alignItems: "center",
  },

  backbutton: {
    backgroundColor: "rgba(52, 52, 52, 0)",
    borderRadius: 25,
    width: 200,
    position: 'absolute',
    top: "1%",
    left: "-25%",
  },

  header: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 30,
    top: "0%",
    color: "#3A292A",
    position: 'absolute',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingLeft: 10,
  },

  

  textinput: {
    width: 375,
    height: 40,
    top: "-6%",
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
  textinput1: {
    width: 175,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#3A292A",
    top: "1.4%",
    left: "-25%",
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
  textinput2: {
    width: 175,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#3A292A",
    top: "-6%",
    left: "25%",
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
  textinput3: {
    width: 175,
    height: 40,
    //backfaceVisibility : "visible",
    // borderRadius:25,
    // paddingHorizontal:16,
    // fontSize:16,
    color: "#3A292A",
    top: "-6.7%",
    left: "-25%",
    // elevation:5,
    // shadowColor:'#000',
    // shadowOffset:{
    //   width:1,
    //   height:1,
    // },
    // shadowRadius:100,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  textinput4: {
    width: 175,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#3A292A",
    top: "-14%",
    left: "25%",
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

  pickercont:{
    width: 375,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#3A292A",
    top: "-6%",
    
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 100,
    marginVertical: 10,
    marginHorizontal: 10,
    alignContent:'center',
  },

  textinput5: {
    width: 375,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#3A292A",
    top: "-5%",
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
    top: "86.5%",
    //left:'40%',
  },
});
