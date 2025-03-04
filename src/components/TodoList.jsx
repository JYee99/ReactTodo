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
}) => {
  return (
    <S.ListContainer>
      <S.LiustUl>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            maxLength={maxLength}
            handleChecked={handleChecked}
            handleEditInput={handleEditInput}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            isEditing={isEditing}
          />
        ))}
      </S.LiustUl>
    </S.ListContainer>
  );
};

export default TodoList;
