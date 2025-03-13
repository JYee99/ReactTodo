import React, { useState } from "react";
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
  categories,
  handleSelected,
  handleDoneFilter,
}) => {
  return (
    <S.ListContainer>
      <S.TopContainer>
        <S.MasterCheckBox
          type="checkbox"
          checked={masterCheck}
          onChange={handleMasterCheck}
        />

        <S.CategoriList name="donefilter" onChange={handleDoneFilter}>
          <option value="all">전체 보기</option>
          <option value="completed">완료만 보기</option>
          <option value="incomplete">미완료만 보기</option>
        </S.CategoriList>
        <S.CategoriList name="categorie" onChange={handleSelected}>
          {categories.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </S.CategoriList>
      </S.TopContainer>
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
