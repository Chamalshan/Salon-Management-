import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect }  from 'react';
// import { firebase } from '../navigation/firebase';
import { StyleSheet,
     Text, 
     View,
     Platform,
    ImageBackground,
    Image,
    TouchableOpacity,
    TextInput,
    Button
} from 'react-native';
import { SearchBar } from 'react-native-screens';
import KeyboardAvoidingWrapper from '../Components/KeyboardAvoidingWrapper';
import { UserLogOut } from '../Components/UserLogOut';
import CategoryScreen from './CategoryScreen';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

// import { uId } from '../Components/Form';

const CHomeScreen=({route,navigation})=>{
    
    const [userData, setUserData] = useState(null);
    const [firstname, setfirstname]= useState();

    console.log(navigation)
    const {id}=route.params.uId;
    console.log('Home',id)
    const profile= async() => {
        const currentuser = await firestore()
            .collection('users')
            .doc(id)
            .get()
            .then((documentSnapshot) => {
            console.log('User data 11: ', documentSnapshot.data().firstname);
            setUserData(documentSnapshot.data().firstname);
            })
            .catch(error => {
                console.log(error);
              })
    }

    

    // const usersRef = firebase
    //     .auth()
    //     .firestore().collection('users')
    //     .where(id = 'id')
    //     .get()
    //     .then(firestoreDocument=> {
    //         console.log('User data 222: ', firestoreDocument.data());
    //     });
useEffect(() =>{
    profile();
}, []);

    return (
        <KeyboardAvoidingWrapper>
            <ImageBackground style={styles.container} source={require("../assets/bg-01.png")}>
            <View style={styles.helloTextCont}>
                <Text style={styles.hellotext1}>Hello {firstname}!</Text>    
                <Image
                    style={styles.bell}
                    source={require('../assets/Bell.png')}
                />
                <Image
                    style={styles.lines}
                    source={require('../assets/tree.png')}
                />
            
                <TextInput style={styles.SearchBarinput} 
                        underlineColorAndroid='rgba(0,0,0,0)' 
                        placeholder='Search'
                        autoCapitalize="none"
                        placeholderTextColor='#3A292A'
                    />

                <View style={styles.advertismentbox}/>

                
                <Text style={styles.categorytext}>Categories</Text>
                    <TouchableOpacity
                        style={styles.viewalltextCont}
                        onPress={() => navigation.navigate('Category')}
                    >
                    <Text style={styles.viewalltext}>View All</Text>
                    </TouchableOpacity>
                <View style={styles.categorybox1}/>
                <View style={styles.categorybox2}/> 
                                  
            </View>
            </ImageBackground>
        </KeyboardAvoidingWrapper>
    );
}

export default CHomeScreen;

const styles = StyleSheet.create({
    container: {
            flexGrow: 1,
            backgroundColor:"#EFE5DA",
            justifyContent:'center',
            alignItems:'center',
    },

    helloTextCont:{
        flexGrow: 1,
        alignItems:"flex-end",
        justifyContent:"center",
        marginVertical:16,
        flexDirection:'row'
    },
    
    hellotext1:{
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:30,
        top:0,
        left:"-45%",
        color:"#3A292A",
        position:"absolute",    
    },

    bell:{
        top:"1%",
        left:"20%",
        position:"absolute"
    },

    lines:{
        top:"1%",
        left:"35%",
        position:'absolute',
    },

    SearchBarinput:{
        width:375,
        height:50,
        backgroundColor:'#fff',
        borderRadius:15,
        paddingHorizontal:16,
        fontSize:20,
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
        position:"absolute",
        top:"8%",
    },

    advertismentbox:{
        top:"20%",           
        width:375,
        height:150,
        backgroundColor: '#fff',
        position: 'absolute',
        borderRadius:15,
        elevation:5,
        shadowColor:'#000',
        shadowOffset:{
          width:1,
          height:1,
        },
        shadowRadius:100,
    },

    categorytext:{
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:25,
        top:"45%",
        left:"-45%",
        color:"#3A292A",
        position:"absolute",
    },
    
    viewalltext:{
        fontFamily:'Roboto',
        fontSize:25,
        textDecorationLine: 'underline',
        // top:"45%",
        // left:"25%",
        color:"#3A292A",
        // position:"absolute",
    },

    viewalltextCont:{
        backgroundColor:'rgba(52, 52, 52, 0)',   
        borderRadius:25,
        width:200,
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
        position:'absolute',
        top:'45%',
        left:'24%',
      },

    categorybox1:{
        top:"51%",
        left:"-45%",           
        width:375,
        height:150,
        backgroundColor: '#fff',
        position: 'absolute',
        borderRadius:15,
        elevation:5,
        shadowColor:'#000',
        shadowOffset:{
          width:1,
          height:1,
        },
        shadowRadius:100,
    },

    categorybox2:{
        top:"75%",
        left:"-45%",           
        width:375,
        height:150,
        backgroundColor: '#fff',
        position: 'absolute',
        borderRadius:15,
        elevation:5,
        shadowColor:'#000',
        shadowOffset:{
          width:1,
          height:1,
        },
        shadowRadius:100,
    },

});
  