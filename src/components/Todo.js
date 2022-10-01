import React from 'react'

const Todo = ({todo, onDelete}) => {
  

  return (
    <div className='todo'>
        <h3>{todo.text}</h3>
        <h3>{todo.description}</h3>
        <h3>{todo.date}</h3>
        <button className='btn-sm' onClick={()=> onDelete(todo.id)}>DELETE</button>
    </div>
  )
}

export default Todo