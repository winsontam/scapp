import React, {Component} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {loadUsers} from '../../models/users';
import Touchable from '../Shared/Touchable';
import globalStyle from '../globalStyles';
import {loadAlbums} from '../../models/albums';
import {loadPhotos} from '../../models/photos';
import {loadPosts} from '../../models/posts';
import {loadComments} from '../../models/comments';
import {loadTodos} from '../../models/todos';
import AvatarList from './AvatarList';
import MapList from './MapList';


class UserListPage extends Component {
    static navigationOptions = {
        title: 'SC Social',
    };

    _captureMapRef = (ref) => {
        this._mapRef = ref;
    };

    _refresh = () => {
        this.props.load()
            .then(() => {
                this._mapRef.fitToElements(true);
            })
            .then(() => {
            });
    };

    _onUserPress = (user) => {
        this.props.navigation.navigate('ProfilePage', {
            id: user.id,
            title: user.name,
        });
    };

    componentDidMount() {
        this._refresh();
    }

    _renderAvatarList() {
        const {loading, users} = this.props;

        return (
            <View style={styles.avatarListContainer}>
                <AvatarList
                    contentContainerStyle={styles.avatarListContentContainer}
                    loading={loading}
                    users={users}
                    onUserPress={this._onUserPress}
                />
            </View>
        );
    }

    _renderMapList() {
        const {users} = this.props;

        return (
            <View style={styles.mapListContainer}>
                <MapList
                    ref={this._captureMapRef}
                    style={styles.mapList}
                    users={users}
                    onUserPress={this._onUserPress}
                />
            </View>
        );
    }

    _renderRefreshButton() {
        const {loading} = this.props;

        return (
            <Touchable style={[styles.refreshButton, globalStyle.shadow]} onPress={this._refresh}>
                {loading && <ActivityIndicator size="small" color="#CCC"/>}
                {!loading && <MaterialIcons name="refresh" size={30} color="#CCC"/>}
            </Touchable>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                {this._renderAvatarList()}
                {this._renderMapList()}
                {this._renderRefreshButton()}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    avatarListContainer: {
        backgroundColor: '#FFF',
    },
    avatarListContentContainer: {
        padding: 10,
        height: 110,
    },
    mapListContainer: {
        flexGrow: 1,
        flexShrink: 1,
    },
    mapList: {
        flex: 1,
    },
    refreshButton: {
        position: 'absolute',
        bottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#FFF',
        shadowOpacity: 0.2,
    },
});


const mapStateToProps = (state) => ({
    loading: state.users.loading || state.albums.loading || state.photos.loading || state.posts.loading || state.comments.loading || state.todos.loading,
    users: state.users.data,
});

const mapDispatchToProps = (dispatch) => ({
    load: () => Promise.all([
        dispatch(loadUsers()),
        dispatch(loadAlbums()),
        dispatch(loadPhotos()),
        dispatch(loadPosts()),
        dispatch(loadComments()),
        dispatch(loadTodos()),
    ]),
});


export default connect(mapStateToProps, mapDispatchToProps)(UserListPage);
