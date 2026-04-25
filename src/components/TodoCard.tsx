import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateStatus, type Todo } from "../utils/TodoDataSlice";
import { useEffect } from "react";

function TodoCard() {
  const todoData = useSelector((store) => store.dataSlice.value);
  const dispatch = useDispatch();

  const handleClick = (id: number) => {
    dispatch(updateStatus(id));
  };

  const handleRemoveClick = (id: number) => {
    dispatch(removeTodo(id));
  };

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todoData))
  },[todoData])

  return (
    <div>
      {todoData.length === 0 ? (
        <p>Enter Todos</p>
      ) : (
        todoData.map((todo: Todo) => (
          <div key={todo.id}>
            <div className="flex items-center p-1">
              <input
                type="checkbox"
                checked={todo.status == "green"}
                className="m-1"
                onChange={() => handleClick(todo.id)}
              />
              <p
                className={
                  todo.status == "green" ? "line-through text-gray-400" : ""
                }
              >
                {todo.text}
              </p>
              <span
                className="p-1 ml-1 border hover: cursor-pointer"
                onClick={() => handleRemoveClick(todo.id)}
              >
                Remove
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default TodoCard;
