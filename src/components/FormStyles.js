import styled from "styled-components";

export const RootContainer = styled.div`
  display: flex;
  width: 930px;
  margin-top: 100px;
  align-items: start;
`;
export const TodoContainer = styled.div``;

// form
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 630px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.15);
`;
export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const FormLabel = styled.label`
  opacity: 0.5;
  font-size: 13px;
`;

export const InputStyle = styled.input`
  outline: none;
  border: none;
  padding: 5px 10px;
  height: 45px;
  border-radius: 10px;
  background-color: rgb(214, 242, 255);
  color: rgb(67, 127, 255);
`;

export const FormInput = styled(InputStyle)`
  width: 255px;
`;
export const CategorieInput = styled(InputStyle)`
  width: 140px;
  margin-right: 10px;
`;
export const DateContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const MonInput = styled(InputStyle)`
  width: 40px;
`;
export const DayInput = styled(InputStyle)`
  width: 40px;
`;
export const DateText = styled.span`
  font-size: 0.85rem;
  margin: 0 3px;
`;

export const FormButton = styled.button`
  margin-top: 10px;
  font-size: 1rem;
  letter-spacing: 3px;
  transition: all 0.15s;
  padding: 8px;
  width: 100%;
  border-radius: 10px;
  color: white;
  border: 1px solid rgb(67, 127, 255);
  background-color: rgb(67, 127, 255);
  &:hover {
    background-color: white;
    color: rgb(67, 127, 255);
  }
`;
export const DropDownContainer = styled.div`
  position: relative;
  width: 150px;
  font-size: 0.85rem;
  user-select: none;
  color: #222;
`;
export const SelectedCategory = styled.div`
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #d6f2ff;
  border-radius: 5px;
  cursor: pointer;
`;
export const Arrow = styled.div`
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;
export const DropdownUl = styled.div`
  position: absolute;
  width: 100%;
  background: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 160px;
  left: 0;
  list-style: none;
  padding: 0;
  z-index: 10;
`;
export const DropDownList = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background: #ddd;
  }
`;

// list style
export const ListContainer = styled.div`
  background-color: white;
  width: 630px;
  padding: 20px 15px;
  border-radius: 10px;
  margin-top: 10px;
  box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.15);
`;
export const LiustUl = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`;
export const ListLi = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(236, 236, 236);
  margin-bottom: 10px;
  padding-bottom: 5px;
`;
export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 10px;
  margin-bottom: 10px;
`;
export const TopText = styled.p`
  text-align: center;
  font-size: 0.85rem;
  font-weight: bold;
`;
export const TopTextDate = styled(TopText)`
  width: 55px;
`;
export const TopTextTodos = styled(TopText)`
  width: 260px;
`;
export const TopBtnText = styled(TopText)`
  padding-right: 20px;
`;
export const ListCheckBox = styled.input`
  cursor: pointer;
  margin: 0;
`;

export const MasterCheckBox = styled(ListCheckBox)`
  margin-bottom: 5px;
`;
export const ListDate = styled.span`
  font-size: 0.75rem;
  text-align: center;
  width: 55px;
  color: ${({ $dateConfirm }) => ($dateConfirm ? "red" : "#222")};
`;
export const ListCategory = styled.span`
  font-size: 0.75rem;
`;
export const ListText = styled.input`
  width: 260px;
  text-align: center;
  border: none;
  outline: none;

  text-decoration: ${({ checked, $dateConfirm }) =>
    $dateConfirm ? "none" : checked ? "line-through" : "none"};

  color: ${({ $dateConfirm }) => ($dateConfirm ? "red" : "#222")};
  opacity: ${({ checked, $dateConfirm }) =>
    $dateConfirm ? "1" : checked ? "0.5" : "1"};
`;
export const BtnBox = styled.div`
  display: flex;
  margin: 0;
`;
export const ListEditBtn = styled.button`
  font-size: 13px;
  font-weight: bold;
  margin-right: 10px;
  pointer-events: ${({ checked, $dateConfirm }) =>
    $dateConfirm ? "none" : checked ? "none" : "auto"};
  &:hover {
    color: ${({ checked }) => (checked ? "none" : "rgb(50, 184, 106)")};
  }
`;
export const ListDeleteBtn = styled.button`
  font-size: 13px;
  font-weight: bold;
  &:hover {
    color: rgb(184, 50, 79);
  }
`;

export const NoTodos = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin-top: 20px;
  text-align: center;
`;

// sidbar
export const SideBarContainer = styled.div`
  padding: 20px 10px;
  border-radius: 10px;
  box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  margin-left: 20px;
  width: 400px;
  justify-content: space-between;
  background-color: white;
`;
export const FilterCheckbox = styled(ListCheckBox)`
  margin-right: 5px;
`;
export const FilterContainer = styled.div`
  width: 50%;
  border-right: 1px solid rgba(0, 0, 0, 0.15);
`;
export const FilterTitle = styled.h2`
  font-size: 0.9rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;
export const FilterUl = styled.ul`
  display: flex;
  flex-direction: column;
`;
export const FilterList = styled.li`
  display: flex;
  padding: 2px 7px;
  margin: 0;
`;
export const CategoryContainer = styled.div`
  width: 50%;
`;
export const CategoryTitle = styled.h2`
  font-size: 0.9rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;
export const CategoryUl = styled.ul`
  display: flex;
  flex-direction: column;
`;
export const CategoryList = styled.li`
  margin: 0;
  padding-left: 17px;
  display: flex;
`;
export const SideBarLiText = styled.p`
  margin: 0;
  font-size: 0.8rem;
`;
