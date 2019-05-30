import React from 'react'

export default function TodoSearch({ searchPhrase, searchTodoHandler }) {
  return (
    <div>
      <input
        type='text'
        placeholder='Search'
        value={searchPhrase}
        onChange={searchTodoHandler}
      />
    </div>
  )
}
