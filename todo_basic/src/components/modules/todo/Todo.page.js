import { useContext,useState,useEffect, Fragment } from 'react'
import { Button } from 'antd';

import { TodoContext } from '../../global-context/context-providers/TodoContext.provider';
import { LoopItms } from '../../ui-elements/core-elements';

const TodoPage=()=>{
    const [state,todoAction] = useContext(TodoContext);
    useEffect(()=>{
      todoAction.requestData();
    },[]);
    return (
      <div className="todo-list-wrapper">
        <h1>TODO list</h1>
        <LoopItms
          items={state.todoList}
          renderIFEmpty={(<div>empty todolist </div>)}
          renderItem={(item,index)=>{
            return (
              <li key={index}>{item.title}</li>
            )
          }}
        />
      </div>
    )
}

export {
    TodoPage
}