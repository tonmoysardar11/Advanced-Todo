import React, { useContext } from 'react'
import todoContext from '../context/todoContext'

const PendingTodo = () => {
  const output = useContext(todoContext);
  const { notdone, completed, total } = output;
  return (
    <>
    <h3 className='text-center'>Pending</h3>
      <hr />
    <div className='display'>
      {notdone.length !== 0 ? notdone.map((element) => {
        return <div className="todoitem" key={element.id}>
          <h5 className='todoname'>{element.name}</h5>
          <hr />
        </div>
      }) : <h6 className='text-center my-4'>No Pending Work. Welldone !!</h6>}
    </div>
      <hr />
      <h6 className='text-center'>{completed}/{total} Completed</h6>
    </>
  )
}

export default PendingTodo
