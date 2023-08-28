import { cloneElement } from 'react';

import { TodoContextProvider } from '../components/global-context/context-providers/TodoContext.provider';


const ContextProvider = ({children})=>{
    return (
        <TodoContextProvider>
            {children}
        </TodoContextProvider>
    )
}

export {
    ContextProvider
}