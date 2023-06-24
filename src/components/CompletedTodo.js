import React, { useContext } from 'react'
import todoContext from '../context/todoContext'

const CompletedTodo = () => {
  const output = useContext(todoContext);
  const { done, completed, total } = output;
  return (
    <>
      <h3 className='text-center'>Completed</h3>
      <hr />
      <div className='display'>
        {done.length !== 0 ? done.map((element) => {
            return <div className="todoitem" key={element.id}>
            <h5 className='todoname'>{element.name}</h5>
             <hr /> 
          </div>
        }) : <h6 className='text-center my-4'>Complete Tasks To Add Them Here</h6>}
      </div>
        <hr />
        <h6 className='text-center'>{completed}/{total} Completed</h6>
    </>
  )
}

export default CompletedTodo
