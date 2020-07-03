import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

function AddTodo({ onCreate }) {
    const [value, setValue] = useState('')

    function submitHandler(event) {
        event.preventDefault()

        if (value) {
            onCreate(value)
            setValue('')
        }
    }
    return (
        <form onSubmit={submitHandler}>
            <input value={value} onChange={event => setValue(event.target.value)} />
            <Button type='submit' color="primary">Add todo</Button>
        </form>
    )
}

export default AddTodo;
