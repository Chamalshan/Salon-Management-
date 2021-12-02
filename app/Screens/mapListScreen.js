import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';

const mapListScreen=({navigation})=>{
    return(
        <SafeAreaView forceInset ={{top:'always'}}>
            <Text>MapListScreen</Text>
        </SafeAreaView>
    )
}

export default mapListScreen;