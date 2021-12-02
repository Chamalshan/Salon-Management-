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
  StatusBar 
} from 'react-native';
import { firebase } from '../navigation/firebase';
import DateTimePicker from '@react-native-community/datetimepicker';

const App=({navigation,route})=> {

  const  said  = route.params.sid;
  console.log("custapp", said);
  const  id  = route.params.id;
  console.log("custappcus", id);
  const [userData, setUserData] = useState(null);
  const [sid, setsid] = useState(said);
  const [cid, setcid] = useState(id)
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Empty');
  const [time, settime] = useState('Empty');
  const [date2, setdate2] = useState('Empty');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'android');
    setDate(currentDate);
  

  let temDate = new Date(currentDate);
  let fDate = temDate.getDate()+'/'+(temDate.getMonth()+1)+'/'+temDate.getFullYear();
  let ftime = temDate.getHours()+'-'+temDate.getMinutes();
  console.log(fDate);
  setdate2(fDate);
  settime(ftime);
    };

    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
      setUserData({...userData, date:date2})};
      
      const showTimepicker = () => {
        showMode('time');
        setUserData({...userData, time: time})};
      
        const sendData=()=>{
          firebase
          .firestore()
          .collection('appointment')
          .doc()
          .set({
            cid,
            time:userData.time,
            date:userData.date,
            sid,
            state:'pending',
            // service:userData.service,
          })
          .then(() => {
            console.log('Done');
            
            // let uId= id;
            // navigation.navigate('Dashboard',{screen:'Profile',params:{uId}});
            // console.log('logedin as customer',uId);
          }
          )
        }
        
        
        return (
          <ImageBackground style={styles.container} source={require("../assets/bg-01.png")}>
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

<View>
      <View>
        <Text>{date2} {time}</Text>
        <Button style={{position:'absolute'}} onPress={showDatepicker} title="Show date picker!" />
      </View>
      <View>
        <Button onPress={showTimepicker} title="Select Time" />
      </View>
      {show && (
        <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode={mode}
        is24Hour={false}
         display="default"
        onChange={onChange}
        
        />
        )}
    </View>
        <TouchableOpacity style={styles.button}
        onPress={() =>{sendData()}}>
            <Text style={styles.btnTxt}>
                Add Appointment
            </Text>
            
        </TouchableOpacity>
        </View>
        </ImageBackground>
  );
};
    


export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textinput: {
    width: 375,
    height: 40,
    position:'relative',
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
