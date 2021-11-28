import React from 'react'
import KeyboardAvoidingWrapper from './KeyboardAvoidingWrapper';
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


const shopcard = () => {

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

    useEffect(() => {
        getUser();
    }, []);

    return (
        <KeyboardAvoidingWrapper>
            <ImageBackground 
                style={styles.container}
                source={require("../assets/bg-01.png")}>
            {/* <View
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
            </ImageBackground>
            </View> */}

            
            </ImageBackground>
        </KeyboardAvoidingWrapper>
    )
}

export default shopcard;
