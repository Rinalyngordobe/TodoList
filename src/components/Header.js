import React from 'react'

const Header = ({title, addTodo, showForm}) => {
  return (
    <div className='header'>
        <h2>{title}</h2>
        <button className='btn' style={{backgroundColor:'green' }} onClick={addTodo}>{showForm ? 'CLOSE':'ADD'}</button>
    </div>
  )
}

Header.defaultProps = {
    title: 'Todo List'
}

export default Header