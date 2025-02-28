import React, { useState, useRef } from "react";
import * as S from "./FormStyles";

const Form = () => {
  const maxLength = 15;
  const [todos, setTodos] = useState([
    { id: "asdinin", todo: "숙제하기", checked: false, edit: false },
    { id: "12das", todo: "공부하기", checked: false, edit: false },
    { id: "12dasd", todo: "세차하기", checked: true, edit: false },
  ]);
  const [inputVal, setInputVal] = useState("");
  // 여러 개의 input을 참조하기 위한 객체
  const inputRefs = useRef({});

  // 글자 수 제한 함수
  const checkLength = (length) => {
    if (length > maxLength) {
      alert("15글자 이내로 작성해 주세요.");
      return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.random().toString(),
      todo: inputVal,
      checked: false,
      edit: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
    setInputVal("");
  };

  const onChangeInput = (e) => {
    checkLength(e.target.value.length);
    setInputVal(e.target.value);
  };

  const handleChecked = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const handleEdit = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, edit: !todo.edit } : todo
      )
    );

    // 포커스를 해당 id의 input에 설정
    setTimeout(() => {
      if (inputRefs.current[id]) {
        inputRefs.current[id].focus();
      }
    }, 0);
  };

  const handleEditInput = (e, id) => {
    const newValue = e.target.value;
    checkLength(newValue.length);
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, todo: newValue } : todo))
    );
  };

  const handleDelete = (id) => {
    // prev는 이전 todos 배열이며, setTodos의 인자로 전달됨
    // filter() 함수는 배열을 순회하면서 조건에 맞는 요소만 새로운 배열로 반환함
    // todo.id !== id가 true인 요소만 유지하고, 일치하는 id를 가진 요소는 제거됨
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

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
      <S.ListContainer>
        <S.LiustUl>
          {todos.map((todo) => {
            return (
              <S.ListLi key={todo.id}>
                <S.ListCheckBox
                  type="checkbox"
                  checked={todo.checked}
                  onChange={() => handleChecked(todo.id)}
                />

                <S.ListText
                  ref={(el) => (inputRefs.current[todo.id] = el)} // 해당 id의 input을 저장
                  id={todo.id}
                  type="text"
                  value={todo.todo}
                  onChange={(e) => handleEditInput(e, todo.id)}
                  maxLength={maxLength}
                />

                <S.BtnBox>
                  <S.ListEditBtn onClick={() => handleEdit(todo.id)}>
                    {todo.edit ? "DONE" : "EDIT"}
                  </S.ListEditBtn>
                  <S.ListDeleteBtn onClick={() => handleDelete(todo.id)}>
                    DELETE
                  </S.ListDeleteBtn>
                </S.BtnBox>
              </S.ListLi>
            );
          })}
        </S.LiustUl>
      </S.ListContainer>
    </>
  );
};

export default Form;
