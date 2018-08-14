import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Touchable from './Touchable';


export default class Album extends Component {
    _onAlbumPress = () => {
        const {album, onAlbumPress} = this.props;

        onAlbumPress && onAlbumPress(album);
    };

    render() {
        const {album} = this.props;

        return (
            <Touchable style={styles.container} onPress={this._onAlbumPress}>
                <View style={styles.photoContainer}>
                    {album.photo && <Image style={styles.photo} source={{uri: album.photo.thumbnailUrl}}/>}
                </View>
                <Text style={styles.title}>{album.title}</Text>
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
    title: {
        flex: 1,
        flexWrap: 'wrap',
        padding: 2,
    },
});
