import { Radio } from 'antd'
import { emptyFuntion } from '../common/CoreElements';

const RadioBtn=({
    value="",
    onChange=emptyFuntion,
    lable="",
    isChecked=false,
})=>{
    return <Radio 
            checked={isChecked}
            value={value}  
            onChange={(event)=>onChange(event.target.value)}
            >{lable}</Radio>
}

export {
    RadioBtn
}