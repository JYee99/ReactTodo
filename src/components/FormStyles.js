import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  background-color: white;
  width: 500px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.15);
`;

export const FormLabel = styled.label`
  opacity: 0.5;
  font-size: 13px;
`;

export const FormInput = styled.input`
  margin: 0 10px;
  outline: none;
  border: none;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: rgb(214, 242, 255);
  color: rgb(67, 127, 255);
  width: 260px;
`;

export const FormButton = styled.button`
  font-size: 14px;
  transition: all 0.15s;
  padding: 3px 10px;
  &:hover {
    color: rgb(67, 127, 255);
  }
`;

// list style
export const ListContainer = styled.div`
  background-color: white;
  width: 500px;
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
  border-bottom: 1px solid rgb(236, 236, 236);
  margin-bottom: 10px;
  padding-bottom: 5px;
`;
export const ListCheckBox = styled.input`
  width: 15px;
  cursor: pointer;
  margin: 0;
`;
export const ListText = styled.input`
  width: 300px;
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
