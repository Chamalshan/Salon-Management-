import React from 'react';
//import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View,
  StatusBar
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoadingScreen from './app/Screens/LoadingScreen';
import Login from "./app/Screens/LoginScreen";
import WelcomeScreen from './app/Screens/WelcomeScreen';
import SelectScreen from './app/Screens/SelectScreen';
import CustReg from './app/Screens/CustReg';
import MerchantReg from './app/Screens/MerchantReg';
import ShopReg from './app/Screens/ShopReg';
import CategoryScreen from './app/Screens/CategoryScreen';
import ServiceScreen from './app/Screens/ServiceScreen';
import Form from './app/Components/Form';
import Dashboard from './app/Screens/DashboardScreen';
import CDashboard from './app/Screens/CDashborad';
import Advertisements from './app/Screens/Advertisements';
import EditSalonProfile from './app/Screens/EditSalonProfile';
import PendingAppointment from './app/Screens/pendingApp';
import ShowAppointment from './app/Screens/showAppo';
import CancelledAppointments from './app/Screens/cancelledappo';
import CompletedAppointments from './app/Screens/completedAppo';
import * as firebase from "firebase";

const AppStack= createStackNavigator();

const App=()=>{
  return (
    <NavigationContainer>
      <StatusBar style="dark"/>
      <AppStack.Navigator screenOptions={{
        headerShown: false
      }}>
          <AppStack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
          <AppStack.Screen name="Login" component={Login}/>
          <AppStack.Screen name="SelectScreen" component={SelectScreen}/>
          <AppStack.Screen name="CustReg" component={CustReg}/>
          <AppStack.Screen name="MerchantReg" component={MerchantReg}/>
          <AppStack.Screen name="ShopReg" component={ShopReg}/>
          <AppStack.Screen name="CategoryScreen" component={CategoryScreen}/>
          <AppStack.Screen name="ServiceScreen" component={ServiceScreen}/>
          <AppStack.Screen name="Form" component={Form}/>
          <AppStack.Screen name="Dashboard" component ={Dashboard}/>
          <AppStack.Screen name="CDashboard" component ={CDashboard}/>
          <AppStack.Screen name="Advertisments" component={Advertisements}/>
          <AppStack.Screen name="EditSalonProfile" component={EditSalonProfile}/>
          <AppStack.Screen name="PendingAppointment" component={PendingAppointment}/>
          <AppStack.Screen name="ShowAppointment" component={ShowAppointment}/>
          <AppStack.Screen name="CancelledAppointments" component={CancelledAppointments}/>
          <AppStack.Screen name="CompletedAppointments" component={CompletedAppointments}/>
      </AppStack.Navigator> 
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#EFE5DA",
    //alignItems:"center",
    //justifyContent:"center"
    paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
  },
});
