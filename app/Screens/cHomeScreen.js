import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,
     Text, 
     View,
     Platform,
    ImageBackground,
    Image,
    TouchableOpacity,
    TextInput,
    Button
} from 'react-native';
import { SearchBar } from 'react-native-screens';
import KeyboardAvoidingWrapper from '../Components/KeyboardAvoidingWrapper';
import { UserLogOut } from '../Components/UserLogOut';
import CategoryScreen from './CategoryScreen';

const CHomeScreen=({navigation})=>{
    return (
        <KeyboardAvoidingWrapper>
            <ImageBackground style={styles.container} source={require("../assets/bg-01.png")}>
            <View style={styles.helloTextCont}>
                <Text style={styles.hellotext1}>Hello Name !</Text>    
            
                <Image
                    style={styles.bell}
                    source={require('../assets/Bell.png')}
                />
                <Image
                    style={styles.lines}
                    source={require('../assets/tree.png')}
                />
            
                <TextInput style={styles.SearchBarinput} 
                        underlineColorAndroid='rgba(0,0,0,0)' 
                        placeholder='Search'
                        autoCapitalize="none"
                        placeholderTextColor='#3A292A'
                    />

                <View style={styles.advertismentbox}/>

                
                <Text style={styles.categorytext}>Categories</Text>
                    <TouchableOpacity
                        style={styles.viewalltextCont}
                        onPress={() => navigation.navigate('Category')}
                    >
                    <Text style={styles.viewalltext}>view all</Text>
                    </TouchableOpacity>
                <View style={styles.categorybox1}/>
                <View style={styles.categorybox2}/> 
                <View style={styles.categorybox3}/>
                <View style={styles.categorybox4}/>                 
            </View>
            </ImageBackground>
        </KeyboardAvoidingWrapper>
    );
}

export default CHomeScreen;

const styles = StyleSheet.create({
    container: {
            flexGrow: 1,
            backgroundColor:"#EFE5DA",
            justifyContent:'center',
            alignItems:'center',
    },

    helloTextCont:{
        flexGrow: 1,
        alignItems:"flex-end",
        justifyContent:"center",
        marginVertical:16,
        flexDirection:'row'
    },
    
    hellotext1:{
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:30,
        top:0,
        left:"-45%",
        color:"#3A292A",
        position:"absolute",    
    },

    bell:{
        top:"1%",
        left:"20%",
        position:"absolute"
    },

    lines:{
        top:"1%",
        left:"35%",
        position:'absolute',
    },

    SearchBarinput:{
        width:375,
        height:50,
        backgroundColor:'#fff',
        borderRadius:15,
        paddingHorizontal:16,
        fontSize:20,
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
        position:"absolute",
        top:"8%",
    },

    advertismentbox:{
        top:"20%",           
        width:375,
        height:150,
        backgroundColor: '#fff',
        position: 'absolute',
        borderRadius:15,
        elevation:5,
        shadowColor:'#000',
        shadowOffset:{
          width:1,
          height:1,
        },
        shadowRadius:100,
    },

    categorytext:{
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:25,
        top:"45%",
        left:"-45%",
        color:"#3A292A",
        position:"absolute",
    },
    
    viewalltext:{
        fontFamily:'Roboto',
        fontSize:25,
        textDecorationLine: 'underline',
        // top:"45%",
        // left:"25%",
        color:"#3A292A",
        // position:"absolute",
    },

    viewalltextCont:{
        backgroundColor:'rgba(52, 52, 52, 0)',   
        borderRadius:25,
        width:200,
        // marginVertical:10,
        // paddingVertical:12,
        // elevation:5,
        // shadowColor:'#000',
        // shadowOffset:{
        //   width:1,
        //   height:1,
        // },
        // shadowRadius:100,
        // marginVertical:10,
        // marginHorizontal:10,
        position:'absolute',
        top:'45%',
        left:'25%',
      },

    categorybox1:{
        top:"55%",
        left:"-45%",           
        width:175,
        height:175,
        backgroundColor: '#fff',
        position: 'absolute',
        borderRadius:15,
        elevation:5,
        shadowColor:'#000',
        shadowOffset:{
          width:1,
          height:1,
        },
        shadowRadius:100,
    },

    categorybox2:{
        top:"55%",
        left:"3%",           
        width:175,
        height:175,
        backgroundColor: '#fff',
        position: 'absolute',
        borderRadius:15,
        elevation:5,
        shadowColor:'#000',
        shadowOffset:{
          width:1,
          height:1,
        },
        shadowRadius:100,
    },

    categorybox3:{
        top:"85%",
        left:"-45%",           
        width:175,
        height:175,
        backgroundColor: '#fff',
        position: 'absolute',
        borderRadius:15,
        elevation:5,
        shadowColor:'#000',
        shadowOffset:{
          width:1,
          height:1,
        },
        shadowRadius:100,
    },

    categorybox4:{
        top:"85%",
        left:"3%",           
        width:175,
        height:175,
        backgroundColor: '#fff',
        position: 'absolute',
        borderRadius:15,
        elevation:5,
        shadowColor:'#000',
        shadowOffset:{
          width:1,
          height:1,
        },
        shadowRadius:100,
    },
});
  