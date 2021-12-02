import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import { createBottomtabNavigator} from '@react-navigation/bottom-tabs'
import mapScreen from './mapScreen';
import mapListScreen  from './mapListScreen';
import { SetNavigator } from './navigationRef';

const switchNavigator = createSwitchNavigator({
  mainFlow:createBottomtabNavigator({
    MapView:mapScreen,
    MapList:mapListScreen 
  })
})

const App =createAppContainer(switchNavigator)

const map2=()=> {
  return (
    <App
    ref={navigator=>{
      SetNavigator(navigator)
    }
    }/>
  )
}

export default map2;


