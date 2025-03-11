import React from 'react'

export default function TodoCard(props) {
  const {children , handleDelete , index , handleEdit} = props
  return (
    <li className='todoItem'>
      {children}
            <div className='actionsContainer'>
              
            <button onClick={() => {
              handleEdit(index)
            }}>
              <i class="fa-solid fa-square-pen"></i>
            </button>
            <button onClick={() => {
              handleDelete(index)
            }}>
              <i class="fa-regular fa-square-minus"></i>
            </button>
            </div>
    </li>
  )
}
