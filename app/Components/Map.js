import React from 'react';
import MapView from 'react-native-maps'
import { StyleSheet, Dimensions } from 'react-native';

const height = Dimensions.get('window').height


const Map=()=>{
    return(
        <MapView
            style={styles.map}
            loadingEnabled={true}
            region  ={{
                latitude:37.78825,
                longitude:-122.4324,
                latitudeDelta:0.015,
                longitudeDelta:0.0121
            }}>
                <MapView.marker
                coordinate={{
                    latitude:37.78825,
                    longitude:-122.4324,
                }}
                title={"Title 1"}
                description={"Description 1"}
                    />

                <MapView.marker
                coordinate={{
                    latitude:37.79825,
                    longitude:-122.4324,
                }}
                title={"Title 2"}
                description={"Description 2"}
                    />
            </MapView>
    )
}

export default Map;

const styles= StyleSheet.create({
    map:{
        height
    }
})