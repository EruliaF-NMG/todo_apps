
import { useContext,useState,useEffect, Fragment } from 'react'

import { TodoContext } from '../../../global-context/context-providers/TodoContext.provider';
import { LoopItms } from '../../../ui-elements/common/CoreElements';
import { RadioBtn } from '../../../ui-elements/form/Radiobutton';
import { BasicButton } from '../../../ui-elements/form/Buttons';

const ListTodos=()=>{

    const [state,todoAction] = useContext(TodoContext);
    useEffect(()=>{
      todoAction.requestData();
    },[]);

    useEffect(()=>{
      todoAction.requestData();
    },[state.refreshStatus]);

    return(
        <LoopItms
          items={state.todoList}
          renderIFEmpty={(<div>empty todolist </div>)}
          renderItem={(item,index)=>{
            return (
              <li key={index} className={item.completed?"done":''}>
                <RadioBtn 
                  value={item._uuid} 
                  onChange={(id)=>todoAction.editTodoItem(id,{...item,"completed": true})}
                  isChecked={item.completed}
                /> {item.title}
                <BasicButton
                    onBtnClick={()=>todoAction.removeTodoItem(item._uuid)}
                    lable='Remove'
                    isDanger={true}
                />
              </li>
            )
          }}
        />
    )
}

export {
    ListTodos
}