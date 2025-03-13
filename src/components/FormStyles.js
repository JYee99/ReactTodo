import { Select } from "@headlessui/react";
import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  background-color: white;
  width: 600px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.15);
`;
export const InputContainer = styled.div`
  display: flex;
`;
export const FormLabel = styled.label`
  opacity: 0.5;
  font-size: 13px;
`;

export const InputStyle = styled.input`
  outline: none;
  border: none;
  padding: 5px 10px;
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

// list style
export const ListContainer = styled.div`
  background-color: white;
  width: 600px;
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
  margin: 0 10px;
  margin-bottom: 10px;
`;

export const ListCheckBox = styled.input`
  width: 15px;
  cursor: pointer;
  margin: 0;
`;

export const MasterCheckBox = styled(ListCheckBox)`
  margin-bottom: 5px;
`;
export const ListDate = styled.span`
  font-size: 0.75rem;
`;

export const ListText = styled.input`
  width: 260px;
  text-align: center;
  border: none;
  outline: none;

  text-decoration: ${({ checked }) => (checked ? "line-through" : "none")};
  opacity: ${({ checked }) => (checked ? "0.25" : "1")};
`;
export const BtnBox = styled.div`
  display: flex;
  margin: 0;
`;
export const ListEditBtn = styled.button`
  font-size: 13px;
  font-weight: bold;
  margin-right: 10px;
  pointer-events: ${({ checked }) => (checked ? "none" : "auto")};
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

export const CategoriList = styled(Select)`
  padding: 2px 5px;
  border: none;
  color: rgb(67, 127, 255);
`;
