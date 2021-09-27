import React from 'react';
import { 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View,
  ImageBackground 
} from 'react-native';

const CategoryScreen=({navigation})=>{
    return (
      <ImageBackground style={styles.container} source={require("../assets/bg-01.png")}>
        <View style={styles.signupTextCont}>
          <Text style={styles.welcome}>
            Categories
          </Text>
          <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate ("ServiceScreen")}>
              <Text style={styles.btnTxt}>
                  Category 1</Text>
          </TouchableOpacity>
          </View>
          
      </ImageBackground>
    );
  }

  export default CategoryScreen;

  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor:"#EFE5DA",
      justifyContent:'center',
      alignItems:'center',
    },
    welcome:{
      color:'#3A292A',
      fontSize:40,
      top:50,
      flex:1
    },
    btnTxt:{
      fontSize:20,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center'
    },
    button:{
      backgroundColor:'#3A292A',   
      borderRadius:15,
      width:350,
      height:100,
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
      top:'21%',
      left:'-22%',
    },
});