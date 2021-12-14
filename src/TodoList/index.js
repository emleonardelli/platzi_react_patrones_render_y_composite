import React from 'react';
import './TodoList.css'

function TodoList({
  error,
  loading,
  searchedTodos,
  totalTodos,
  searchText,
  onError,
  onLoading,
  onEmptyTodos,
  onEmptySearchResults,
  render,
  children,
}) {
  const renderFunc = children || render

  return (
    <section className="TodoList-container">
      {error && onError()}
      {loading && onLoading()}
      {(!loading && !totalTodos) && onEmptyTodos()}
      {(!!totalTodos && !searchedTodos.length) &&
        onEmptySearchResults(searchText)}
      {searchedTodos.map(renderFunc)}
    </section>
  );
}

export { TodoList };
