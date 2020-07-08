import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

function EditTodoForm({ editTodo, id, title, toggleEditForm }) {
    const [valueTodo, updateTodoValue] = useState(title)

    function submitHandler(event) {
        event.preventDefault()
        editTodo(id, valueTodo)
        toggleEditForm()

        if (valueTodo) {
            editTodo(valueTodo)
            updateTodoValue('')
        }
        console.log(valueTodo)
    }

    return (
        <form onSubmit={submitHandler} >
            <input
                className='inputWidth'
                value={valueTodo}
                onChange={event => updateTodoValue(event.target.value)}
            />


            <Button
                type='submit'
                color="primary"
            >Save change</Button>
        </form>

    )

}

export default EditTodoForm;
