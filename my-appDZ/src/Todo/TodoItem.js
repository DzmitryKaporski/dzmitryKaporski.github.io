import React, { useContext } from 'react';
import Context from '../Context';

const style = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'centr',
        borderBottom: 'solid 1px blue',
        borderTop: 'solid 1px blue',
        borderRadius: '10px',
        paddingRight: '5px',
        margin: '20px 20px 20px 20px',
    },
    input: {
        marginRight: '10px'
    }
}

function TodoItem({ todo, index, onChange }) {
    const { removeTodo } = useContext(Context)
    const classes = []

    if (todo.completed) {
        classes.push('done')
    }

    return (
        <li style={style.li}>
            <span className={classes.join(' ')}>
                <input
                    type='Checkbox'
                    checked={todo.completed}
                    style={style.input}
                    onChange={() => onChange(todo.id)} />
                <strong>{index + 1}</strong>
                &nbsp;
                {todo.title}
            </span>

            <button className='rm' onClick={() => removeTodo(todo.id)}>&times;</button>
        </li >)
}

export default TodoItem;
