import React from "react";
import styled from "styled-components";

import DetailsItem from "../components/DetailsItem";

const Wrap = styled.div`
  border: 2px solid rgb(238, 238, 238);
  width: 100%;
  height: 100vh;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`;

export default function Detail() {
  return (
    <Wrap>
      <DetailsItem />
    </Wrap>
  );
}
