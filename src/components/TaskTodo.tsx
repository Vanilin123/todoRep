interface TaskTodoProps{
    id:number
    status:boolean
    value:string
    changeTask: Function
}

export const TaskTodo = (props:TaskTodoProps) =>{
    return(
        <div className="todo-blocks" key={props.id}>
            <input id={`${props.id}`} className="demoCustomCheckbox" type={"checkbox"} onClick={()=>props.changeTask(props.id)} defaultChecked={props.status}/>
            <label htmlFor={`${props.id}`} style={props.status? {textDecoration:'line-through'}:{textDecoration:'none'} }>{props.value}</label>
        </div>
    )
}