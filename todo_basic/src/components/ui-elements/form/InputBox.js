
import { Form, Input  } from 'antd';
import { emptyFuntion } from '../common/CoreElements';

const InputBox=({
    label="",
    name="",
    isRequired=false,
    value="",
    onChange=emptyFuntion
})=>{
    return (
        <Form autoComplete="off" initialValues={{
            [name]:""
        }}>
        <Form.Item
            label={label}
            name={name}
            defaultValue={value}
            autoComplete="off" 
            //rules={[{ required: isRequired}]}
        >
            <Input 
                value={value} 
                onChange={(event)=>onChange(event.target.value,name,event)}
            />
        </Form.Item>
        </Form>
    )
}

export {
    InputBox
}