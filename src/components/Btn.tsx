import { useDispatch } from "react-redux"
import { addData } from "../utils/TodoDataSlice"

interface btmprops{
  input: string
  setInput: React.Dispatch<React.SetStateAction<string>>
}

const Btn = ({input,setInput} : btmprops) => {
  const dispatch = useDispatch()
  
  const handleClick = ()=>{
    const validTodo = input.trim();

    if(validTodo.length > 0){
      dispatch(addData({id:Date.now(), text: validTodo, status: "red"}))
      console.log("clicked")
      setInput("")
    }
    
  }  
  return (
    <div>
      <button
       className="border bg-blue-200 p-1 m-1"
       onClick={handleClick} >
        Done
      </button>
    </div>
  )
}

export default Btn