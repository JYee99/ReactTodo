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
  const filters = [
    { id: "olders", value: "⏳ 기한 ▲" },
    { id: "newest", value: "⏳ 기한 ▼" },
    { id: "completed", value: " ✔ 완료된 항목" },
    { id: "incomplete", value: "❌ 미완료 항목" },
    { id: "expired", value: "⏰ 기한 만료" },
  ];
  const maxLength = 15;
  const [todos, setTodos] = useState(initialTodos);
  const [inputVal, setInputVal] = useState(inputInitial);
  // 여러 개의 input을 참조하기 위한 객체
  const inputRefs = useRef({});
  const [masterCheck, setMasterCheck] = useState(false);
  const [category, setCategory] = useState(initialCategories);
  const [dateConfirm, setDateConfirm] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("카테고리 선택");
  const [isOpen, setIsOpen] = useState(false);

  const newDate = new Date();
  const currentDate = {
    mon: newDate.getMonth() + 1,
    day: newDate.getDate(),
  };
  const isEditing = todos.some((todo) => todo.edit);

  // todos가 변경될 때 마다 localstorage, filteredTodos 업데이트
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
    const inputMon = Number(inputVal.date.mon);
    const inputDay = Number(inputVal.date.day);
    if (checkLength(inputVal.todo.length) || inputVal.todo.trim() === "")
      return;
    if (currentDate.mon > inputMon) {
      return alert("날짜(월)를 다시 입력해 주세요.");
    } else if (currentDate.mon === inputMon && currentDate.day > inputDay) {
      return alert("날짜(일)를 다시 입력해 주세요.");
    }
    const newTodo = {
      id: Math.random().toString(),
      todo: inputVal.todo,
      date: inputVal.date,
      checked: false,
      edit: false,
      category: selectedCategory,
    };
    console.log(newTodo);

    setTodos((prev) => [newTodo, ...prev]);
    setInputVal(inputInitial);
    setSelectedCategory("카테고리 선택");
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
    // 기한이 남아 있는 Todo 필터링
    const availableTodos = todos.filter((todo) => {
      const todoMonth = Number(todo.date.mon);
      const todoDay = Number(todo.date.day);

      return (
        todoMonth > currentDate.mon || // 미래 날짜
        (todoMonth === currentDate.mon && todoDay >= currentDate.day) // 같은 달이면 오늘 이후 날짜만
      );
    });

    // 체크 가능한 항목이 모두 체크 상태인지 확인 (모두 체크 -> 해제, 아니면 체크)
    const allAvailableChecked = availableTodos.every((todo) => todo.checked);
    const newCheckState = !allAvailableChecked; // 토글 기능 구현

    // todos 업데이트 (기한이 남은 항목만 checked 상태 변경)
    const updatedTodos = todos.map((todo) => {
      const todoMonth = Number(todo.date.mon);
      const todoDay = Number(todo.date.day);
      const isExpired =
        todoMonth < currentDate.mon ||
        (todoMonth === currentDate.mon && todoDay < currentDate.day);

      return isExpired ? todo : { ...todo, checked: newCheckState }; // 기한이 지난 항목은 변경 X
    });

    setTodos(updatedTodos); // 상태 업데이트
    setMasterCheck(newCheckState); // 마스터 체크 상태 즉시 반영
  };
  useEffect(() => {
    // 기한이 남아 있는 항목들만 대상으로 masterCheck 상태 갱신
    const availableTodos = todos.filter((todo) => {
      const todoMonth = Number(todo.date.mon);
      const todoDay = Number(todo.date.day);

      return (
        todoMonth > currentDate.mon ||
        (todoMonth === currentDate.mon && todoDay >= currentDate.day)
      );
    });

    // 모든 기한이 남은 항목이 체크 상태면 masterCheck도 체크 상태로 변경
    setMasterCheck(
      availableTodos.length > 0 && availableTodos.every((todo) => todo.checked)
    );
  }, [todos]);

  const handleSelect = (category) => {
    setSelectedCategory(category);
    setIsOpen(false); // 선택 후 리스트 닫기
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
            category={category}
            setIsOpen={setIsOpen}
            handleSelect={handleSelect}
            selectedCategory={selectedCategory}
            isOpen={isOpen}
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
            masterCheck={masterCheck}
            handleMasterCheck={handleMasterCheck}
            currentDate={currentDate}
            dateConfirm={dateConfirm}
            setDateConfirm={setDateConfirm}
          />
        </S.TodoContainer>
        <S.SideBarContainer>
          <S.FilterContainer>
            <S.FilterTitle>FILTER</S.FilterTitle>
            <S.FilterUl>
              {filters.map((list) => {
                return (
                  <S.FilterList key={list.id}>
                    <S.FilterCheckbox type="checkbox" name={list.id} />
                    <S.SideBarLiText>{list.value}</S.SideBarLiText>
                  </S.FilterList>
                );
              })}
            </S.FilterUl>
          </S.FilterContainer>
          <S.CategoryContainer>
            <S.CategoryTitle>CATEGORY</S.CategoryTitle>
            <S.FilterUl>
              {category.map((list) => {
                return (
                  <S.CategoryList key={list.id}>
                    <S.FilterCheckbox type="checkbox" name={list.id} />
                    <S.SideBarLiText>{list.value}</S.SideBarLiText>
                  </S.CategoryList>
                );
              })}
            </S.FilterUl>
          </S.CategoryContainer>
        </S.SideBarContainer>
        {/* <SideBar categories={categories} filters={filters} /> */}
      </S.RootContainer>
    </>
  );
};

export default Todo;
