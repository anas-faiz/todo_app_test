import { useSelector } from "react-redux"
import type { Todo } from "../utils/TodoDataSlice"

function TodoCard() {

  const todoData = useSelector(store => store.dataSlice.value)

  return (
    <div>
      {
        todoData.length === 0 ? (
          <p>Enter Todos</p>
        ):(
          todoData.map((todo : Todo)=>(
            <div key={todo.id} >
              <p>{todo.text}</p>              
            </div>
          ))
        )
      }
    </div>
  )
}

export default TodoCard