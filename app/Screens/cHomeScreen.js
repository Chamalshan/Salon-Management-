import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
// import { firebase } from '../navigation/firebase';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import { SearchBar } from "react-native-elements";
import KeyboardAvoidingWrapper from "../Components/KeyboardAvoidingWrapper";
import { UserLogOut } from "../Components/UserLogOut";
import CategoryScreen from "./CategoryScreen";
import * as firebase from "firebase";
import firestore from "@firebase/firestore";

// import { uId } from '../Components/Form';

const CHomeScreen = ({ route, navigation }) => {
  const [userData, setUserData] = useState(null);
  const [firstname, setfirstname] = useState();
  const [searchQuery, setSearchQuery] = React.useState("");
  const [image, setImage] = useState(null);
  const [userImg,setimg] = useState();
  const onChangeSearch = (query) => setSearchQuery(query);

  console.log(navigation);
  const { id } = route.params.uId;
  console.log("Home", id);

  const profile = async () => {
    const currentuser = await firebase
      .firestore()
      .collection("users")
      .doc(id)
      .get()
      .then((documentSnapshot) => {
        console.log("User data 11: ", documentSnapshot.data().firstname);
        setUserData(documentSnapshot.data().firstname);
        setfirstname(documentSnapshot.data().firstname);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getUser = async() => {
    const currentUser = await firebase 
    .firestore()
    .collection('adds')
    .doc('01mQwu24TLTW9zXNgqyTokVk69r2')
    .get()
    .then((documentSnapshot) => {
      if( documentSnapshot.exists ) {
        console.log('User Data', documentSnapshot.data());
        setUserData(documentSnapshot.data().uri);
        setimg(documentSnapshot.data().uri);
        
      }
    })
}
  useEffect(() => {
    profile();
    getUser();
  }, []);

  // const usersRef = firebase
  //     .auth()
  //     .firestore().collection('users')
  //     .where(id = 'id')
  //     .get()
  //     .then(firestoreDocument=> {
  //         console.log('User data 222: ', firestoreDocument.data());
  //     });

  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/bg-01.png")}
    >
      <View style={styles.helloTextCont}>
        <Text style={styles.hellotext1}>Hello {firstname} !</Text>
        <Image style={styles.bell} source={require("../assets/Bell.png")} />
        <Image style={styles.lines} source={require("../assets/tree.png")} />

        <SearchBar
          platform="android"
          cancelButtonTitle="cancel"
          round
          searchIcon={{ size: 24 }}
          containerStyle={styles.SearchBarinput}
          inputContainerStyle={{ width: 375, top: "-2%", left: "0%" }}
          placeholder="Search Salon"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />

        <View style={styles.advertismentbox} >
        <ImageBackground
                source={{
                    uri: image
                    ? image
                    : userImg ||
                      'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg'
                }}
                style={{height: 150, width: 375}}
                imageStyle={{borderRadius: 20}}>
                
                </ImageBackground>
        </View>

        <Text style={styles.categorytext}>Categories</Text>
        <TouchableOpacity
          style={styles.categorybox1}
          onPress={() => navigation.navigate("ServiceScreen", { id })}
        >
          <ImageBackground
            style={{
              height: 150,
              width: 375,
              position: "absolute",
              borderRadius: 20,
            }}
            source={require("../assets/Hair.png")}
          >
            <View style={styles.txtback}>
              <Text style={styles.btnTxt}>Hair</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <View style={styles.categorybox2} />
        <TouchableOpacity
          style={styles.categorybox2}
          onPress={() => navigation.navigate("ServiceScreen2", { id })}
        >
          <ImageBackground
            style={{ height: 150, width: 375, position:'absolute', borderRadius: 15, }}
            source={require("../assets/SkinCare.jpg")}
          >
            <View style={styles.txtback}>
              <Text style={styles.btnTxt2}>Skin and Beauty</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default CHomeScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#EFE5DA",
    justifyContent: "center",
    alignItems: "center",
  },

  helloTextCont: {
    flexGrow: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    marginVertical: 16,
    flexDirection: "row",
  },

  btnTxt2: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 30,
    // fontWeight: "500",
    color: "#fff",
    textAlign: "center",
    top:'35%',
  },

  hellotext1: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 30,
    top: 0,
    left: "-45%",
    color: "#3A292A",
    position: "absolute",
  },

  bell: {
    top: "1%",
    left: "20%",
    position: "absolute",
  },

  lines: {
    top: "1%",
    left: "35%",
    position: "absolute",
  },

  btnTxt: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 30,
    // fontWeight: "500",
    color: "#fff",
    textAlign: "center",
    top: "40%",
  },

  txtback: {
    width: 175,
    height: 150,
    backgroundColor: "rgba(52, 52, 52, 0.8)",
  },


  SearchBarinput: {
    width: 375,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingHorizontal: 16,
    fontSize: 20,
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
    position: "absolute",
    top: "8%",
  },

  advertismentbox: {
    top: "20%",
    width: 375,
    height: 150,
    backgroundColor: "#fff",
    position: "absolute",
    borderRadius: 15,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 100,
  },

  categorytext: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 25,
    top: "45%",
    left: "-40%",
    color: "#3A292A",
    position: "absolute",
  },

  viewalltext: {
    fontFamily: "Roboto",
    fontSize: 25,
    textDecorationLine: "underline",
    // top:"45%",
    // left:"25%",
    color: "#3A292A",
    // position:"absolute",
  },

  viewalltextCont: {
    backgroundColor: "rgba(52, 52, 52, 0)",
    borderRadius: 25,
    width: 200,
    // marginVertical:10,
    // paddingVertical:12,
    // elevation:5,
    // shadowColor:'#000',
    // shadowOffset:{
    //   width:1,
    //   height:1,
    // },
    // shadowRadius:100,
    // marginVertical:10,
    // marginHorizontal:10,
    position: "absolute",
    top: "45%",
    left: "24%",
  },

  categorybox1: {
    top: "51%",
    left: "-45%",
    width: 375,
    height: 150,
    backgroundColor: "#fff",
    position: "absolute",
    borderRadius: 30,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 100,
  },

  categorybox2: {
    top: "75%",
    left: "-45%",
    width: 375,
    height: 150,
    backgroundColor: "#fff",
    position: "absolute",
    borderRadius: 15,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 100,
  },
});
