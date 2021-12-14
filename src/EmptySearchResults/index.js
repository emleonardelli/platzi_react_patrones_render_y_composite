import React from 'react';

function EmptySearchResults({ searchText }) {
  return (
    <p>No hay resultados para "{searchText}"</p>
  )
}

export { EmptySearchResults }