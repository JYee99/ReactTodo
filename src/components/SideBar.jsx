import React from "react";
import * as S from "./FormStyles";

const SideBar = ({ category, filters }) => {
  return (
    <S.SideBarContainer>
      <S.FilterContainer>
        <S.FilterTitle>FILTER</S.FilterTitle>
        <S.FilterUl>
          {filters.map((list) => {
            return (
              <S.FilterList key={list.id}>
                <S.FilterCheckbox
                  type="checkbox"
                  name={list.id}
                  onClick={filertOnClick}
                />
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
  );
};

export default SideBar;
