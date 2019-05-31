import React from 'react'

export default function TodoSearch({ searchPhrase, searchTodoHandler }) {
  return (
    <div className="search-bar">
      <input
        type='text'
        placeholder='Search'
        value={searchPhrase}
        onChange={searchTodoHandler}
      />
    </div>
  )
}
