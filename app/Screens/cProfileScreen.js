
import React, { useState,useEffect }  from 'react';
import { Text,
    StyleSheet, 
    View,
    Platform,
   ImageBackground,
   Image,
   TouchableOpacity,
   TextInput } from 'react-native';
import KeyboardAvoidingWrapper from '../Components/KeyboardAvoidingWrapper';
import { firebase } from '../navigation/firebase';

const cProfileScreen=({navigation,route})=>{

    const [userData, setUserData] = useState(null);
    const [firstname, setfirstname]= useState();
    const [lastname, setlastname] = useState();
    const [telephone, settelephone] = useState();
    const [address, setaddress] = useState();
    const [gender, setgender] = useState();
    const [dob, setdob] = useState();

    console.log(navigation)
    const {id}=route.params.uId;
    console.log('Profile',id)
    

    const profile= async() => {
        console.log("x")
        const currentuser = await 
            firebase
            .firestore()
            .collection('users')
            .doc(id)
            .get()
            .then((documentSnapshot) => {
                // console.log(documentSnapshot);
            console.log('User data 11: ', documentSnapshot.data().firstname);
            setUserData(documentSnapshot.data().firstname);
            setfirstname(documentSnapshot.data().firstname);
            setlastname(documentSnapshot.data().lastname);
            settelephone(documentSnapshot.data().mobileno);
            setaddress(documentSnapshot.data().address);
            setgender(documentSnapshot.data().gender);
            
            })
            .catch(error => {
                console.log(error);
              })
    }
    useEffect(() =>{
        profile();
    }, []);
    return (
        <KeyboardAvoidingWrapper>
            <ImageBackground style={styles.container} source={require("../assets/bg-01.png")}>
            <View style={styles.profileCon}>
                <Text style={styles.profiletext}>Profile</Text>

                <Image
                    style={styles.profilepic}
                    source={require("../assets/pic.png")}
                />
                <Text style={styles.nametext}       >{firstname} {lastname}</Text>
                <Text style={styles.telephonetxt}   >Telephone  : {telephone}</Text>
                <Text style={styles.addresstxt}     >Address      : {address}</Text>
                <Text style={styles.gendertxt}      >Gender        : {gender}</Text>
                <Text style={styles.dobtxt}         >Birth Date   :</Text>

                <TouchableOpacity style={styles.editbtn}
                onPress={() =>navigation.navigate("CeditProfile",{id})}>
                    <Text style={styles.editbtnTxt}>
                     Edit Profile
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.logoutbtn}
                onPress={() =>navigation.navigate("Login")}>
                    <Text style={styles.logoutbtnTxt}>
                     Logout
                    </Text>
                </TouchableOpacity>
            </View>
            </ImageBackground>
        </KeyboardAvoidingWrapper>
    );
}

export default cProfileScreen;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor:"#EFE5DA",
        justifyContent:'center',
        alignItems:'center',
    },

    profileCon: {
        flexGrow: 1,
        alignItems:"flex-end",
        justifyContent:"center",
        marginVertical:16,
        flexDirection:'row'
    },

    profiletext:{
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:30,
        top:0,
        left:"-45%",
        color:"#3A292A",
        position:"absolute", 
        
    },

    profilepic:{
        top:"8%",
        position:"absolute",
    },

    nametext:{
        fontFamily:'Roboto',
        // fontWeight:'bold',
        fontSize:30,
        top:"25%",
        color:"#3A292A",
        position:"absolute", 
    },

    telephonetxt:{
        fontFamily:'Roboto',
        fontSize:25,
        top:"35%",
        left:"-40%",
        color:"#3A292A",
        position:"absolute", 
    },

    addresstxt:{
        fontFamily:'Roboto',
        fontSize:25,
        top:"40%",
        left:"-40%",
        color:"#3A292A",
        position:"absolute", 
    },

    gendertxt:{
        fontFamily:'Roboto',
        fontSize:25,
        top:"45%",
        left:"-40%",
        color:"#3A292A",
        position:"absolute", 
    },

    dobtxt:{
        fontFamily:'Roboto',
        fontSize:25,
        top:"50%",
        left:"-40%",
        color:"#3A292A",
        position:"absolute", 
    },

    editbtnTxt:{
        fontSize:20,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    },

    editbtn:{
        backgroundColor:'#3A292A',   
        borderRadius:25,
        width:"45%",
        marginVertical:10,
        paddingVertical:12,
        elevation:5,
        shadowColor:'#000',
        shadowOffset:{
            width:1,
            height:1,
        },
        shadowRadius:100,
        // marginVertical:10,
        //  marginHorizontal:10,
         position:'absolute',
        top:'60%',
        // left:'-47%',
    },

    deletebtnTxt:{
        fontSize:20,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    },

    deletebtn:{
        backgroundColor:'#3A292A',   
        borderRadius:25,
        width:"45%",
        marginVertical:10,
        paddingVertical:12,
        elevation:5,
        shadowColor:'#000',
        shadowOffset:{
            width:1,
            height:1,
        },
        shadowRadius:100,
        // marginVertical:10,
        //  marginHorizontal:10,
         position:'absolute',
        top:'60%',
        left:'2%',
    },

    logoutbtnTxt:{
        fontSize:20,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    },

    logoutbtn:{
        backgroundColor:'#3A292A',   
        borderRadius:25,
        width:"45%",
        marginVertical:10,
        paddingVertical:12,
        elevation:5,
        shadowColor:'#000',
        shadowOffset:{
            width:1,
            height:1,
        },
        shadowRadius:100,
        // marginVertical:10,
        //  marginHorizontal:10,
         position:'absolute',
        top:'70%',
        
    },
});
  