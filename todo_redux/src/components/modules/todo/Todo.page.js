import { useContext,useState,useEffect, Fragment } from 'react'

import { AddItem } from './includes/AddItem';
import { ListTodos } from './includes/ListTodos';

const TodoPage=()=>{
    return (
      <div className="todo-list-wrapper">
        <h1>TODO list</h1>
        <br/>
        <AddItem/>
        <br/>
        <ListTodos />
      </div>
    )
}

export {
    TodoPage
}