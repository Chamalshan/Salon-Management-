import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Platform, StatusBar,Image, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class LoadingScreen extends Component {
    
    state = {
        percent : 0,
    }

    anim = new Animated.Value(0);

    componentDidMount(){
        this.onAnimate();
    }

    onAnimate = () =>{
        this.anim.addListener(({ value}) => {
            this.setState({percent: parseInt(value, 10) });
        });
        Animated.timing(this.anim, {
            toValue: 100,
            duration: 3000,
            useNativeDriver: true,
        }).start();
    }

    render(){
        return (
            <ImageBackground style={styles.container} source={require("../assets/bg-01.png")}>
                <View style={styles.container2}>
                    <Animated.View style={[
                        styles.inner,
                        { width: `${this.state.percent}%` }
                    ]}
                    />
                </View>
                    <Image style={styles.en}
                    source={require("../assets/encapture.png")}/>
                <Text style={styles.text1}>
                    Loading
                </Text>
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#EFE5DA',
        alignItems:'center',

    },
    container2:{
        top:'80%',
        width:'80%',
        height: 40,
        padding : 3,
        backgroundColor:'#fff',
        borderColor: '#fff',
        borderWidth: 3,
        borderRadius: 20,
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
    inner:{
        width: '100%',
        height: 30,
        borderRadius: 15,
        backgroundColor: '#745B5F',
    },
    en:{
        width:273,
        height:304,
        position:'absolute',
        top:180,
        
    },
    gradient:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15,
    },
    text1:{
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:30,
        top:"85%",

        color:"#3A292A",
        position:"absolute",
        paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
    },
    
})


