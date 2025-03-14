import React, { useState, useRef, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import SideBar from "./SideBar";
import * as S from "./FormStyles";

const Todo = () => {
  const inputInitial = {
    todo: "",
    date: {
      mon: "",
      day: "",
    },
  };
  const initialTodos = JSON.parse(localStorage.getItem("myTodos")) || [];
  const initialCategories = [
    { id: "high", value: "🔥 중요도 (최상)" },
    { id: "upperMid", value: "🔴 중요도 (상)" },
    { id: "mid", value: "🟡 중요도 (중)" },
    { id: "lowerMid", value: "🟢 중요도 (하)" },
    { id: "low", value: "🔵 중요도 (최하)" },
  ];

  const maxLength = 15;
  const [todos, setTodos] = useState(initialTodos);
  const [inputVal, setInputVal] = useState(inputInitial);
  // 여러 개의 input을 참조하기 위한 객체
  const inputRefs = useRef({});
  const [masterCheck, setMasterCheck] = useState(false);
  const [categoryVal, setCategoryVal] = useState("");
  const [categories, setCategories] = useState(initialCategories);

  const [filteredTodos, setFilteredTodos] = useState(todos); // 필터링 목록 상태
  const isEditing = todos.some((todo) => todo.edit);

  // todos가 변경될 때 마다 localstorage, filteredTodos 업데이트
  useEffect(() => {
    localStorage.setItem("myTodos", JSON.stringify(todos));
    setFilteredTodos(todos);
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
    if (checkLength(inputVal.todo.length) || inputVal.todo.trim() === "")
      return;
    const newTodo = {
      id: Math.random().toString(),
      todo: inputVal.todo,
      date: inputVal.date,
      checked: false,
      edit: false,
      category: categoryVal,
    };
    console.log(newTodo);

    setTodos((prev) => [newTodo, ...prev]);
    setInputVal(inputInitial);
    setCategoryVal("");
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setInputVal((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const onChangeDate = (e) => {
    const { name, value } = e.target;
    setInputVal((prev) => ({
      ...prev,
      date: {
        ...prev.date,
        [name]: value,
      },
    }));
  };

  const handleChecked = (id) => {
    setTodos((prev) => {
      const updatedTodos = prev.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      );

      localStorage.setItem("myTodos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
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

  useEffect(() => {
    setMasterCheck(todos.every((todo) => todo.checked)); // todos의 상태에 따라 masterCheck 동기화
  }, [todos]);

  const handleMasterCheck = () => {
    // 모든 항목이 체크되어 있는지 확인
    const allChecked = todos.every((todo) => todo.checked);
    // 하나라도 해제 상태면 전체 체크, 그렇지 않으면 전체 해제
    const newCheckState = !allChecked;

    setMasterCheck(newCheckState);
    setTodos((prev) => {
      const updatedTodos = prev.map((todo) => ({
        ...todo,
        checked: newCheckState,
      }));

      localStorage.setItem("myTodos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  };

  const handleCategoryChange = (e) => {
    setCategoryVal(e.target.value);
  };

  return (
    <>
      <S.RootContainer>
        <S.TodoContainer>
          <TodoForm
            handleSubmit={handleSubmit}
            onChangeInput={onChangeInput}
            inputVal={inputVal}
            onChangeDate={onChangeDate}
            maxLength={maxLength}
            categoryVal={categoryVal}
            handleCategoryChange={handleCategoryChange}
          />
          <TodoList
            todos={filteredTodos}
            inputRefs={inputRefs}
            maxLength={maxLength}
            handleChecked={handleChecked}
            handleEditInput={handleEditInput}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            isEditing={isEditing}
            masterCheck={masterCheck}
            handleMasterCheck={handleMasterCheck}
          />
        </S.TodoContainer>

        <SideBar categories={categories} />
      </S.RootContainer>
    </>
  );
};

export default Todo;
