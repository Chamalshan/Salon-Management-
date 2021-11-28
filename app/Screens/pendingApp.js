import React from 'react'
import {  StyleSheet, Text, View,ImageBackground,TouchableOpacity ,Image ,FlatList} from 'react-native';
import KeyboardAvoidingWrapper from '../Components/KeyboardAvoidingWrapper';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { DataProvider,LayoutProvider,RecyclerListView} from 'recyclerlistview';

const ProfileScreen = ({navigation,route}) => {
    const id=route.params.uId;
    console.log('Pending Appontment',id);

    // constructor(props){
    //   super(props);
  
    //   const fakeData = [];
    //   for(i = 0; i < 100; i+= 1) {
    //     fakeData.push({
    //       type: 'NORMAL',
    //       item: {
    //         id: i,
    //         image: faker.image.avatar(),
    //         name: faker.name.firstName(),
    //         description: faker.random.words(5),
    //       },
    //     });
    //   }
    //   this.state = {
    //     list: new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(fakeData),
    //   };
  
    //   this.layoutProvider = new LayoutProvider((i) => {
    //     return this.state.list.getDataForIndex(i).type;
    //   }, (type, dim) => {
    //     switch (type) {
    //       case 'NORMAL': 
    //         dim.width = SCREEN_WIDTH;
    //         dim.height = 100;
    //         break;
    //       default: 
    //         dim.width = 0;
    //         dim.height = 0;
    //         break;
    //     };
    //   })
    // }

    // rowRenderer = (type, data) => {
    //   const { image, name, description } = data.item;
    //   return (
    //     <View style={styles.listItem}>
    //       <Image style={styles.image} source={{ uri: image }} />
    //       <View style={styles.body}>
    //         <Text style={styles.name}>{name}</Text>
    //         <Text style={styles.description}>{description}</Text>
    //       </View>
    //     </View>
    //   )
    // }

    
    return (
        <KeyboardAvoidingWrapper>
            <ImageBackground style={styles.container} source={require("../assets/bg-01.png")}>
                <View style={styles.penddingCont}>
                    <Text style={styles.pendingtext}>Pending Appointments</Text>

                    <TouchableOpacity style={styles.backbutton}
                    onPress={() => navigation.navigate("Appointment")}>
                    <Image
                        style={{width:28, height:28}}
                        source={require('../assets/back.png')}
                    /> 
                    </TouchableOpacity>

                    {/* <Ionicons name="md-checkmark-circle" size={32} color="green" /> */}

                    {/* <RecyclerListView
                        dataProvider={this.state.dataProvider}
                        layoutProvider={this.layoutProvider}
                        rowRenderer={this.rowRenderer}
                        extendedState={{ someThingHappen: this.state.someThingHappen }}
                        onEndReached={this.fetchMore}
                        onEndReachedThreshold={0.5}
                        renderFooter={() =>
                        this.state.loadingMore && (
                            <Text
                                style={{ padding: 10, fontWeight: 'bold', textAlign: 'center' }}
                            >
                            Loading
                            </Text>
                            )
                        }
                    /> */}

                    <View style={styles.appointmentbox}>
                        <Text style={styles.appointmenttxtbtn}>
                            Appointment 1
                        </Text>
                        <Text style={styles.intext2}>Date</Text>
                        <Text style={styles.intext2}>Time</Text>
                        <Text style={styles.intext2}>Service</Text>
                        <TouchableOpacity style={styles.okicon}>
                        <Ionicons name="md-checkmark-circle" size={45} color="green" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.closeicon}>
                        <AntDesign name="closecircle" size={39} color="red"/> 
                        </TouchableOpacity>
                    </View>

                </View>
            </ImageBackground>
        </KeyboardAvoidingWrapper>
    )

}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFE5DA',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },

    penddingCont:{
        flexGrow: 1,
        alignItems:"flex-end",
        justifyContent:"center",
        marginVertical:16,
        flexDirection:'row'
    },

    pendingtext:{
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:30,
        top:"0%",
        left:"-35%",
        color:"#3A292A",
        position:"absolute",     
    },

    backbutton:{
        backgroundColor:'rgba(52, 52, 52, 0)',   
        borderRadius:25,
        width:200,
        position:'absolute',
        top:'1%',
        left:'-47%',
    },

    appointmentbox:{
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
        position:'absolute',
        top:'10%',
        left:'-45%',
    },

    appointmenttxtbtn:{
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:25,
         top:"10%",
         left:"10%",
        color:"#3A292A",
        // position:"absolute",
    },

    appointmentCont:{
        backgroundColor:'rgba(52, 52, 52, 0)',   
        borderRadius:25,
        width:200,
        position:'absolute',
        top:'35%',
        left:'-45%',
    },

    intext2:{
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:20,
         top:"10%",
         left:"10%",
        color:"#3A292A",
        // position:"absolute",
    },

    okicon:{
        position:"absolute",
        top:"15%",
        left:"80%"
    },

    closeicon:{
        position:"absolute",
        top:"50%",
        left:"80%"
    },
});
