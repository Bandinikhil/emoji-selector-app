import React from 'react'

const TodoList = ({todolist,setTodos}) => {
    const deleteHandler = (indexValue) => {
        const newTodos = todolist.filter((todo,index)=> index!==indexValue)
        setTodos(newTodos);
    }
  return (
    <div>
        {todolist.map((todo,index)=>
        <div key={index}>
            <h5> {todo} &nbsp; <button onClick={()=>deleteHandler(index)}>Delete</button></h5>
        </div>
        
        )}
    </div>
  )
}

export default TodoList