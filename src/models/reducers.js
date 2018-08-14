import {combineReducers} from 'redux';
import users from './users';
import posts from './posts';
import comments from './comments';
import albums from './albums';
import photos from './photos';
import todos from './todos';


export default combineReducers({
    users,
    posts,
    comments,
    albums,
    photos,
    todos,
});
