import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
    return (
        <div className='startLeft'>
            <ul>
                {props.todos.map((todo, index) => {
                    return (
                        <TodoItem
                            todo={todo}
                            key={todo.id}
                            index={index}
                            onChange={props.onToggle}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

export default TodoList;
