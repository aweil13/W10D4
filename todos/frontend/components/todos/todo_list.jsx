import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from "./todo_form";


class TodoList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul>
                <h3>To Do's:</h3>
                {this.props.todos.map((todo, idx) => {
                    return <TodoListItem key={idx} todo={todo} />
                }
                )}
                <TodoForm receiveTodo={this.props.receiveTodo}></TodoForm>
            </ul>
        )
    }
}

export default TodoList;

