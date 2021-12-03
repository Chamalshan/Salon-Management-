
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

const ProfileScreen=({navigation,route})=>{

    const [userData, setUserData] = useState(null);
    const [name, setname]= useState();
    const [mobileno, setmobileno ] = useState();
    const [location, setlocation] = useState();
    const [website, setwebsite] = useState();
    const [regno, setregno] = useState();
    const [userImg,setimg] = useState();
    const [image, setImage] = useState(null);
    console.log(navigation)
    const {id}=route.params.uId;
    
    console.log('Profile',id)
    

    const profile= async() => {
        console.log("x")
        const currentuser = await 
            firebase
            .firestore()
            .collection('shop')
            .doc(id)
            .get()
            .then((documentSnapshot) => {
                // console.log(documentSnapshot);
            console.log('User data 11: ', documentSnapshot.data().name);
            setUserData(documentSnapshot.data().name);
            setname(documentSnapshot.data().name);
            setmobileno(documentSnapshot.data().mobileno);
            setlocation(documentSnapshot.data().location);
            setwebsite(documentSnapshot.data().website);
            setregno(documentSnapshot.data().regno);
            setimg(documentSnapshot.data().userImg);
            })
            .catch(error => {
                console.log(error);
              })
    }


    
    
    useEffect(() =>{
        profile();
    }, []);
    return (
            <ImageBackground style={styles.container} source={require("../assets/bg-01.png")}>
            <View style={styles.profileCon}>
                <Text style={styles.profiletext}>Profile</Text>

                <View
              style={styles.profilepic}>
              <ImageBackground
                source={{
                  uri: image
                    ? image
                    : userImg ||
                      'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg'
                    
                }}
                style={{height: 75, width: 75}}
                imageStyle={{borderRadius: 50}}>
                
                </ImageBackground>
            </View>
                <Text style={styles.nametext}       >{name} </Text>
                <Text style={styles.telephonetxt}   >Telephone    : {mobileno}</Text>
                <Text style={styles.addresstxt}     >Address        : {location}</Text>
                <Text style={styles.gendertxt}      >Website         : {website}</Text>
                <Text style={styles.dobtxt}         >Register No   : {regno}</Text>

                <TouchableOpacity style={styles.editbtn}
                onPress={() =>navigation.navigate("Salonedit2",{id})}>
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
    );
}

export default ProfileScreen;

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
  