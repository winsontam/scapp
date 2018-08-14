import React, {Component} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import Cover from './Cover';
import Avatar from './Avatar';
import NameCard from './NameCard';
import ContactsCard from './ContactsCard';
import AlbumsCard from './AlbumsCard';
import PostsCard from './PostsCard';
import TodosCard from './TodosCard';


class ProfilePage extends Component {
    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.title,
    });

    _onAlbumPress = (album) => {
        this.props.navigation.navigate('PhotoListPage', {
            id: album.id,
            title: album.title,
        });
    };

    _onMoreAlbumPress = (user) => {
        this.props.navigation.navigate('AlbumListPage', {
            id: user.id,
            title: user.name,
        });
    };

    _onMorePostPress = (user) => {
        this.props.navigation.navigate('PostListPage', {
            id: user.id,
            title: user.name,
        });
    };

    render() {
        const {user} = this.props;

        return (
            <View style={styles.container}>
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={styles.contentContainer}
                >
                    <Cover user={user}/>
                    <Avatar user={user}/>
                    <NameCard user={user}/>
                    <ContactsCard user={user}/>
                    <AlbumsCard
                        user={user}
                        onAlbumPress={this._onAlbumPress}
                        onMorePress={this._onMoreAlbumPress}
                    />
                    <PostsCard
                        user={user}
                        onMorePress={this._onMorePostPress}
                    />
                    <TodosCard user={user}/>
                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEE',
    },
    contentContainer: {
        backgroundColor: '#EEE',
    },
});


const mapStateToProps = (state, props) => ({
    user: state.users.data.find(({id}) => (id === props.navigation.state.params.id)),
});


export default connect(mapStateToProps)(ProfilePage);
