
const ToDoList = ( {todoobj}) =>
{
    return(
                <div>
                    <input type="checkbox" defaultChecked={todoobj.done}/>
                    {todoobj.title}
                    {todoobj.status}
                </div>
    );
}

export default ToDoList;