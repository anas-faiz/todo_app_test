
export const loadTodo = ()=>{
    try{
        const data = localStorage.getItem("todos");

        const value = data ? JSON.parse(data) : []

        return value

    }catch(err){
        console.log(err)
        return []
    }
}