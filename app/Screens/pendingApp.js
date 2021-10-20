import React from 'react'
import {  StyleSheet, Text, View,ImageBackground,TouchableOpacity ,Image } from 'react-native';
import KeyboardAvoidingWrapper from '../Components/KeyboardAvoidingWrapper';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const ProfileScreen = ({navigation}) => {
    return (
        <KeyboardAvoidingWrapper>
            <ImageBackground style={styles.container} source={require("../assets/bg-01.png")}>
                <View style={styles.penddingCont}>
                    <Text style={styles.pendingtext}>Pending Appointments</Text>

                    <TouchableOpacity style={styles.backbutton}
                    onPress={() => navigation.navigate("Appointment")}>
                    <Image
                        style={{width:28, height:28}}
                        source={require('../assets/back.png')}
                    /> 
                    </TouchableOpacity>

                    {/* <Ionicons name="md-checkmark-circle" size={32} color="green" /> */}

                    <View style={styles.appointmentbox}>
                        <Text style={styles.appointmenttxtbtn}>
                            Appointment 1
                        </Text>
                        <Text style={styles.intext2}>Date</Text>
                        <Text style={styles.intext2}>Time</Text>
                        <Text style={styles.intext2}>Services</Text>
                        <TouchableOpacity style={styles.okicon}>
                        <Ionicons name="md-checkmark-circle" size={45} color="green" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.closeicon}>
                        <AntDesign name="closecircle" size={39} color="red"/> 
                        </TouchableOpacity>
                    </View>

                </View>
            </ImageBackground>
        </KeyboardAvoidingWrapper>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFE5DA',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },

    penddingCont:{
        flexGrow: 1,
        alignItems:"flex-end",
        justifyContent:"center",
        marginVertical:16,
        flexDirection:'row'
    },

    pendingtext:{
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:30,
        top:"0%",
        left:"-35%",
        color:"#3A292A",
        position:"absolute",     
    },

    backbutton:{
        backgroundColor:'rgba(52, 52, 52, 0)',   
        borderRadius:25,
        width:200,
        position:'absolute',
        top:'1%',
        left:'-47%',
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
        position:'absolute',
        top:'10%',
        left:'-45%',
    },

    appointmenttxtbtn:{
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
        top:'35%',
        left:'-45%',
    },

    intext2:{
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:20,
         top:"10%",
         left:"10%",
        color:"#3A292A",
        // position:"absolute",
    },

    okicon:{
        position:"absolute",
        top:"15%",
        left:"80%"
    },

    closeicon:{
        position:"absolute",
        top:"50%",
        left:"80%"
    },
});
