
import { useEffect, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { LoopItms } from '../../../ui-elements/common/CoreElements';
import { RadioBtn } from '../../../ui-elements/form/Radiobutton';
import { BasicButton } from '../../../ui-elements/form/Buttons';
import { requestData,editTodoItem,removeTodoItem } from '../../../../slice/todo-slice';

const ListTodos=()=>{

    const state = useSelector((state) => state.todo);
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(requestData());
    },[]);

    useEffect(()=>{
      dispatch(requestData());
    },[state.refreshStatus]);

    return(
      <Fragment>
      {
        (state.isLoad)? (<center>Loging .....</center>): (
        <LoopItms
          items={state.todoList}
          renderIFEmpty={(<div>empty todolist </div>)}
          renderItem={(item,index)=>{
            return (
              <li key={index} className={item.completed?"done":''}>
                <RadioBtn 
                  value={item._uuid} 
                  onChange={(id)=>dispatch(editTodoItem({
                    id,
                    body:{...item,"completed": true}
                  }))}
                  isChecked={item.completed}
                /> {item.title}
                <BasicButton
                    onBtnClick={()=>dispatch(removeTodoItem(item._uuid))}
                    lable='Remove'
                    isDanger={true}
                />
              </li>
            )
          }}
        />
        )
      }
      </Fragment>
    )
}

export {
    ListTodos
}