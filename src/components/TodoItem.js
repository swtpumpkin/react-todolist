import React, { Component } from 'react';
import './TodoItem.css';

/*
  text: todo 내용
  checked: 체그박스 상태
  id: todo의 고유 아이디
  onToggle: 체크박스를 켜고 끄는 함수
  onRemove: 아이템을 삭제시키는 함수
*/

class TodoItem extends Component {
  
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }

  render() {
    const { text, checked, id, onToggle, onRemove } = this.props;

    return (
      <div className="todo-item" onClick={() => onToggle(id)}>
        <div className="remove" onClick={(e) => {
          e.stopPropagation(); // stopPropagation()는 이벤트의 확산을 막아줌 onRemove만 실행됨
          onRemove(id)
          }
        }>
          &times;
        </div>
        <div className={`todo-text ${checked && 'checked'}`}>
          <div>{text}</div>
        </div>
        {
          checked && (<div className="check-mark">✓</div>)
        }
      </div>
    )
  }
}

export default TodoItem;