import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { deletedItem, changedItem } from "../redux/modules/todos";

const TodoItemBox = styled.div`
  border-radius: 12px;
  padding: 12px 24px 24px;
  border: 4px solid lightblue;
  width: 270px;
`;

const BtnBox = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
`;

const TodoBtn = styled.button`
  cursor: pointer;
  height: 40px;
  width: 50%;
  border-radius: 12px;
  background-color: #fff;
  border: 2px solid ${(props) => props.borderColor};
`;

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();

  // 삭제 기능
  const onClickDeleteHandler = () => {
    dispatch(deletedItem(todo.id));
  };

  // isDone 바꾸기 기능
  const onClickChangeHandler = () => {
    dispatch(changedItem(todo.id));
  };

  return (
    <TodoItemBox>
      <Link to={`/detail/${todo.id}`}>상세정보</Link>
      <h1>{todo.title}</h1>
      <p>{todo.text}</p>
      <BtnBox>
        <TodoBtn borderColor="red" onClick={onClickDeleteHandler}>
          삭제
        </TodoBtn>
        <TodoBtn borderColor="green" onClick={onClickChangeHandler}>
          {todo.isDone ? "취소" : "확인"}
        </TodoBtn>
      </BtnBox>
    </TodoItemBox>
  );
}
