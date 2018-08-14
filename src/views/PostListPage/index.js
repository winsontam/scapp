import React, {Component} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import Post from '../Shared/Post';


class PostListPage extends Component {
    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.title,
    });

    _keyExtractor = ({id}) => {
        return `#${id}`;
    };

    _renderItem = ({item: post}) => {
        return (
            <View style={styles.postContainer}>
                <Post post={post}/>
            </View>
        );
    };

    render() {
        const {posts} = this.props;

        return (
            <View style={styles.container}>
                <FlatList
                    contentContainerStyle={styles.contentContainer}
                    data={posts}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
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
        padding: 10,
        backgroundColor: '#EEE',
    },
    postContainer: {
        padding: 20,
        marginBottom: 10,
        backgroundColor: '#FFF',
    },
});


const mapStateToProps = (state, props) => {
    const posts = state.posts.data
        .filter(({userId}) => (userId === props.navigation.state.params.id))
        .map((post) => ({
            ...post,
            comments: state.comments.data
                .filter(({postId}) => (postId === post.id)),
        }));

    return {posts};
};


export default connect(mapStateToProps)(PostListPage);
