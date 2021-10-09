import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import KeyboardAvoidingWrapper from '../Components/KeyboardAvoidingWrapper';

const AppointmentScreen = ({navigation}) => {
    return (
        <KeyboardAvoidingWrapper>
            <View style={styles.container}>
                <Text>This is Appointment Screen</Text>
            </View>
        </KeyboardAvoidingWrapper>
    )
}

export default AppointmentScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EFE5DA',
      alignItems: 'center',
      justifyContent: 'center',
    },
});