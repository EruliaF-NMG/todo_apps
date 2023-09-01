import { emptyFuntion } from './CoreElements';
import { Modal } from 'antd';

const ModelWrapper=({
    children=null,
    title="",
    isOpen=false,
    onSubmit=emptyFuntion,
    onCancel=emptyFuntion,
})=>{
    return(
        <Modal 
            title={title}
            open={isOpen} 
            onOk={()=>onSubmit()} 
            onCancel={()=>onCancel()}
        >
            {children}
        </Modal>
    )
}

export {
    ModelWrapper
}