import React from 'react';
import './TodoSearch.css';

function TodoSearch() {
  const onSearchValueChange = (ev) => {
    console.log(ev.target.value);
  }

  return (
    <input
      onChange={onSearchValueChange}
      className="TodoSearch"
      placeholder="Cebolla"
    />
  );
}

export { TodoSearch };
