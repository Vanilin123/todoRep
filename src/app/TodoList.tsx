'use client'

import { HeaderTodo } from "@/components/Header"
import { InputTodo } from "@/components/InputTodo"
import { TaskTodo } from "@/components/TaskTodo"
import { Todo } from "@/interface/todoList"
import { useState } from "react"


export const TodoList = () =>{
const [todo,setTodo] = useState('')
const [tasks, setTasks] = useState<Todo[]>([])
const [done, setDone] = useState('')

let copyTasks = tasks;

const addTask = () =>{
    const taskTodo = {
        id: Math.random(),
        value: todo,
        status: false,
    }
    let newTask = [taskTodo, ...tasks]
    setTasks(newTask)
    setTodo('')
}
switch(done){
    case "All":
    copyTasks = tasks
    break;
    case "Active":
    copyTasks = tasks.filter(e => e.status === false)
    break;
    case "Completed":
    copyTasks = tasks.filter(e => e.status === true)
    break;

    default:
        break;
}
const changeTask =(id:number)=>{
    let change = tasks.map(e=>e.id === id ? {...e, status: !e.status}:{...e})
    setTasks(change)
}
const deleteTasks = ()=>{
    let del = tasks.filter((items) => items.status === false)
    setTasks(del)
}
const countTotalToDo = () =>{
    let del = tasks.filter((items) => items.status === false).length
    return del
}


const taskList = copyTasks.map(e => <TaskTodo id={e.id} value={e.value} status={e.status} changeTask={changeTask}/>)
return(
       <div className="block">
        <HeaderTodo/>
        <InputTodo addTask={addTask} todo = {todo} setTodo={setTodo}/>
        {taskList}
        <div className="button-block">
        <p className="count">{countTotalToDo()} item left</p>
        <div className="flex-buttons">
        <button className="buttons-spechial button-check" onClick={()=>setDone('All')}>All</button>
        <button className="buttons-spechial button-check" onClick={()=>setDone('Active')}>Active</button>
        <button className="buttons-spechial button-check" onClick={()=>setDone('Completed')}>Completed</button>
        </div>
        <button className="button-check" onClick={()=>deleteTasks()}>Clear completed</button>
        </div>
    </div>
    
)
}