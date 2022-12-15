import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function TodoBoard() {
  return (
    <div>
      <TodoInput />
      <TodoList isWorking={true} />
      <TodoList isWorking={false} />
    </div>
  );
}
