import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";

import { addItem } from "../redux/modules/todos";

const Form = styled.form`
  display: flex;
  background-color: #eee;
  border-radius: 12px;
  justify-content: space-between;
  margin: 0 auto;
  padding: 30px;
`;

const FormInputBox = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
`;

const FormLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
`;

const FormInput = styled.input.attrs({ type: "text" })`
  border: none;
  border-radius: 12px;
  height: 40px;
  padding: 0 12px;
  width: 240px;
`;

const FormButton = styled.button`
  background-color: teal;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-weight: 700;
  height: 40px;
  width: 140px;
  cursor: pointer;
`;

export default function TodoInput() {
  const [titleValue, setTitleValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const dispatch = useDispatch();

  // 제목 입력값을 변경해주는 이벤트
  const onChangeTitleHandler = (event) => {
    setTitleValue(event.target.value);
  };

  // 내용 입력값을 변경해주는 이벤트
  const onChangeTextHandler = (event) => {
    setTextValue(event.target.value);
  };

  // 추가하기 이벤트
  const onSubmitHandler = (event) => {
    event.preventDefault();

    const newTodos = {
      id: uuidv4(),
      title: titleValue,
      text: textValue,
      isDone: false,
    };

    if (!titleValue || !textValue)
      return alert("제목이나 내용을 입력해주세요.");

    dispatch(addItem(newTodos));

    setTitleValue("");
    setTextValue("");
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <FormInputBox>
        <FormLabel htmlFor="title">제목</FormLabel>
        <FormInput
          id="title"
          value={titleValue}
          onChange={onChangeTitleHandler}
        />
        <FormLabel htmlFor="text">내용</FormLabel>
        <FormInput id="text" value={textValue} onChange={onChangeTextHandler} />
      </FormInputBox>
      <FormButton>추가하기</FormButton>
    </Form>
  );
}
