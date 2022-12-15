import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const Wrap = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid rgb(238, 238, 238);
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
`;

const HeaderWrap = styled.div`
  display: flex;
  height: 80px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0px 24px;
  -webkit-box-align: center;
  align-items: center;
`;

const BackBtn = styled.button`
  border: 1px solid rgb(221, 221, 221);
  height: 40px;
  width: 120px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  cursor: pointer;
`;

const BodyWrap = styled.div`
  padding: 24px;
`;
export default function DetailsItem() {
  const items = useSelector((state) => state.todos);

  const param = useParams();

  const item = items.find((item) => item.id === param.id);
  console.log(item);
  return (
    <Wrap>
      <HeaderWrap>
        <h3>ID : {item.id.slice(0, 5)}</h3>
        <Link to="/">
          <BackBtn>이전으로</BackBtn>
        </Link>
      </HeaderWrap>
      <BodyWrap>
        <h1>{item.title}</h1>
        <h2>{item.text}</h2>
      </BodyWrap>
    </Wrap>
  );
}
