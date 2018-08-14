import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Touchable from './Touchable';


export default class Photo extends Component {
    _onPhotoPress = () => {
        const {photo, onPhotoPress} = this.props;

        onPhotoPress && onPhotoPress(photo);
    };

    render() {
        const {photo} = this.props;

        return (
            <Touchable style={styles.container} onPress={this._onPhotoPress}>
                <View style={styles.photoContainer}>
                    <Image style={styles.photo} source={{uri: photo.thumbnailUrl}}/>
                </View>
            </Touchable>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: '#FFF',
    },
    photoContainer: {
        width: '100%',
        aspectRatio: 1,
        backgroundColor: '#EEE',
    },
    photo: {
        width: '100%',
        height: '100%',
    },
});
