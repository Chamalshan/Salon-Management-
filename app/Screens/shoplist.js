
import React, { useState,useEffect }  from 'react';
import { StyleSheet,Text, 
         View,
        Platform,
        ImageBackground,
        Image,
        TouchableOpacity,
        TextInput,
        Button,
        FlatList,
        TouchableHighlightComponent,
                } from 'react-native';
import KeyboardAvoidingWrapper from '../Components/KeyboardAvoidingWrapper';
import Advertisements from './Advertisements';
import * as firebase from 'firebase';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { setStatusBarHidden } from 'expo-status-bar';


const shoplist = ({navigation,route}) => {
  const  id  = route.params.id;
  console.log("Salon list", id);
  

    const [shop,setshop]= useState(null);
    const [sid,setsid]=useState();
    const fetchnames = async() =>{
        try{
        const list=[];

        await firebase
        .firestore()
        .collection('shop')
        .orderBy('name','desc')
        .get()
        .then((querySnapshot)=>{

            querySnapshot.forEach((doc) => {
                const {
                  id,
                  name,
                  location,
                  
                } = doc.data();
      
                setsid(id);
                list.push({
                  id: doc.id,
                  name,
                  location,
                  
                });
               
              }
              
              );
              
            })

        setshop(list);
        }catch(e){
            console.log(e);
        }
    }

    useEffect(()=>{
        fetchnames();
    })


    
    const Item = ({ name,location }) => (
        <TouchableHighlight onPress={()=>navigation.navigate('Salon',{id})}>
          <View style={styles.shopbox}>
            <Text style={styles.shoptxt}>{name}</Text>
            <Text style={styles.shoptxt}>{location}</Text>  
          </View>
        </TouchableHighlight>
      );
    
      // const Item2=({ location }) =>(
      //   <View style={styles.shopbox}>
      //     <Text style={styles.locationtxt}>{location}</Text>
      //   </View>
      // );

    const renderItem = ({ item }) => (
        <Item name={item.name}/>
    );

    



    return (
        <ImageBackground style={styles.container} source={require("../assets/bg-01.png")}>
            <View>
            <FlatList 
            data={shop}
            renderItem={renderItem}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              />
            </View>
        </ImageBackground>
    );
}

export default shoplist;

const styles = StyleSheet.create({
    container: {
            flexGrow: 1,
            backgroundColor:"#EFE5DA",
            justifyContent:'center',
            alignItems:'center',
            padding:10,
            
    },

    shoptxt:{
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:25,
         top:"10%",
         left:"10%",
        color:"#3A292A",
        position:"absolute",
    },

      shopbox:{
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
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },

    locationtxt:{
      fontFamily:'Roboto',
      fontWeight:'bold',
      fontSize:25,
       top:"90%",
       left:"10%",
      color:"#3A292A",
      position:"absolute",
  },
});
  
