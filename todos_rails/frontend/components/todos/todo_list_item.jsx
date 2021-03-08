import React from 'react';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render (){
        let title = this.props.todo.title;
        let id = this.props.todo.id
        return (
            <li key={id}>{title}</li>
        );
    }

}

export default TodoListItem;