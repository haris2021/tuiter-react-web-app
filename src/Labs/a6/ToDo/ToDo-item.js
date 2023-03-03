import todo from "./ToDo.json";
import ToDoList from "./ToDoList.js";
const ToDoItem = ( ) =>
{
     return(
         <div>
                <h1>ToDo</h1>
                <ul>
                    {
                        todo.map(obj => { return(<ToDoList todoobj={obj}/>);
                        })
                    }
                </ul>
         </div>
     );
}

export default ToDoItem;
