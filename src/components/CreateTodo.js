import React, { useContext } from 'react'
import todoContext from '../context/todoContext';

const CreateTodo = () => {
    const output = useContext(todoContext);
    const { changeTodo, submit, todo, disable } = output;


    return (
        <>
            <form className='my-3'>
                <input type="text" name="name" id="todo" className="form-control" placeholder='Enter Your Todo' onChange={changeTodo} value={todo.name} />
                <button onClick={submit} disabled={disable} className='btn btn-info'>Add</button>
            </form>
        </>
    )
}

export default CreateTodo
