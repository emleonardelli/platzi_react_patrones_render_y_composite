import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);
  const onSearchValueChange = (ev) => {
    setSearchValue(ev.target.value);
    console.log(searchValue);
  }

  return (
    <input
      onChange={onSearchValueChange}
      className="TodoSearch"
      placeholder="Cebolla"
      value={searchValue}
    />
  );
}

export { TodoSearch };
