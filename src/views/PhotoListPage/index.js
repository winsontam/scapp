import React, {Component} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import Photo from '../Shared/Photo';


class PhotoListPage extends Component {
    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.title,
        mode: 'modal',
    });

    _keyExtractor = ({id}) => {
        return `#${id}`;
    };

    _onPhotoPress = (photo) => {
        this.props.navigation.navigate('PhotoViewPage', {
            id: photo.id,
        });
    };

    _renderItem = ({item: photo}) => {
        return (
            <Photo photo={photo} onPhotoPress={this._onPhotoPress}/>
        );
    };

    render() {
        const {photos} = this.props;

        return (
            <FlatList
                data={photos}
                numColumns={3}
                columnWrapperStyle={styles.photoContainer}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
        );
    }
}


const styles = StyleSheet.create({
    photoContainer: {
        width: '33.33%',
    },
});


const mapStateToProps = (state, props) => {
    const photos = state.photos.data
        .filter(({albumId}) => (albumId === props.navigation.state.params.id));

    return {photos};
};


export default connect(mapStateToProps)(PhotoListPage);
