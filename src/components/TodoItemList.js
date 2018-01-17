import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }
  // shouldComponentUpdate는 리렌더링 여부를 결정한다.
  render() {
    const { todos, onToggle, onRemove } = this.props;

    const todoList = todos.map(
      (todo) => (
        <TodoItem
          {...todo}
          onToggle={onToggle}
          onRemove={onRemove}
          key={todo.id}
        />
      )
    );

    return (
      <div>
        {todoList}
      </div>
    );
  };
};

export default TodoItemList;