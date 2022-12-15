import React from "react";
import styled from "styled-components";

import TodoBoard from "../components/TodoBoard";
import TodoHeader from "../components/TodoHeader";

const Wrap = styled.div`
  max-width: 1200px;
  min-height: 800px;
  margin: 10px auto;
`;

export default function Home() {
  return (
    <Wrap>
      <TodoHeader />
      <TodoBoard />
    </Wrap>
  );
}
