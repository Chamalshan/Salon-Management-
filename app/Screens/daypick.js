import React, {useState} from 'react';
import {View, Button, Platform, StyleSheet,StatusBar,Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native-gesture-handler';

const daypick = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Empty');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'android');
    setDate(currentDate);
  

  let temDate = new Date(currentDate);
  let fDate = temDate.getDate()+'/'+(temDate.getMonth()+1)+'/'+temDate.getFullYear();
  let ftime = 'hours:'+temDate.getHours()+'| minutes:'+temDate.getMinutes();
  setText(fDate)
    };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  // const showTimepicker = () => {
  //   showMode('time');
  // };

  return (
    <View>
      <View>
        <Text>{text}</Text>
        <Button style={{position:'absolute'}} onPress={showDatepicker} title="Show date picker!" />
      </View>
      {/* <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View> */}
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default daypick;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor:"#EFE5DA",
    justifyContent:'center',
    alignItems:'center',
  },
  header:{
    fontFamily:'Roboto',
    fontWeight:'bold',
    fontSize:30,
    top:'0%',
    color:"#3A292A",
    position:"relative",
    paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
    paddingLeft: 10,
  },
  daypicker:{
    width:375,
    height:40,
    // top:'80%',
    marginTop:'50px',
    backgroundColor:'#fff',
    borderRadius:25,
    paddingHorizontal:16,
    fontSize:16,
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
  },
  
  textinput5:{
    width:375,
    height:40,
    backgroundColor:'#fff',
    borderRadius:25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#3A292A',
    top:'-14%',
    elevation:5,
    shadowColor:'#000',
    shadowOffset:{
      width:1,
      height:1,
    },
    shadowRadius:100,
    marginVertical:10,
    marginHorizontal:10,
  },


  
  button:{
    backgroundColor:'#3A292A',   
    borderRadius:25,
    width:200,
    marginVertical:10,
    paddingVertical:12,
    elevation:5,
    shadowColor:'#000',
    shadowOffset:{
      width:1,
      height:1,
    },
    shadowRadius:100,
    marginVertical:10,
    marginHorizontal:10,
    position:'absolute',
    top:'86.5%',
    //left:'40%',
  },
});