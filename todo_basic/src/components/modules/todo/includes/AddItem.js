import { Fragment, useState,useContext } from 'react'
import { Form, Input  } from 'antd';

import { BasicButton } from '../../../ui-elements/form/Buttons';
import { TodoContext } from '../../../global-context/context-providers/TodoContext.provider';
import { ModelWrapper } from '../../../ui-elements/common/ModelWrapper';
import { InputBox } from '../../../ui-elements/form/InputBox';

const initState = {
    "isOpen":false,
    "title":""
}

const AddItem=()=>{
    const [,todoAction] = useContext(TodoContext);
    const [getStatus, setStatus] = useState(initState);

    const submitData=()=>{
        todoAction.addTodoItem([{
            "title": getStatus.title, 
            "completed": false
        }]);
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
                lable='Add'
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