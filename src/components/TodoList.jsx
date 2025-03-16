import React from "react";
import * as S from "./FormStyles";
import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  maxLength,
  handleChecked,
  handleEditInput,
  handleEdit,
  handleDelete,
  isEditing,
  masterCheck,
  handleMasterCheck,
  currentDate,
  dateConfirm,
  setDateConfirm,
}) => {
  return (
    <S.ListContainer>
      <S.TopContainer>
        <S.MasterCheckBox
          type="checkbox"
          checked={masterCheck}
          onChange={handleMasterCheck}
        />
        <S.TopTextDate>기한</S.TopTextDate>
        <S.TopTextDate>중요도</S.TopTextDate>
        <S.TopTextTodos>할 일</S.TopTextTodos>
        <S.TopBtnText>수정 / 삭제</S.TopBtnText>
      </S.TopContainer>
      <S.LiustUl>
        {todos?.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            maxLength={maxLength}
            handleChecked={handleChecked}
            handleEditInput={handleEditInput}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            isEditing={isEditing}
            currentDate={currentDate}
            dateConfirm={dateConfirm}
            setDateConfirm={setDateConfirm}
          />
        ))}
        {todos.length === 0 && <S.NoTodos>등록된 할 일이 없습니다.</S.NoTodos>}
      </S.LiustUl>
    </S.ListContainer>
  );
};

export default TodoList;
