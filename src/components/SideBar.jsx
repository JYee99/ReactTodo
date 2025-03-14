import React from "react";
import * as S from "./FormStyles";

const SideBar = ({ categories }) => {
  const filters = [
    { id: "olders", value: "⏳ 기한 ▲" },
    { id: "newest", value: "⏳ 기한 ▼" },
    { id: "completed", value: " ✔ 완료된 항목" },
    { id: "incomplete", value: "❌ 미완료 항목" },
    { id: "expired", value: "⏰ 기한 만료" },
    { id: "inProgress", value: "🔄 진행 중" },
  ];

  return (
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
          {categories.map((list) => {
            return (
              <S.CategoryList>
                <S.FilterCheckbox type="checkbox" name={list.id} />
                <S.SideBarLiText>{list.value}</S.SideBarLiText>
              </S.CategoryList>
            );
          })}
        </S.FilterUl>
      </S.CategoryContainer>
    </S.SideBarContainer>
  );
};

export default SideBar;
