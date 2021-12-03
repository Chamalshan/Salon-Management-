import React, { useState,useEffect }  from 'react';
import {  StyleSheet, Text, View,ImageBackground,TouchableOpacity ,Image ,FlatList, Alert} from 'react-native';
import KeyboardAvoidingWrapper from '../Components/KeyboardAvoidingWrapper';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import * as firebase from 'firebase';
import { DataProvider,LayoutProvider,RecyclerListView} from 'recyclerlistview';
import { Query } from 'parse';
import { TouchableHighlight } from 'react-native-gesture-handler';

const ProfileScreen = ({navigation,route}) => {
    
    const [userData, setUserData] = useState(null);
    const [currentdate,setcurrentdate]= useState();
    const [sid,setsid]=useState();
    // const cid=route.params.uId;
    // console.log('Pending Appontment',cid);
    const [shop,setshop]= useState(null);
    const fieldPath = new firebase.firestore.FieldPath('appointment', 'date');

    const getAppointments = async() => {
        try{
            const list=[];
            // setcurrentdate(Date.now);
            // console.log(currentdate);

            const currentappo = await firebase
            .firestore()
            .collection('appointment')
            // .orderBy('date')
            .where('state',"==",'pending')
            // .limitToFirst(10)
            .get()
            .then((querySnapshot)=>{
    
                querySnapshot.forEach((doc) => {
                    const {
                      id,
                      date,
                      time,
                      service,
                      
                    } = doc.data();
          
                    
                    list.push({
                      id: doc.id,

                      date,
                      time,
                      service,
                      
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

    const sendComfirm=()=>{
        

        firebase
        .firestore()
        .collection('appointment')
        .doc(sid)
        .update({
          state:'confirmed',
          // service:userData.service,
        })
        .then(() => {
          console.log('Confirmed');
          alert('Appointment Confirmed');
          // let uId= id;
          navigation.navigate('ShowAppointment');
          // console.log('logedin as customer',uId);
        }
        )
    }
    

    const sendCancel=()=>{
        

        firebase
        .firestore()
        .collection('appointment')
        .doc(sid)
        .update({
          state:'cancelled',
          // service:userData.service,
        })
        .then(() => {
          console.log('Cancelled');
          alert('Appointment Cancelled');
          // let uId= id;
          navigation.navigate('CancelledAppointments');
          // console.log('logedin as customer',uId);
        }
        )
    }

    

    const onLocationPress=()=>{
        navigation.navigate('mapScreen');
    }

    

    const Item = ({ date,time,id,service }) => (
      
        
            <View style={styles.appointmentbox}>
                <Text style={styles.intext1}> Appointment {id} </Text>
              <Text style={styles.intext2}>Date: {date}</Text>
              <Text style={styles.intext2}>Time: {time}</Text>
              <Text style={styles.intext2}>Service: {service}</Text>
                <TouchableOpacity style={styles.okicon} onPress={() =>{sendComfirm()}}>
                    <Ionicons name="md-checkmark-circle" size={45} color="green" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.closeicon} onPress={() =>{sendCancel()}}>
                    <AntDesign name="closecircle" size={39} color="red"/> 
                </TouchableOpacity>  
            </View>
        
        );

        const renderItem = ({ item }) => (
            <Item date={item.date} time={item.time} service={item.service}/>
            );
    

            useEffect(()=>{
                getAppointments();
            }, []);

    return (
        
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


                    {/* <View style={styles.appointmentbox}>
                        <Text style={styles.appointmenttxtbtn}>
                            Appointment 1
                        </Text>
                        <Text style={styles.intext2}>Date</Text>
                        <Text style={styles.intext2}>Time</Text>
                        <Text style={styles.intext2}>Service</Text>
                        <TouchableOpacity style={styles.okicon} onPress={() =>{onLocationPress()}}>
                        <Ionicons name="md-checkmark-circle" size={45} color="green" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.closeicon}>
                        <AntDesign name="closecircle" size={39} color="red"/> 
                        </TouchableOpacity>
                    </View> */}

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
        marginTop:8,
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
