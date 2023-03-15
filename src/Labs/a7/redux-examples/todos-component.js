import React from "react";
import {useSelector} from "react-redux";
import {useState} from "react";
import {useDispatch} from "react-redux";

import {addTodo,deleteTodo,todoDoneToggle} from "./Reducers/todos-reducer.js"





const TodosComponent = ( ) =>
{
    const dispatch = useDispatch();


    const todos = useSelector(state => state.Todo);


    const [todo, settodo] = useState({do:''});

    const clickbtn = ( ) =>
    {
        dispatch(addTodo(todo));
    }

    const deletebtn = (index) =>
    {
        dispatch(deleteTodo(index))
    }

    const updatestatus = (todo) =>
    {
        dispatch(todoDoneToggle(todo))
    }


    const todochangehandler  = (event) =>
    {
        const geinput = event.target.value;
        const newtodo = {do:geinput}
        settodo(newtodo)
    }





    return(
        <div>

            <h3>Todos</h3>

            <ul className="list-group">

                <li className="list-group-item">
                    <button className="btn btn-primary w-25 float-end" onClick={clickbtn} >Create</button>
                    <input type="Text" value={todo.do} onChange={todochangehandler} className="form-control w-75"/>
                </li>


                {
                    todos.map( (todo,index) =>
                                  <li key={todo._id} className="list-group-item">
                                      <input type="checkbox" checked={todo.done}  onChange={() => { updatestatus(todo)} } />
                                      <button className="btn btn-danger w-25 float-end" onClick={()=>{deletebtn(index)}} >Delete</button>
                                      {todo.do}
                                  </li>
                    )
                }


            </ul>

        </div>
    )

}

export default TodosComponent
