import { useState } from "react"
import Btn from "./Btn"

function InputBox() {
    const [input,setInput] = useState("")
  return (
    <div className="flex flex-col">
        <label>Add work:</label>
        <div>
        <input className="border p-1 m-1" value={input} onChange={(e)=>(setInput(e.target.value))} />
        <Btn input={input} setInput={setInput}/>
        </div>
    </div>
  )
}

export default InputBox