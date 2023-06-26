import React, { useContext } from 'react'
import todoContext from '../context/todoContext';

const ShowTodo = () => {
    const output = useContext(todoContext);
    const { remove, check, completed, total, todolist } = output;


    return (
        <>
                <h3 className='text-center'>Your Todos</h3>
                <hr />
            <div className='display'>
                {todolist.length !== 0 ? todolist.map((element) => {
                    return <div className="todoitem" key={element.id}>
                        <input type="checkbox" onChange={() => check(element)} checked={element.checked} />
                        <label className='todoname form-label'>{element.checked?<del>{element.name}</del>:element.name}</label><button className="btn btn-danger btn-sm" onClick={() => remove(element.id)}>Delete</button>
                    </div>
                }) : <h6 className='text-center my-4'>Nothing to Display. Try Adding Some.</h6> }
            </div>
                <hr />
                <h6 className='text-center'>{completed}/{total} Completed</h6>
        </>

    )
}

export default ShowTodo
