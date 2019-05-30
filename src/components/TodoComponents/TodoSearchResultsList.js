import React from 'react';
import Todo from './Todo';

export default function TodoSearchResultsList({ searchResults }) {
  return (
    <div>
      {
        searchResults.length <= 0 ? 
          <div>No results</div>
        :
        searchResults.map(todo => <Todo key={todo.id} todo={todo} />)
      }
    </div>
  )
}
