import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import KeyboardAvoidingWrapper from '../Components/KeyboardAvoidingWrapper';

const ProfileScreen = ({navigation}) => {
    return (
        <KeyboardAvoidingWrapper>
            <View style={styles.container}>
                <Text>This is profile Screen</Text>
            </View>
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
    },
});
