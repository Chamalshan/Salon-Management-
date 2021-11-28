import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect }  from 'react';
import { StyleSheet,Text, 
         View,
        Platform,
        ImageBackground,
        Image,
        TouchableOpacity,
        TextInput,
        Button 
                } from 'react-native';
import KeyboardAvoidingWrapper from '../Components/KeyboardAvoidingWrapper';
import Advertisements from './Advertisements';
import * as firebase from 'firebase';

const HomeScreen=({navigation,route})=>{
    const [userData, setUserData] = useState(null);
    const [name, setname]= useState();
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    console.log(navigation)
    const {id}=route.params.uId;
    console.log('Home',id)

    const profile= async() => {
        const currentuser = await 
            firebase
            .firestore()
            .collection('shop')
            .doc(id)
            .get()
            .then((documentSnapshot) => {
            console.log('User data 11: ', documentSnapshot.data().name);
            setUserData(documentSnapshot.data().name);
            setname(documentSnapshot.data().name);
            })
            .catch(error => {
                console.log(error);
              })
    }
    useEffect(() =>{
        profile();
    }, []);

    const appnavi=()=>{
        let uId= id;
        navigation.navigate('Appointment',{uId})
    }

    const appnaviadds=()=>{
        let uId= id;
        navigation.navigate('Advertisments',{uId})
    }

    return (
            <KeyboardAvoidingWrapper>
                <ImageBackground style={styles.container} source={require("../assets/bg-01.png")}>
                <View style={styles.helloTextCont}>
                    <Text style={styles.hellotext1}>Hello {name}!</Text>    
    
                    <TouchableOpacity style={styles.appointmentCont}
                        onPress={() =>appnavi()}
                    >
                        <View style={styles.appointmentbox}>
                            <Text style={styles.appointmenttxt}>Appointments</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.advertismentCont}
                        onPress={() => appnaviadds()}
                    >
                        <View style={styles.advertismentbox}>
                            <Text style={styles.advertismenttxt}>Advertisments</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.editprofileCont}
                        onPress={() => navigation.navigate('EditSalonProfile')}
                    >
                        <View style={styles.editprofilebox}>
                            <Text style={styles.editprofiletxt}>Edit Profile</Text>
                        </View>
                    </TouchableOpacity>
                    
                 
                </View>
                </ImageBackground>
            </KeyboardAvoidingWrapper>
    );
}

export default HomeScreen;

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


    appointmentbox:{
        // top:"20%",           
        width:375,
        height:150,
        backgroundColor: '#fff',
        // position: 'absolute',
        borderRadius:15,
        elevation:5,
        shadowColor:'#000',
        shadowOffset:{
          width:1,
          height:1,
        },
        shadowRadius:100,
    },

    appointmenttxt:{
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:25,
         top:"10%",
         left:"10%",
        color:"#3A292A",
        // position:"absolute",
    },

    appointmentCont:{
        backgroundColor:'rgba(52, 52, 52, 0)',   
        borderRadius:25,
        width:200,
        position:'absolute',
        top:'10%',
        left:'-45%',
      },

    advertismentbox:{
        // top:"20%",           
        width:375,
        height:150,
        backgroundColor: '#fff',
        // position: 'absolute',
        borderRadius:15,
        elevation:5,
        shadowColor:'#000',
        shadowOffset:{
          width:1,
          height:1,
        },
        shadowRadius:100,
    },

    advertismenttxt:{
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:25,
         top:"10%",
         left:"10%",
        color:"#3A292A",
        // position:"absolute",
    },

    advertismentCont:{
        backgroundColor:'rgba(52, 52, 52, 0)',   
        borderRadius:25,
        width:200,
        position:'absolute',
        top:'40%',
        left:'-45%',
      },

    editprofilebox:{
        // top:"20%",           
        width:375,
        height:150,
        backgroundColor: '#fff',
        // position: 'absolute',
        borderRadius:15,
        elevation:5,
        shadowColor:'#000',
        shadowOffset:{
          width:1,
          height:1,
        },
        shadowRadius:100,
    },

    editprofiletxt:{
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:25,
         top:"10%",
         left:"10%",
        color:"#3A292A",
        // position:"absolute",
    },

    editprofileCont:{
        backgroundColor:'rgba(52, 52, 52, 0)',   
        borderRadius:25,
        width:200,
        position:'absolute',
        top:'70%',
        left:'-45%',
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
    

    categorybox1:{
        top:"52%",
        left:"-40%",           
        width:300,
        height:100,
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
        top:"52%",
        left:"3%",           
        width:150,
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

    categorybox3:{
        top:"75%",
        left:"-40%",           
        width:150,
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

    categorybox4:{
        top:"75%",
        left:"3%",           
        width:150,
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

    categorybox5:{
        top:"100%",
        left:"3%",           
        width:150,
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
  