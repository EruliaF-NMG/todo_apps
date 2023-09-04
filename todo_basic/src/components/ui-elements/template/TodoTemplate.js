import { Fragment } from "react";
import { FullPageLoader } from '../common/CoreElements';

const TodoTemplate=({
    children=null
})=>{
    return (
        <div className="template-wrapper">
            { children }
            <FullPageLoader/>
        </div>
    )
}

export {
    TodoTemplate
}