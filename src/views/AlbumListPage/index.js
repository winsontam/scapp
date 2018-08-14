import React, {Component} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import Album from '../Shared/Album';


class AlbumListPage extends Component {
    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.title,
    });

    _keyExtractor = ({id}) => {
        return `#${id}`;
    };

    _onAlbumPress = (album) => {
        this.props.navigation.navigate('PhotoListPage', {
            id: album.id,
            title: album.title,
        });
    };

    _renderItem = ({item: album}) => {
        return (
            <Album album={album} onAlbumPress={this._onAlbumPress}/>
        );
    };

    render() {
        const {albums} = this.props;

        return (
            <FlatList
                data={albums}
                numColumns={2}
                columnWrapperStyle={styles.albumContainer}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
        );
    }
}


const styles = StyleSheet.create({
    albumContainer: {
        width: '50%',
    },
});


const mapStateToProps = (state, props) => {
    const albums = state.albums.data
        .filter(({userId}) => (userId === props.navigation.state.params.id))
        .map((album) => ({
            ...album,
            photo: state.photos.data
                .find(({albumId}) => (albumId === album.id)),
        }));

    return {albums};
};


export default connect(mapStateToProps)(AlbumListPage);
