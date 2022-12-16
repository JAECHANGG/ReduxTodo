import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { deletedItem, changedItem } from "../redux/modules/todos";

const TodoItemBox = styled.div`
  overflow: hidden;
  border-radius: 12px;
  border: 4px solid lightblue;
  width: 270px;
`;

const TodoTitle = styled.h2`
  margin: 0;
  color: white;
  padding: 10px;
  height: 30px;
  background-color: lightblue;
  overflow: hidden;
`;

const TodoText = styled.p`
  font-weight: 700;
  height: 40px;
  padding: 10px;
  margin: 0;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
  padding: 10px;
  border-top: 4px solid lightblue;
`;

const TodoBtn = styled.button`
  cursor: pointer;
  background-color: #fff;
  border: none;
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
      <TodoTitle>{todo.title.slice(0, 12)}</TodoTitle>
      <TodoText>{todo.text.slice(0, 40)}</TodoText>
      <BtnBox>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={`/detail/${todo.id}`}
        >
          자세히 보기
        </Link>
        <TodoBtn onClick={onClickDeleteHandler}>🗑️</TodoBtn>
        <TodoBtn onClick={onClickChangeHandler}>
          {todo.isDone ? "❌" : "☑️"}
        </TodoBtn>
      </BtnBox>
    </TodoItemBox>
  );
}
