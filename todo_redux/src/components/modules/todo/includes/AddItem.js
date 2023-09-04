import { Fragment, useState,useContext } from 'react'
import { Form, Input  } from 'antd';
import { useSelector, useDispatch } from 'react-redux'

import { BasicButton } from '../../../ui-elements/form/Buttons';
import { ModelWrapper } from '../../../ui-elements/common/ModelWrapper';
import { InputBox } from '../../../ui-elements/form/InputBox';
import { addTodoItem } from '../../../../slice/todo-slice';

const initState = {
    "isOpen":false,
    "title":""
}

const AddItem=()=>{
    const [getStatus, setStatus] = useState(initState);

    const count = useSelector((state) => state.todo.count)
    const dispatch = useDispatch()

    const submitData=()=>{
        dispatch(addTodoItem([{
            "title": getStatus.title, 
            "completed": false
        }]));
        setStatus(initState);
    }

    console.log(getStatus);

    return (
        <Fragment>
            <BasicButton 
                onBtnClick={()=>setStatus({
                    ...getStatus,
                    isOpen:!getStatus.isOpen
                })}
                lable={`Add ${count}`}
            />
            <ModelWrapper 
                title="Add Item" 
                isOpen={getStatus.isOpen} 
                onSubmit={()=>submitData()} 
                onCancel={()=>setStatus({
                    ...getStatus,
                    ...initState
                })}
            >
                <InputBox
                    label="Title"
                    name="title"
                    isRequired={true}
                    value={getStatus.title} 
                    onChange={(value,name)=>setStatus({
                        ...getStatus,
                        [name]:value
                })}/>
            </ModelWrapper>
        </Fragment>
    )
}

export {
    AddItem
}