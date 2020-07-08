import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
    return (
        <div className='startLeft'>
            {props.todos.map((todo, index, id, title) => {
                return (
                    <TodoItem
                        id={id}
                        title={title}
                        todo={todo}
                        key={todo.id}
                        index={index}
                        onChange={props.onToggle}
                        editTodo={props.editTodo}
                    />
                )
            })}
        </div>
    )
}

export default TodoList;
