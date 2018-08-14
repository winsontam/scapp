import React from 'react';
import {createStackNavigator} from 'react-navigation';
import UserListPage from './UserListPage';
import ProfilePage from './ProfilePage';
import AlbumListPage from './AlbumListPage';
import PhotoListPage from './PhotoListPage';
import PhotoViewPage from './PhotoViewPage';
import PostListPage from './PostListPage';


export default createStackNavigator({
    UserListPage: {
        screen: UserListPage,
    },
    ProfilePage: {
        screen: ProfilePage,
    },
    AlbumListPage: {
        screen: AlbumListPage,
    },
    PhotoListPage: {
        screen: PhotoListPage,
    },
    PhotoViewPage: {
        screen: PhotoViewPage,
    },
    PostListPage: {
        screen: PostListPage,
    },
}, {
    cardStyle: {
        backgroundColor: '#FFF',
    },
    navigationOptions: {
        headerBackTitle: null,
        headerStyle: {
            borderBottomWidth: 0,
            backgroundColor: '#FFF',
        },
    },
});
