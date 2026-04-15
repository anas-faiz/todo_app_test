import { useState } from "react"

function InputBox() {
    const [input,setInput] = useState("")
  return (
    <div className="flex flex-col">
        <label>Add work </label>
        <input className="border" value={input} onChange={(e)=>(setInput(e.target.value))} />
       
    </div>
  )
}

export default InputBox