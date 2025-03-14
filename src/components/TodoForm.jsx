import * as S from "./FormStyles";

const TodoForm = ({
  handleSubmit,
  onChangeInput,
  inputVal,
  maxLength,
  onChangeDate,
  categoryVal,
  handleCategoryChange,
}) => {
  return (
    <>
      <S.Form onSubmit={handleSubmit}>
        <S.InputContainer>
          <S.CategorieInput
            placeholder="카테고리"
            value={categoryVal}
            onChange={handleCategoryChange}
          />
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
