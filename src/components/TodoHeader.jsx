import React from "react";
import styled from "styled-components";

const Header = styled.div`
  margin-top: 50px;
  padding: 0 10px;
  display: flex;
  justify-content: center;
`;

const HeaderTitle = styled.h1`
  font-weight: 800;
`;

const TodoHeader = () => {
  return (
    <Header>
      <HeaderTitle>TodoList App</HeaderTitle>
    </Header>
  );
};

export default TodoHeader;
