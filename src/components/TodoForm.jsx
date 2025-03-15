import * as S from "./FormStyles";

const TodoForm = ({
  handleSubmit,
  onChangeInput,
  inputVal,
  maxLength,
  onChangeDate,
  category,
  selectedCategory,
  setIsOpen,
  isOpen,
  handleSelect,
}) => {
  return (
    <>
      <S.Form onSubmit={handleSubmit}>
        <S.InputContainer>
          <S.DropDownContainer>
            <S.SelectedCategory onClick={() => setIsOpen(!isOpen)}>
              {selectedCategory}
              <S.Arrow $isOpen={isOpen}>▼</S.Arrow>
              {isOpen && (
                <S.DropdownUl>
                  {category.map((category) => (
                    <S.DropDownList
                      key={category.id}
                      onClick={() => handleSelect(category.value)}
                    >
                      {category.value}
                    </S.DropDownList>
                  ))}
                </S.DropdownUl>
              )}
            </S.SelectedCategory>
          </S.DropDownContainer>
          <S.DateContainer>
            <S.MonInput
              name="mon"
              maxLength={2}
              value={inputVal.date.mon}
              onChange={onChangeDate}
            />
            <S.DateText>월</S.DateText>
            <S.DayInput
              name="day"
              maxLength={2}
              value={inputVal.date.day}
              onChange={onChangeDate}
            />
            <S.DateText>일 까지</S.DateText>
          </S.DateContainer>
          <S.FormInput
            name="todo"
            type="text"
            onChange={onChangeInput}
            value={inputVal.todo}
            maxLength={maxLength}
            placeholder="할 일을 입력해주세요."
          />
        </S.InputContainer>

        <S.FormButton>create</S.FormButton>
      </S.Form>
    </>
  );
};

export default TodoForm;
