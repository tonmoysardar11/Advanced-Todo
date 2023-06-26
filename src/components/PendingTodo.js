import React, { useContext } from 'react'
import todoContext from '../context/todoContext'

const PendingTodo = () => {
  const output = useContext(todoContext);
  const { notdone, completed, total,remove, check } = output;
  return (
    <>
      <h3 className='text-center'>Pending</h3>
      <hr />
      <div className='display'>
        {notdone.length !== 0 ? notdone.map((element) => {
          return <div className="todoitem" key={element.id}>
          <input type="checkbox" onChange={() => check(element)} checked={element.checked} />
          <label className='todoname form-label'>{element.checked?<del>{element.name}</del>:element.name}</label><button className="btn btn-danger btn-sm" onClick={() => remove(element.id)}>Delete</button>
      </div>
        }) : <h6 className='text-center my-4'>No Pending Work. Welldone !!</h6>}
      </div>
      <hr />
      <h6 className='text-center'>{completed}/{total} Completed</h6>
    </>
  )
}

export default PendingTodo
