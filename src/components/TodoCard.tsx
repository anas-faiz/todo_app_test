import { useDispatch, useSelector } from "react-redux"
import { updateStatus, type Todo } from "../utils/TodoDataSlice"

function TodoCard() {

  const todoData = useSelector(store => store.dataSlice.value)
  const dispatch = useDispatch();

  const handleClick = (id: number)=>{
    dispatch(updateStatus(id));
  }

  return (
    <div>
      {
        todoData.length === 0 ? (
          <p>Enter Todos</p>
        ):(
          todoData.map((todo : Todo)=>(
            <div key={todo.id} >
              <div className="flex">
                <input 
                type="checkbox"
                checked={todo.status == "green"}
                className="m-1" 
                onClick={()=>handleClick(todo.id)} />
                <p className={todo.status == "green" ? "line-through text-gray-400" : ""} >
                  {todo.text}
                  </p>              
              </div>
            </div>
          ))
        )
      }
    </div>
  )
}

export default TodoCard