// Action Value
const ADD_TODO = "ADD_TODO";
const DELETED_TODO = "DELETED_TODO";
const CHANGED_TODO = "CHANGED_TODO";

// Action Creator

// 추가
export const addItem = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

// 삭제
export const deletedItem = (payload) => {
  return {
    type: DELETED_TODO,
    payload,
  };
};

// 바꾸기
export const changedItem = (payload) => {
  return {
    type: CHANGED_TODO,
    payload,
  };
};

// Initial State
const initialState = [
  { id: "1", title: "리액트 복습하기", text: "열심히 하자", isDone: false },
  { id: "2", title: "TodoList 복습하기", text: "가즈아", isDone: true },
];

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETED_TODO:
      return state.filter((item) => item.id !== action.payload);
    case CHANGED_TODO:
      return state.map((item) => {
        if (item.id === action.payload)
          return { ...item, isDone: !item.isDone };
        else return item;
      });
    default:
      return state;
  }
};

export default todos;
