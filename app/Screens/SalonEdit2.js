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
  Alert,
} from "react-native";
import { firebase } from "../navigation/firebase";
import KeyboardAvoidingWrapper from "../Components/KeyboardAvoidingWrapper";
import * as ImagePicker from "expo-image-picker";
import { Feather } from '@expo/vector-icons';
import {firestore} from "firebase/firestore";
import {storage} from "firebase/storage";

const SalonEdit2 = ({route,navigation}) => {
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);
    const [userData, setUserData] = useState(null);

    const  id  = route.params.id;
    console.log("Edit Profile", id);
  

    const getUser = async() => {
        const currentUser = await firebase 
        .firestore()
        .collection('shop')
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
        .collection('shop')
        .doc(id)
        .update({
          name: userData.name,
          oname: userData.oname,
          mobileno: userData.mobileno,
          location: userData.location,
          website: userData.website,
          regno: userData.regno,
          appointments: userData.appointments,
          userImg: imgUrl,
        })
        .then(() => {
          console.log('User Updated!');
          // alert(
          //   'Profile Updated!',
          //   'Your profile has been updated successfully.'
          // );
              let uId= id;
              navigation.navigate('Dashboard',{screen:'Profile',params:{uId}});
              console.log('logedin as customer',uId);
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
      // const url =  getDownloadURL();
      // console.log(url)

      useEffect(() => {
        getUser();
    }, []);
    //   bs = React.createRef();

    const onbackPress = () =>{
      
      let uId= id;
      navigation.navigate('Dashboard',{screen:'Profile',params:{uId}})
    }

    return (
        <KeyboardAvoidingWrapper>
            <ImageBackground 
                style={styles.container}
                source={require("../assets/bg-01.png")}>
                
            <TouchableOpacity
                style={styles.backbutton}
                onPress={() => {onbackPress()}}
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
            
            <TextInput style={styles.textinput}
                placeholder="Salon Name"
                autoCorrect={false}
                value={userData ? userData.name : ''}
                onChangeText={(txt) => setUserData({...userData, name: txt})}
            />

            <TextInput style={styles.textinput}
                placeholder="Salon Owner Name"
                autoCorrect={false}
                value={userData ? userData.oname : ''}
                onChangeText={(txt) => setUserData({...userData, oname: txt})}
            />

            <TextInput style={styles.textinput}
                placeholder="Mobile Number"
                autoCorrect={false}
                value={userData ? userData.mobileno : ''}
                onChangeText={(txt) => setUserData({...userData, mobileno: txt})}
            />

            <TextInput style={styles.textinput}
                placeholder="Location"
                autoCorrect={false}
                value={userData ? userData.location : ''}
                onChangeText={(txt) => setUserData({...userData, location: txt})}
            />

            <TextInput style={styles.textinput}
                placeholder="Website"
                autoCorrect={false}
                value={userData ? userData.website : ''}
                onChangeText={(txt) => setUserData({...userData, website: txt})}
            />

            <TextInput style={styles.textinput}
                placeholder="Register No"
                autoCorrect={false}
                value={userData ? userData.regno : ''}
                onChangeText={(txt) => setUserData({...userData, regno: txt})}
            />

            <TextInput style={styles.textinput}
                placeholder="Appointments Can be Handled at once"
                autoCorrect={false}
                value={userData ? userData.appointments : ''}
                onChangeText={(txt) => setUserData({...userData, appointments: txt})}
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
    )
}

export default SalonEdit2;

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: "#EFE5DA",
      justifyContent: "flex-start",
      alignItems: "center",
    },

    backbutton: {
        backgroundColor: "rgba(52, 52, 52, 0)",
        borderRadius: 25,
        width: 200,
        position: "relative",
        // top: "-43%",
        left: "-23%",
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
        position: "relative",
    },

    btnTxt: {
        fontSize: 20,
        fontWeight: "500",
        color: "#ffffff",
        textAlign: "center",
    },

    header: {
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 30,
        color: "#3A292A",
        position: "relative",
        // top:'-48%',
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
    
    textinputcont:{
        position:'relative',
        justifyContent:'center',
        alignItems:'center',
        
    },
});
