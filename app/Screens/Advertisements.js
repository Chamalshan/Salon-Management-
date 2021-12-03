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
import { Feather } from '@expo/vector-icons';
import Logo from "../Components/Logo";
import { firebase } from "../navigation/firebase";

const Advertisements=({navigation,route})=>{
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);
    const [userData, setUserData] = useState(null);

    const id=route.params.uId;
    console.log('Adds',id);

  //   const uploadImage = async() => {
  //     const currentUser = await firebase 
  //     .firestore()
  //     .collection('shop')
  //     .doc(id)
  //     .get()
  //     .then((documentSnapshot) => {
  //       if( documentSnapshot.exists ) {
  //         console.log('User Data', documentSnapshot.data());
  //         setUserData(documentSnapshot.data());
  //       }
  //     })
  // }

  const onAddImagePress = async() => {
    let imgUrl = await uploadImage();

    if( imgUrl == null && userData.userImg ) {
      imgUrl = userData.userImg;
    }

    firebase
    .firestore()
    .collection('adds')
    .doc('01mQwu24TLTW9zXNgqyTokVk69r2')
    .update({
      uri: imgUrl,
      // sid: id,
    })
    .then(() => {
      console.log('Add Added');
      alert(
        'Advertisment Added'
      );
          
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

// useEffect(() => {
//   getUser();
// }, []);
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
        <TouchableOpacity onPress={() => {PickImage()}}>
        <View
              style={{
                height: 200,
                width: 300,
                borderColor:'#3A292A',
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
                // position:"absolute",
                top:"-60%",
                left:"0%",
              }}>
              <ImageBackground
                source={{
                  uri: image
                    ? image
                    : userData
                    ? userData.userImg ||
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo1ue9OdFrLkfULvN4u3jy8E6RDyZ_puj4bg&usqp=CAU'
                    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo1ue9OdFrLkfULvN4u3jy8E6RDyZ_puj4bg&usqp=CAU',
                }}
                style={{height: 200, width: 300}}
                imageStyle={{borderRadius: 50}}>
                
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                    <Feather 
                        name="camera" 
                        size={200} 
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
          <TouchableOpacity
          style={styles.button}
          onPress={() => {
            onAddImagePress();
          }}
          >
          <Text style={styles.btnTxt}>Upload</Text>
        </TouchableOpacity>
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
      position:'relative',
    },

    allcon:{
      flexGrow: 1,
        alignItems:"flex-end",
        justifyContent:"center",
        marginVertical:16,
        flexDirection:'row',
        // position:'absolute',
    },

    backbutton:{
      backgroundColor:'rgba(52, 52, 52, 0)',   
      borderRadius:25,
      width:200,
      position:'absolute',
      top:'1%',
      left:'-45%',
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
  },

  btnTxt: {
    fontSize: 20,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center",
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