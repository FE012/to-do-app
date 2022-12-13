import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";

const InputBox = ({ todoList, setTodoList }) => {
  const [text, setText] = useState("");
  const inputRef = useRef(null); // 1

  // input 값 가져오기
  const inChangeInput = (e) => {
    setText(e.target.value);
  };

  const onPressSubmitButton = (e) => {
    e.preventDefault();

    // todoItemList에 값 추가
    const nextTodoList = todoList.concat({
      // (2)
      id: todoList.length, // (2-1)
      text, // (2-2)
      checked: false,
      deleted: false,
    });
    setTodoList(nextTodoList);

    setText(""); // input 값을 초기화
    inputRef.current.focus(); // input으로 포커싱
  };

  return (
    <form onSubmit={onPressSubmitButton} className="todoapp__inputbox">
      {/* 아이템 내용 입력 input */}
      <input
        type="text"
        placeholder="할 일을 입력해주세요.."
        value={text}
        name="todoItem"
        ref={inputRef}
        className="todoapp__inputbox-inp"
        onChange={inChangeInput}
      />
      {/* 입력 후 아이템 추가 버튼 */}
      <button type="submit" className="todoapp__inputbox-add-btn">
        추가
      </button>
    </form>
  );
};
// props 값 검증
InputBox.propTypes = {
  todoList: PropTypes.arrayOf(
    // (3)
    PropTypes.shape({
      // (3-1)
      id: PropTypes.number.isRequired, // (3-2)
      text: PropTypes.string.isRequired, // (3-3)
    }).isRequired
  ),
  setTodoList: PropTypes.func.isRequired, // (4)
};

export default InputBox;
