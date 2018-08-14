import React, {Component} from 'react';
import Card from '../Shared/Card';
import {connect} from 'react-redux';
import Todo from '../Shared/Todo';


class TodosCard extends Component {
    _onMorePress = () => {
        const {user, onMorePress} = this.props;

        onMorePress && onMorePress(user);
    };

    _renderTodo = (todo) => {
        return (
            <Todo key={todo.id} todo={todo}/>
        );
    };

    render() {
        const {count, todos} = this.props;

        return (
            <Card title={`Todos (${count})`}>
                {todos.map(this._renderTodo)}
            </Card>
        );
    }
}


const mapStateToProps = (state, props) => {
    const todos = state.todos.data.filter(({userId}) => (userId === props.user.id));
    const count = todos.length;

    return {count, todos};
};


export default connect(mapStateToProps)(TodosCard);
