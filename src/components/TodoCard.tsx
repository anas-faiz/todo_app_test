import { useSelector } from "react-redux"

function TodoCard() {

  const todoData = useSelector(store => store.dataSlice.value)

  return (
    <div>
      {
        todoData.length === 0 ? (
          <p>Enter Todos</p>
        ):(
          todoData.map((todo)=>(
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