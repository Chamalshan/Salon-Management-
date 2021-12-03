import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
} from "react-native";

const ServiceScreen = ({ navigation, route }) => {
  const id = route.params.id;
  console.log("Service", id);

  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/bg-01.png")}
    >
      <View style={styles.categoryTextCont}>
        <Text style={styles.welcome}>Category Hair</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Salon", { id ,categoryid: 'Hair Style' })}
        >
          <Text style={styles.btnTxt}>Hair Style</Text>
          <Image 
          style={{height: 100, width: 100,top: '-50%' }}
          source={require("../assets/Hair_Style.png")} 
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Salon", { id ,categoryid: 'Hair treatment'})}
        >
          <Text style={styles.btnTxt}>Hair treatment</Text>
          <Image 
          style={{height: 100, width: 100,top: '-50%' }}
          source={require("../assets/treat-01.png")} 
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Salon", { id ,categoryid: 'Hair Curling'})}
        >
          <Text style={styles.btnTxt}>Hair Curling </Text>
          <Image 
          style={{height: 100, width: 100,top: '-50%' }}
          source={require("../assets/curl-01.png")} 
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Salon", { id ,categoryid: 'Hair Straightening'})}
        >
          <Text style={styles.btnTxt}>Hair Straightening</Text>
          <Image 
          style={{height: 100, width: 100,top: '-50%' }}
          source={require("../assets/Straightening-01.png")} 
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Salon", { id ,categoryid: 'Hair Colouring'})}
        >
          <Text style={styles.btnTxt}>Hair Colouring</Text>
          <Image 
          style={{height: 100, width: 100,top: '-50%' }}
          source={require("../assets/Hair_Style.png")} 
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default ServiceScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#EFE5DA",
    justifyContent: "center",
    alignItems: "center",
    position:'relative',
  },
  welcome: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 30,
    color: "#3A292A",
    top: "-5%",
    position: "relative",
    // flex:1
    
  },

  btnTxt: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 25,
    // fontWeight: "500",
    color: "#fff",
    textAlign: "center",
    top:"30%",
    left:"2%",
  },

  button: {
    backgroundColor: "#3A292A",
    borderRadius: 15,
    width: 350,
    height: 100,
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
    position: 'relative',
    // top: "21%",
    // left: "-22%",
  },

  categoryTextCont: {
    position: "relative",
  },
});
