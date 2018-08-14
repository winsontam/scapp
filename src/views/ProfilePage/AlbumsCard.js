import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Card from '../Shared/Card';
import {connect} from 'react-redux';
import Album from '../Shared/Album';


const SHOW_ALBUMS_NUMBER = 4;


class AlbumsCard extends Component {
    _onMorePress = () => {
        const {user, onMorePress} = this.props;

        onMorePress && onMorePress(user);
    };

    _renderAlbum = (album) => {
        const {onAlbumPress} = this.props;

        return (
            <View key={album.id} style={styles.albumContainer}>
                <Album album={album} onAlbumPress={onAlbumPress}/>
            </View>
        );
    };

    render() {
        const {count, albums, showMore} = this.props;

        return (
            <Card
                title={`Albums (${count})`}
                showAction={showMore}
                actionText="more >"
                onActionPress={this._onMorePress}
            >
                <View style={styles.albumsContainer}>
                    {albums.map(this._renderAlbum)}
                </View>
            </Card>
        );
    }
}


const styles = StyleSheet.create({
    albumsContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    albumContainer: {
        width: '50%',
    },
});


const mapStateToProps = (state, props) => {
    const filteredAlbums = state.albums.data
        .filter(({userId}) => (userId === props.user.id));

    const count = filteredAlbums.length;
    const showMore = count > SHOW_ALBUMS_NUMBER;
    const albums = filteredAlbums
        .slice(0, SHOW_ALBUMS_NUMBER)
        .map((album) => ({
            ...album,
            photo: state.photos.data
                .find(({albumId}) => (albumId === album.id)),
        }));

    return {count, showMore, albums};
};


export default connect(mapStateToProps)(AlbumsCard);
