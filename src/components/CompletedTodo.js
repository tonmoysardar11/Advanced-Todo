import React, { useContext } from 'react'
import todoContext from '../context/todoContext'

const CompletedTodo = () => {
  const output = useContext(todoContext);
  const { done, completed, total,remove, check,clearCompleted } = output;
  return (
    <>
      <div className='display'>
        {done.length !== 0 ? done.map((element) => {
          return <div className="todoitem" key={element.id}>
          <input type="checkbox" onChange={() => check(element)} checked={element.checked} />
          <label className='todoname form-label'>{element.name}</label><button className="btn btn-danger btn-sm" onClick={() => remove(element.id)}>Delete</button>
      </div>
        }) : <h6 className='text-center my-4'>Complete Tasks To Add Them Here</h6>}
      </div>
      <hr />
      <div className='d-flex justify-content-center align-items-center'>
      <h6>{completed}/{total} Completed</h6>
      <button className={`${done.length !== 0?'btn':'d-none'} btn-danger btn-sm mx-3`} onClick={clearCompleted}>Clear</button>
      </div>
    </>
  )
}

export default CompletedTodo
