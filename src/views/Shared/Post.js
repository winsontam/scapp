import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import UserAvatar from 'react-native-user-avatar';


export default class Post extends Component {
    _renderComment = (comment) => {
        return (
            <View key={comment.id} style={commentStyles.container}>
                <UserAvatar style={commentStyles.avatar} size="40" name={comment.name}/>
                <View style={commentStyles.bodyContainer}>
                    <Text style={commentStyles.body}>{comment.body}</Text>
                </View>
            </View>
        );
    };

    render() {
        const {post} = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.postContainer}>
                    <Text style={styles.title}>{post.title}</Text>
                    <Text style={styles.body}>{post.body}</Text>
                </View>
                {post.comments && <View style={styles.commentsContainer}>
                    {post.comments.map(this._renderComment)}
                </View>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 2,
    },
    body: {
        flexWrap: 'wrap',
    },
    commentsContainer: {
        marginLeft: 10,
    },
});


const commentStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 10,
    },
    avatar: {
        marginRight: 10,
    },
    bodyContainer: {
        flex: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#EEE',
    },
    body: {
        flexWrap: 'wrap',
    },
});
