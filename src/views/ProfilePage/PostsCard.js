import React, {Component} from 'react';
import Card from '../Shared/Card';
import {connect} from 'react-redux';
import Post from '../Shared/Post';


const SHOW_POSTS_NUMBER = 2;


class PostsCard extends Component {
    _onMorePress = () => {
        const {user, onMorePress} = this.props;

        onMorePress && onMorePress(user);
    };

    _renderPost = (post) => {
        return (
            <Post key={post.id} post={post}/>
        );
    };

    render() {
        const {count, posts, showMore} = this.props;

        return (
            <Card
                title={`Posts (${count})`}
                showAction={showMore}
                actionText="more >"
                onActionPress={this._onMorePress}
            >
                {posts.map(this._renderPost)}
            </Card>
        );
    }
}


const mapStateToProps = (state, props) => {
    const filteredPosts = state.posts.data
        .filter(({userId}) => (userId === props.user.id));

    const count = filteredPosts.length;
    const showMore = count > SHOW_POSTS_NUMBER;
    const posts = filteredPosts
        .slice(0, SHOW_POSTS_NUMBER)
        .map((post) => ({
            ...post,
            comments: state.comments.data
                .filter(({postId}) => (postId === post.id)),
        }));

    return {count, showMore, posts};
};


export default connect(mapStateToProps)(PostsCard);
