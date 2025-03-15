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
  currentDate,
}) => {
  // 여러 개의 input을 참조하기 위한 객체
  const inputRef = useRef(null);
  const [dateConfirm, setDateConfirm] = useState(false);

  useEffect(() => {
    if (todo.edit && inputRef.current) {
      inputRef.current.focus();
    }
  }, [todo.edit]);

  useEffect(() => {
    const todoMon = Number(todo.date.mon);
    const todoDay = Number(todo.date.day);
    const dayChecked = () => {
      if (currentDate.mon > todoMon) {
        setDateConfirm(true);
      } else if (currentDate.mon === todoMon && currentDate.day > todoDay) {
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
        $dateConfirm={dateConfirm}
        disabled={dateConfirm}
      />

      <S.ListDate $dateConfirm={dateConfirm}>
        {dateConfirm ? "기한 만료" : `${todo.date.mon}월 ${todo.date.day}일`}
      </S.ListDate>
      <S.ListCategory>{todo.category}</S.ListCategory>
      <S.ListText
        id={todo.id}
        type="text"
        value={todo.todo}
        onChange={(e) => handleEditInput(e, todo.id)}
        maxLength={maxLength}
        checked={todo.checked}
        readOnly={!todo.edit}
        $dateConfirm={dateConfirm}
      />

      <S.BtnBox>
        <S.ListEditBtn
          onClick={() => handleEdit(todo.id)}
          disabled={todo.checked}
          checked={todo.checked}
          $dateConfirm={dateConfirm}
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
