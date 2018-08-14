import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import MapView from 'react-native-maps';


export default class Cover extends Component {
    render() {
        const {user} = this.props;

        return (
            <MapView style={styles.cover} scrollEnabled={false} region={{
                latitude: parseFloat(user.address.geo.lat),
                longitude: parseFloat(user.address.geo.lng),
                latitudeDelta: 0,
                longitudeDelta: 0,
            }}/>
        );
    }
}


const styles = StyleSheet.create({
    cover: {
        height: 200,
    },
});
