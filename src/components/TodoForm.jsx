import React from "react";
import * as S from "./FormStyles";

const TodoForm = ({ handleSubmit, onChangeInput, inputVal, maxLength }) => {
  return (
    <>
      <S.Form onSubmit={handleSubmit}>
        <S.FormLabel>할 일을 입력해주세요.</S.FormLabel>
        <S.FormInput
          id="todoInput"
          type="text"
          onChange={onChangeInput}
          value={inputVal}
          maxLength={maxLength}
        />
        <S.FormButton>create</S.FormButton>
      </S.Form>
    </>
  );
};

export default TodoForm;
