import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './cHomeScreen';
import AppointmentScreen from './cAppointments';
import ProfileScreen from './cProfileScreen';
import CategoryScreen from './CategoryScreen';
import Service from './ServiceScreen';
import KeyboardAvoidingWrapper from '../Components/KeyboardAvoidingWrapper';
// function HomeScreen(){
//   return(
//     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//       <Text>This is home page</Text>
//     </View>
//   )
// }

// function ProfileScreen(){
//   return(
//     <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
//       <Text>This is profile Screen</Text>
//     </View>
//   )
// }


const Tab = createBottomTabNavigator();

const CDashboard=({navigation,route})=>{
    

  return (
     
      <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
             ...styles.bottom,
            }
            
          }}
        >
        <Tab.Screen name="cHome" component={HomeScreen} 
        options={{
            tabBarIcon: ({ focused }) => (
                <View style={{
                    top:15,
                    justifyContent:'center',
                    alignItems:'center',            
                    width:50,
                    height:50,
                    backgroundColor: focused ? '#3A292A' : '#fff',
                    borderRadius: 25,
                }}>
                    <Image 
                     source={require ('../assets/Home.png')} 
                     resizeMode='contain'
                     style={{
                         width:30,
                         height:30,
                         tintColor: focused ? '#fff' : '#3A292A',
                    }}/>
                </View>
            ),
        }} />

        <Tab.Screen name="Category" component={CategoryScreen} 
        options={{
            tabBarIcon: ({ focused }) => (
                <View style={{
                    top:15,
                    justifyContent:'center',
                    alignItems:'center',            
                    width:50,
                    height:50,
                    backgroundColor: focused ? '#3A292A' : '#fff',
                    borderRadius: 25,
                }}>
                    <Image 
                     source={require ('../assets/Category.png')} 
                     resizeMode='contain'
                     style={{
                         width:30,
                         height:30,
                         tintColor: focused ? '#fff' : '#3A292A',
                    }}/>
                </View>
            ),
        }} />   

        <Tab.Screen name="cAppointment" component={AppointmentScreen}
         options={{
            tabBarIcon: ({ focused }) => (
                <View style={{
                    top:15,
                    justifyContent:'center',
                    alignItems:'center',            
                    width:50,
                    height:50,
                    backgroundColor: focused ? '#3A292A' : '#fff',
                    borderRadius: 25,
                }}>
                    <Image 
                     source={require ('../assets/Appointment.png')} 
                     resizeMode='contain'
                     style={{
                         width:30,
                         height:30,
                         tintColor: focused ? '#fff' : '#3A292A',
                    }}/>
                </View>
            ),
        }}
        />
        <Tab.Screen name="cProfile" component={ProfileScreen}

         options={{
            tabBarIcon: ({ focused }) => (
                <View style={{
                    top:15,
                    justifyContent:'center',
                    alignItems:'center',            
                    width:50,
                    height:50,
                    backgroundColor: focused ? '#3A292A' : '#fff',
                    borderRadius: 25,
                }}>
                    <Image 
                     source={require ('../assets/Profile.png')} 
                     resizeMode='contain'
                     style={{
                         width:30,
                         height:30,
                         tintColor: focused ? '#fff' : '#3A292A',
                    }}/>
                </View>
            ),
        }}
        />

{/* <Tab.Screen name="Service" component={Service} 
        options={{
            tabBarIcon: ({ focused }) => (
                <View style={{
                    top:15,
                    justifyContent:'center',
                    alignItems:'center',            
                    width:50,
                    height:50,
                    backgroundColor: focused ? '#3A292A' : '#fff',
                    borderRadius: 25,
                }}>
                    <Image 
                     source={require ('../assets/Category.png')} 
                     resizeMode='contain'
                     style={{
                         width:30,
                         height:30,
                         tintColor: focused ? '#fff' : '#3A292A',
                    }}/>
                </View>
            ),
        }} /> */}
      </Tab.Navigator>
     
  );
}

export default CDashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFE5DA',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottom:{
    //position: 'absolute',
    bottom:25,
    elevation:0,
    backgroundColor: '#fff',
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
        
    },

   shadow:{
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 0,
    },
    
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3
   }, 
});
