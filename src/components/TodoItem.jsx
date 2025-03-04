import React, { useEffect, useRef } from "react";
import * as S from "./FormStyles";

const TodoItem = ({
  todo,
  maxLength,
  handleChecked,
  handleEditInput,
  handleEdit,
  handleDelete,
}) => {
  // 여러 개의 input을 참조하기 위한 객체
  const inputRef = useRef(null);
  useEffect(() => {
    if (todo.edit && inputRef.current) {
      inputRef.current.focus();
    }
  }, [todo.edit]);

  return (
    <S.ListLi key={todo.id}>
      <S.ListCheckBox
        type="checkbox"
        checked={todo.checked}
        onChange={() => handleChecked(todo.id)}
      />

      <S.ListText
        ref={inputRef}
        id={todo.id}
        type="text"
        value={todo.todo}
        onChange={(e) => handleEditInput(e, todo.id)}
        maxLength={maxLength}
        checked={todo.checked}
      />

      <S.BtnBox>
        <S.ListEditBtn
          onClick={() => handleEdit(todo.id)}
          disabled={todo.checked}
          checked={todo.checked}
        >
          {todo.edit ? "DONE" : "EDIT"}
        </S.ListEditBtn>
        <S.ListDeleteBtn onClick={() => handleDelete(todo.id)}>
          DELETE
        </S.ListDeleteBtn>
      </S.BtnBox>
    </S.ListLi>
  );
};

export default TodoItem;
