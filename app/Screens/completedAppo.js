import React, { useState,useEffect }  from 'react';
import {  StyleSheet, Text, View,ImageBackground,TouchableOpacity ,Image, FlatList } from 'react-native';
import KeyboardAvoidingWrapper from '../Components/KeyboardAvoidingWrapper';
import { Ionicons } from '@expo/vector-icons';
import * as firebase from 'firebase';
import { AntDesign } from '@expo/vector-icons';

const CompletedAppointments = ({navigation}) => {

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
            .where('state',"==",'Completed')
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
                      time
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

    const onLocationPress=()=>{
        navigation.navigate('mapScreen');
    }

    

    const Item = ({ date,time,id }) => (
      
        
            <View style={styles.appointmentbox}>
                <Text style={styles.intext1}> Appointment {id} </Text>
              <Text style={styles.intext2}>Date: {date}</Text>
              <Text style={styles.intext2}>Time: {time}</Text>
                
                <View style={styles.doneicon}>
                <Ionicons name="checkmark-done-circle" size={50} color="#3A292A" />
                </View>  
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
                <View style={styles.penddingCont}>
                    <Text style={styles.pendingtext}>Completed Appointments</Text>

                    <TouchableOpacity style={styles.backbutton}
                    onPress={() => navigation.navigate("Appointment")}>
                    <Image
                        style={{width:28, height:28}}
                        source={require('../assets/back.png')}
                    /> 
                    </TouchableOpacity>

                    {/* <Ionicons name="md-checkmark-circle" size={32} color="green" /> */}

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

export default CompletedAppointments;

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


    doneicon:{
        position:"absolute",
        top:"30%",
        left:"80%"
    },
});
