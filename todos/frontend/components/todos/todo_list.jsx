import React from 'react';
import TodoListItem from './todo_list_item';


class TodoList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul>
                <h3>To Do's:</h3>
                {this.props.todos.map((todo, idx) => {
                    return <TodoListItem key={idx} todo={todo}/>
                }
                )}
            </ul>
        )
    }
}

export default TodoList;