import React, { useEffect, useRef, useState } from "react";
import * as S from "./FormStyles";

const TodoItem = ({
  todo,
  maxLength,
  handleChecked,
  handleEditInput,
  handleEdit,
  handleDelete,
  masterCheck,
}) => {
  // 여러 개의 input을 참조하기 위한 객체
  const inputRef = useRef(null);
  useEffect(() => {
    if (todo.edit && inputRef.current) {
      inputRef.current.focus();
    }
  }, [todo.edit]);
  const [dateConfirm, setDateConfirm] = useState(false);

  const newDate = new Date();
  const newMon = newDate.getMonth() + 1;
  const newDay = newDate.getDate();

  useEffect(() => {
    const dayChecked = () => {
      if (newMon > todo.date.mon) {
        setDateConfirm(true);
      } else if (newDay > todo.date.day) {
        setDateConfirm(true);
      }
    };
    dayChecked();
  }, []);
  useEffect(() => {
    if (masterCheck) {
      handleChecked(todo.id, true);
    } else {
      handleChecked(todo.id, false);
    }
  }, [masterCheck]);
  return (
    <S.ListLi key={todo.id}>
      <S.ListCheckBox
        type="checkbox"
        checked={todo.checked}
        onChange={() => handleChecked(todo.id)}
      />

      <S.ListDate $dateConfirm={dateConfirm}>
        {dateConfirm ? "기한 만료" : `${todo.date.mon}월 ${todo.date.day}일`}
      </S.ListDate>
      <S.ListText
        ref={inputRef}
        id={todo.id}
        type="text"
        value={todo.todo}
        onChange={(e) => handleEditInput(e, todo.id)}
        maxLength={maxLength}
        checked={todo.checked}
        readOnly={!todo.edit}
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
