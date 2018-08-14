import React, {Component} from 'react';
import {connect} from 'react-redux';
import ImageViewer from 'react-native-image-zoom-viewer';


class PhotoViewPage extends Component {
    render() {
        const {photo, photos} = this.props;
        const index = photos.findIndex(({id}) => (id === photo.id));
        const imageUrls = photos.map(({url}) => ({url}));

        return (
            <ImageViewer
                index={index}
                imageUrls={imageUrls}
                saveToLocalByLongPress={false}
            />
        );
    }
}


const mapStateToProps = (state, props) => {
    const photo = state.photos.data
        .find(({id}) => (id === props.navigation.state.params.id));
    const photos = state.photos.data
        .filter(({albumId}) => (albumId === photo.albumId));

    return {photo, photos};
};


export default connect(mapStateToProps)(PhotoViewPage);
