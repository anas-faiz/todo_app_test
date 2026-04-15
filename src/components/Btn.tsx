import { useDispatch } from "react-redux"
import { addData } from "../utils/TodoDataSlice"

const Btn = ({input}) => {
  const dispatch = useDispatch()
  
  const handleClick = ()=>{
    dispatch(addData({id:Date.now(), text: input, status: "red"}))
    console.log("clicked")
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