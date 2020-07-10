import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
    return (
        <div className='startLeft'>
            {props.todos.map((todo, index, id, initialVal) => {
                return (
                    <TodoItem
                        id={todo.id}
                        todo={todo}
                        key={todo.id}
                        index={index}
                        onChange={props.onToggle}
                        editTodo={props.editTodo}
                        initialVal={initialVal}
                    />
                )
            })}
        </div>
    )
}

export default TodoList;
