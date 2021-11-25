import React from 'react'
import { StyleSheet, Text, View,ImageBackground,TouchableOpacity ,Image} from 'react-native';
import KeyboardAvoidingWrapper from '../Components/KeyboardAvoidingWrapper';

const AppointmentScreen = ({navigation,route}) => {
    const id=route.params.uId;
    console.log('Appointment',id);

    const pendapp =()=>{
        let uId=id;
        navigation.navigate('PendingAppointment',{uId});
    }

    const getAppointment = async() => {
        const currentUser = await firebase 
        .firestore()
        .collection('Appointment')
        .doc()
        .get()
        .then((documentSnapshot) => {
          if( documentSnapshot.exists ) {
            console.log('User Data', documentSnapshot.data());
            setUserData(documentSnapshot.data());
          }
        })
    }
 
    return (
        <KeyboardAvoidingWrapper>
            <ImageBackground style={styles.container} source={require("../assets/bg-01.png")}>
                <View style={styles.appoinmentTextCont}>
                    <Text style={styles.appoinmenttext}>Appointments </Text>

                    <TouchableOpacity style={styles.backbutton}
                    onPress={() => navigation.navigate("Home")}>
                    <Image
                        style={{width:28, height:28}}
                        source={require('../assets/back.png')}
                    /> 
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.pendingCont}
                        onPress={() => pendapp()}
                    >
                        <View style={styles.pendingbox}>
                            <Text style={styles.pendingtxt}>Pending</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.appointmentCont}
                        onPress={() => navigation.navigate('ShowAppointment')}
                    >
                        <View style={styles.appointmentbox}>
                            <Text style={styles.appointmenttxtbtn}>Appointments</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cancelledCont}
                        onPress={() => navigation.navigate('CancelledAppointments')}
                    >
                        <View style={styles.cancelledbox}>
                            <Text style={styles.cancelledtxt}>Cancelled</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.completedCont}
                        onPress={() => navigation.navigate('CompletedAppointments')}
                    >
                        <View style={styles.completedbox}>
                            <Text style={styles.completedtxt}>Completed</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        </KeyboardAvoidingWrapper>
    )
}

export default AppointmentScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EFE5DA',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },

    appoinmentTextCont:{
        flexGrow: 1,
        alignItems:"flex-end",
        justifyContent:"center",
        marginVertical:16,
        flexDirection:'row'
    },

    appoinmenttext:{
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:30,
        top:"0%",
        left:"-20%",
        color:"#3A292A",
        position:"absolute", 
        
    },

    backbutton:{
        backgroundColor:'rgba(52, 52, 52, 0)',   
        borderRadius:25,
        width:200,
        position:'absolute',
        top:'1%',
        left:'-45%',
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

    pendingbox:{
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

    pendingtxt:{
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:25,
         top:"10%",
         left:"10%",
        color:"#3A292A",
        // position:"absolute",
    },

    pendingCont:{
        backgroundColor:'rgba(52, 52, 52, 0)',   
        borderRadius:25,
        width:200,
        position:'absolute',
        top:'10%',
        left:'-45%',
    },

    cancelledbox:{
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

    cancelledtxt:{
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:25,
         top:"10%",
         left:"10%",
        color:"#3A292A",
        // position:"absolute",
    },

    cancelledCont:{
        backgroundColor:'rgba(52, 52, 52, 0)',   
        borderRadius:25,
        width:200,
        position:'absolute',
        top:'60%',
        left:'-45%',
    },

    completedbox:{
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

    completedtxt:{
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:25,
         top:"10%",
         left:"10%",
        color:"#3A292A",
        // position:"absolute",
    },

    completedCont:{
        backgroundColor:'rgba(52, 52, 52, 0)',   
        borderRadius:25,
        width:200,
        position:'absolute',
        top:'85%',
        left:'-45%',
    },

});