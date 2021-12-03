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
        <Text style={styles.welcome}>Category Skin and Beauty</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Salon", { id ,categoryid: 'Facial'})}
        >
          <Text style={styles.btnTxt}>Facial</Text>
          <Image 
          style={{height: 100, width: 100,top: '-50%' }}
          source={require("../assets/Face-01.png")} 
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Salon", { id ,categoryid: 'Face Treatment' })}
        >
          <Text style={styles.btnTxt}>Face Treatment</Text>
          <Image 
          style={{height: 100, width: 100,top: '-50%' }}
          source={require("../assets/Facial-01.png")} 
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Salon", { id ,categoryid: 'Eyebrow Threading' })}
        >
          <Text style={styles.btnTxt}>  Eyebrow Threading </Text>
          <Image 
          style={{height: 90, width: 90,top: '-50%' }}
          source={require("../assets/Eyebrow-01.png")} 
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Salon", { id ,categoryid: 'Menique' })}
        >
          <Text style={styles.btnTxt}>Menique</Text>
          <Image 
          style={{height: 100, width: 100,top: '-50%' }}
          source={require("../assets/Menique-01.png")} 
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Salon", { id ,categoryid: 'Pedique' })}
        >
          <Text style={styles.btnTxt}>Pedique</Text>
          <Image 
          style={{height: 100, width: 100,top: '-50%' }}
          source={require("../assets/Pedique-01.png")} 
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
