import React, { useContext, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Button,
  Image,
  TextInput,
  StatusBar,
} from "react-native";
import { firebase } from "../navigation/firebase";
import DateTimePicker from "@react-native-community/datetimepicker";

const App = ({ navigation, route }) => {
  const said = route.params.sid;
  console.log("custapp", said);
  const id = route.params.id;
  console.log("custappcus", id);
  const categoryid=route.params.categoryid;
  console.log("custappcus", categoryid);
  const [userData, setUserData] = useState(null);
  const [sid, setsid] = useState(said);
  const [cid, setcid] = useState(id);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Empty");
  const [time, settime] = useState(new Date().getHours()+':'+new Date().getMinutes());
  const [date2, setdate2] = useState(new Date().getDay()+'/'+new Date().getMonth()+'/'+new Date().getFullYear());
  const [service, setservice] = useState();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "android");
    setDate(currentDate);
    
    let temDate = new Date(currentDate);
    let fDate =
      temDate.getDate() +
      "/" +
      (temDate.getMonth() + 1) +
      "/" +
      temDate.getFullYear();
    let ftime = temDate.getHours() + ":" + temDate.getMinutes();
    console.log(fDate);
    setdate2(fDate);
    settime(ftime);
  };

  const getservice = ()=>{
    
        setservice(categoryid);
        setUserData({...userData, service: service});
        console.log(service);
     
    };
  

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
    setUserData({ ...userData, date: date2 });
    
  };

  const showTimepicker = () => {
    showMode("time");
    setUserData({ ...userData, time: time });
  };

  const sendData = () => {
    try{
    firebase
      .firestore()
      .collection("appointment")
      .doc()
      .set({
        cid,
        time: userData.time,
        date: userData.date,
        sid,
        state: "pending",
        service:userData.service,
      })
      .then(() => {
        console.log("Done");
        alert('Appointment Made Successfully');
        let uId= id;
        navigation.navigate('CDashboard',{screen:'cHome',params:{uId}});
        // console.log('logedin as customer',uId);
      });}catch(e){
        alert('Please Select Date and Time');
      }
    }
      useEffect(() => {
        getservice();
      }, []);

  

  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/bg-01.png")}
    >
      <View>
        {/* <TextInput style={styles.textinput} 
        placeholder="Date"
        autoCorrect={false}
        value={userData ? userData.oname : ''}
        onChangeText={(txt) => setUserData({...userData, date: txt})}
        />
        <TextInput style={styles.textinput} 
        placeholder="Time"
        autoCorrect={false}
        value={userData ? userData.oname : ''}
        onChangeText={(txt) => setUserData({...userData, time: txt})}
      /> */}
      <Text style={styles.header}> Make Appointment</Text>
        <View style={styles.allcon}>
          <View >
          <Text style={styles.alltxt}>
               Service: {service}
            </Text>

            <Text style={styles.alltxt}>
               Date: {date2}
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={()=>showDatepicker()}
              title="Show date picker!"
            >
              <Text style={styles.btnTxt}>Select Date</Text>
            </TouchableOpacity>
          </View>
          <View>
          <Text style={styles.alltxt}>
               Time: {time}
            </Text>
            <TouchableOpacity
            style={styles.button}
            onPress={()=>showTimepicker()} title="Select Time" >
              <Text style={styles.btnTxt}>Select Time</Text>
          {show && (
            <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={false}
            display="default"
            onChange={onChange}
            minimumDate ={new Date()}
          
            />
            )}
            </TouchableOpacity>
            </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            sendData();
          }}
        >
          <Text style={styles.btnTxt}>Add Appointment</Text>
        </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  header:{
    fontFamily:'Roboto',
    fontWeight:'bold',
    fontSize:30,
    // top:'2%',
    color:"#3A292A",
    position:"relative",
    paddingTop:20,
  },
  textinput: {
    width: 375,
    height: 40,
    position: "relative",
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

  allcon:{
    width:350,
    height:400,
    backgroundColor: "#fff",
    borderRadius: 25,
    padding:10,
    alignContent:'center',
    alignItems:'center',
    justifyContent: "center",
  
  },

  alltxt:{
    fontFamily:'Roboto',
    //fontWeight:'bold',
    fontSize:20,
    top:'5%',
    left:'-14%',
    color:"#3A292A",
    position:"relative",
    paddingLeft: 10,
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
    position: "relative",
    // top: "100%",
    // left:'20%',
  },
});
