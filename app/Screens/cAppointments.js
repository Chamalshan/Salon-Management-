import React, { useState,useEffect }  from 'react';
import { Text,
    StyleSheet, 
    View,
    Platform,
    ImageBackground,
    Image,
    TouchableOpacity,
    TextInput,
    FlatList } from 'react-native';
import KeyboardAvoidingWrapper from '../Components/KeyboardAvoidingWrapper';
import * as firebase from 'firebase';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const CappointmentScreen=({navigation,route})=>{
    const id=route.params.uId;
    console.log('Appointment',id)
    const [userData, setUserData] = useState(null);
    const [currentdate,setcurrentdate]= useState();
    const [sid,setsid]=useState();
    const [shop,setshop]= useState(null);
    const fieldPath = new firebase.firestore.FieldPath('appointment', 'cid');

    const getAppointments = async() => {
        try{
            const list=[];
            // setcurrentdate(Date.now);
            // console.log(currentdate);

            const currentappo = await firebase
            .firestore()
            .collection('appointment')
            // .orderBy('cid')
            .where('cid','==',[(id)])
            // .limitToFirst(10)
            .get()
            .then((querySnapshot)=>{
    
                querySnapshot.forEach((doc) => {
                    const {
                      id,
                      date,
                      time,
                    //   location,
                      
                    } = doc.data();
          
                    
                    list.push({
                      id: doc.id,

                      date,
                      time,
                    //   location,
                      
                    });
                    setsid(doc.id);
                  }
                  );
                  
                })
            setshop(list);
            console.log(list);
            }catch(e){
                console.log(e);
            }
    }  

    // const sendComfirm=()=>{
        

    //     firebase
    //     .firestore()
    //     .collection('appointment')
    //     .doc(sid)
    //     .update({
    //       state:'confirmed',
    //       // service:userData.service,
    //     })
    //     .then(() => {
    //       console.log('Confirmed');
    //       alert('Appointment Confirmed');
    //       // let uId= id;
    //       navigation.navigate('ShowAppointment');
    //       // console.log('logedin as customer',uId);
    //     }
    //     )
    // }

    // const sendCancel=()=>{
        

    //     firebase
    //     .firestore()
    //     .collection('appointment')
    //     .doc(sid)
    //     .update({
    //       state:'cancelled',
    //       // service:userData.service,
    //     })
    //     .then(() => {
    //       console.log('Cancelled');
    //       alert('Appointment Cancelled');
    //       // let uId= id;
    //       navigation.navigate('CancelledAppointments');
    //       // console.log('logedin as customer',uId);
    //     }
    //     )
    // }

    

    const onLocationPress=()=>{
        navigation.navigate('mapScreen');
    }

    

    const Item = ({ date,time }) => (
      
        
            <View style={styles.appointmentbox}>
                <Text style={styles.intext1}> Appointment  </Text>
              <Text style={styles.intext2}>Date: {date}</Text>
              <Text style={styles.intext2}>Time: {time}</Text>
                <TouchableOpacity style={styles.okicon} onPress={() =>{sendComfirm()}}>
                    <Ionicons name="md-checkmark-circle" size={45} color="green" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.closeicon} onPress={() =>{sendCancel()}}>
                    <AntDesign name="closecircle" size={39} color="red"/> 
                </TouchableOpacity>  
            </View>
        
        );

        const renderItem = ({ item }) => (
            <Item date={item.date} time={item.time}/>
            );
    

            useEffect(()=>{
                getAppointments();
            }, []);


    return (
            <ImageBackground style={styles.container} source={require("../assets/bg-01.png")}>
            <View style={styles.appoinmentTextCont}>
                <Text style={styles.appoinmenttext}>Appointments </Text>
                <View style={{top:'10%'}} >
                        <FlatList 
                            data={shop}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                            showsVerticalScrollIndicator={false}
                            
                        />
                    </View>
            
            </View>
            </ImageBackground>
    );
}

export default CappointmentScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFE5DA',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },

    appoinmentTextCont: {
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
        top:0,
        // left:"-45%",
        color:"#3A292A",
        position:"absolute", 
        
    },

    penddingCont:{
        flexGrow: 1,
        alignItems:"flex-end",
        justifyContent:"center",
        marginVertical:16,
        flexDirection:'row',
    },

    pendingtext:{
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:30,
        top:"0%",
        // left:"35%",
        color:"#3A292A",
        position:'absolute',     
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
        //  top:"30%",           
        width:375,
        height:150,
        backgroundColor: '#fff',
        position: 'relative',
        borderRadius:15,
        elevation:5,
        shadowColor:'#000',
        shadowOffset:{
          width:1,
          height:1,
        },
        shadowRadius:100,
        // top:'10%',
        // left:'-45%',
        marginTop:10,
    },

    appointmenttxtbtn:{
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:25,
         top:"10%",
         left:"10%",
        color:"#3A292A",
        position:'relative',
    },

    appointmentCont:{
        backgroundColor:'rgba(52, 52, 52, 0)',   
        borderRadius:25,
        width:200,
        position:'relative',
        // top:'35%',
        // left:'-45%',
    },

    intext2:{
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:20,
         top:"10%",
         left:"10%",
        color:"#3A292A",
        // position:"absolute",
        marginTop:10,
    },

    intext1:{
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:25,
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
