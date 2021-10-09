import React, {FC, ReactElement} from 'react';
import {Alert, Text, TouchableOpacity, View,StyleSheet} from 'react-native';
import Parse from 'parse/react-native';
import {useNavigation} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';


export const UserLogOut = () => {
  const navigation = useNavigation();

  const doUserLogOut = async function () {
    return await Parse.User.logOut()
      .then(async () => {
        // To verify that current user is now empty, currentAsync can be used
        const currentUser = await Parse.User.currentAsync();
        if (currentUser === null) {
          Alert.alert('Success!', 'No user is logged in anymore!');
          
        }
        // Navigation dispatch calls a navigation action, and popToTop will take
        // the user back to the very first screen of the stack
        navigation.dispatch(StackActions.popToTop());
        return true;
      })
      .catch((error) => {
        Alert.alert('Error!', error.message);
        return false;
      });
  };

  return (
    <View style={styles.login_wrapper}>
      <View>
        <TouchableOpacity onPress={() => doUserLogOut()}>
          <View style={styles.button}>
            <Text style={styles.button_label}>{'Logout'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles= StyleSheet.create({
    login_wrapper: {
      flexGrow: 1,
      justifyContent:'center',
      alignItems:'center'
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
    },
    button_label:{
        fontSize:20,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center'
    },
})