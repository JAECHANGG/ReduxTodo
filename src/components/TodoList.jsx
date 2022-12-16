import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import TodoItem from "./TodoItem";

const TodoListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const H1 = styled.h1``;

export default function TodoList({ isWorking }) {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <H1>{isWorking ? "Active" : "isDone"}</H1>
      <TodoListBox>
        {todos
          .filter((todo) => (todo.isDone ? !isWorking : isWorking))
          .map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
      </TodoListBox>
    </div>
  );
}
