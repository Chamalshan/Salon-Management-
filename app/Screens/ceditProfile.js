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

export default function CustReg({ navigation,route }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [gender, setgender] = useState("");
  const [mobileno, setmobile] = useState("");
  const [address, setaddress] = useState("");
  const [confirmPassword, setcofirmPassword] = useState("");
  const [image, setImage] = useState(null);
  const [selectedValue, setSelectedValue] = useState("Gender")
  const [state, setState] = useState("");
  const [userData, setUserData] = useState(null);
  const [getfirstname, setgetfirstname] = useState();
  const [getlastname, setgetlastname] = useState();
  const [gettelephone, setgettelephone] = useState();
  const [getaddress, setgetaddress] = useState();
  const [getgender, setgetgender] = useState();
  const [getemail, setgetemail]=useState();
  const [getdob, setgetdob] = useState();

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

  const profile = async () => {
      const currentuser = await firebase
        .firestore()
        .collection("users")
        .doc(id)
        .get()
        .then((documentSnapshot) => {
          console.log(
            "User data 11: ",
            documentSnapshot.data().firstname.lastname
          );
          setUserData(documentSnapshot.data().firstname);
          setgetfirstname(documentSnapshot.data().firstname);
          setgetlastname(documentSnapshot.data().lastname);
          setgettelephone(documentSnapshot.data().mobileno);
          setgetaddress(documentSnapshot.data().address);
          setgetgender(documentSnapshot.data().gender);
          setgetemail(documentSnapshot.data().email);
        //   setgetpassword(documentSnapshot.data().password);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  useEffect(() => {
    profile();
  }, []);
const onUpdatePress = () => {

    // if (password !== confirmPassword) {
    //   alert("Passwords don't match.");
    //   return;
    // }

    const data = {
        email,
        firstname,
        lastname,
        gender,
        mobileno,
        address,
        // password,
    };
    const usersRef = firebase.firestore().collection("users")
        usersRef
        .doc(id)
        .update(data)
        .then((firestoreDocument) => {
            let uId= {id:id};
            navigation.navigate('Login');
        })
};
  const PickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

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
        {/* <Image
          style={{width:105, height:111, top:'2%'}}
          source={require('../assets/pic.png')}/> */}
        <Button title="Choose Image" onPress={PickImage} />
        {image && (
          <Image
            source={{ uri: image }}
            style={{
              width: 200,
              height: 200,
            }}
          />
        )}

        <Text></Text>

        <TextInput
          style={styles.textinput1}
          placeholder={getfirstname}
          defaultValue={getfirstname}
          underlineColorAndroid={"transparent"}
          labelValue={getfirstname}
          onChangeText={(firstname) => setfirstname(firstname)}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <TextInput
          style={styles.textinput2}
          placeholder={getlastname}
          defaultValue={getlastname}
          underlineColorAndroid={"transparent"}
          labelValue={getlastname}
          onChangeText={(lastname) => setlastname(lastname)}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <TextInput
          style={styles.textinput}
          placeholder={getemail}
          defaultValue={getemail}
          labelValue={getemail}
          onChangeText={(userEmail) => setEmail(userEmail)}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <View style={styles.pickercont}>
            <Picker
                itemStyle={{ backgroundColor: "#fff" }}
                placeholder="Gender"
                labelValue={getgender}
                selectedValue={selectedValue}
                    onValueChange={(gender, itemIndex) => {
                    if (gender !== "disabled") {
                    setSelectedValue(gender);
                    }
                    setgender(gender);
                }}
            >
          <Picker.Item label="Gender" value="disabled" color="#aaa" />
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
        </Picker>
        </View>

        <TextInput
          style={styles.textinput4}
          placeholder="Birthday"
          underlineColorAndroid={"transparent"}
        />

        <TextInput
          style={styles.textinput5}
          defaultvalue={gettelephone}
          placeholder={gettelephone}
          underlineColorAndroid={"transparent"}
          labelValue={gettelephone}
          onChangeText={(mobileno) => setmobile(mobileno)}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <TextInput
          style={styles.textinput5}
          
          defaultValue={getaddress}
          placeholder={getaddress}
          underlineColorAndroid={"transparent"}
          labelValue={getaddress}
          onChangeText={(address) => setaddress(address)}
          autoCapitalize="none"
          autoCorrect={false}
        />

        {/* <TextInput
          style={styles.textinput5}
          defaultValue={getpassword}
          placeholder={getpassword}
          labelValue={password}
          onChangeText={(userPassword) => setPassword(userPassword)}
          placeholder="Password"
          secureTextEntry={true}
        />

        <TextInput
          style={styles.textinput5}
          placeholder=" Confirm Password"
          underlineColorAndroid={"transparent"}
          secureTextEntry={true}
          labelValue={confirmPassword}
          onChangeText={(confirmPassword) => setcofirmPassword(confirmPassword)}
        /> */}

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
    position: "relative",
    top: "1%",
    left: "-25%",
  },

  header: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 30,
    top: "0%",
    color: "#3A292A",
    position: "relative",
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
    width: 175,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#3A292A",
    top: "-6%",
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
    top: "-14%",
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
