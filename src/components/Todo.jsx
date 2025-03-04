import React, { useState, useRef, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = () => {
  const initialTodos = JSON.parse(localStorage.getItem("myTodos")) || [];
  const maxLength = 15;
  const [todos, setTodos] = useState(initialTodos);
  const [inputVal, setInputVal] = useState("");
  // 여러 개의 input을 참조하기 위한 객체
  const inputRefs = useRef({});

  const isEditing = todos.some((todo) => todo.edit);

  // todos가 변경될 때 마다 localstorage 업데이트
  useEffect(() => {
    localStorage.setItem("myTodos", JSON.stringify(todos));
  }, [todos]);

  // 글자 수 제한 함수
  const checkLength = (length) => {
    if (length > maxLength) {
      alert("15글자 이내로 작성해 주세요.");
      return;
    }
    if (length < 1) {
      alert("1글자 이상 작성해 주세요.");
      return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkLength(inputVal.length) || inputVal.trim() === "") return;

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
    setInputVal(e.target.value);
  };

  const handleChecked = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        // 클릭한 todo의 id와 일치하면 checked 값을 반대로 변경
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const handleEdit = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        // 클릭한 todo의 id와 일치하면 edit 값을 반대로 변경
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
      <TodoForm
        handleSubmit={handleSubmit}
        onChangeInput={onChangeInput}
        inputVal={inputVal}
        maxLength={maxLength}
      />
      <TodoList
        todos={todos}
        inputRefs={inputRefs}
        maxLength={maxLength}
        handleChecked={handleChecked}
        handleEditInput={handleEditInput}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        isEditing={isEditing}
      />
    </>
  );
};

export default Todo;
