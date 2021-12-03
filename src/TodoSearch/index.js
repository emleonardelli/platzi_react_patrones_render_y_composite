import React from 'react';
import './TodoSearch.css';

function TodoSearch({
  searchValue,
  setSearchValue,
}) {
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
