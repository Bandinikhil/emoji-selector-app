import React,{useState} from 'react'
import TodoList from './TodoList'

const App = () => {
  const [task,setTask] = useState("");
  const [todos,setTodos] = useState([]);

  const changeHandler = e => {
    setTask(e.target.value);
  }
  
  const submitHandler = e => {
    e.preventDefault();
    const newTodos = [...todos,task]
    setTodos(newTodos);
    setTask("");
  }

  
  
  
  return (

   
    <div>
      <center>
      < div className='card'>
        <div className='card-body'>
          <div className='card-title'>Todo tasks</div>
           <form onSubmit={submitHandler}> 
            <input size="30" type="text" name="task" value={task} onChange={changeHandler}/> &nbsp;
            <input type="submit" value="add" name="add"/>
           </form>          
          <TodoList todolist={todos} setTodos={setTodos}/>
        </div>
      </div>
      </center>
    </div>
  )
}

export default App