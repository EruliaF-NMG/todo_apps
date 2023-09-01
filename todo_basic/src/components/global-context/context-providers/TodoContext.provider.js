import { createContext,useReducer } from 'react';

import { todoActions } from '../actions/todoActions.action';
import { requestTodoDataKey,refreshTodoDataKey } from '../../../configs/action-keys';

const initialState = {
    todoList:[],
    refreshStatus:true,
};

const TodoContext = createContext({});

//action = {
//    type:"",
/// payload;{}||[]|8
//}

const todoReducer = (state,action) =>{
    switch(action.type){
        case requestTodoDataKey:
            return {
                ...state,
                todoList:action.payload
            }
        case refreshTodoDataKey:
                return {
                    ...state,
                    refreshStatus:!state.refreshStatus
                }
        default:
            return state;
    }
}

const TodoContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const  dispatchActions = todoActions(dispatch);
    return(
        <TodoContext.Provider value={[state,dispatchActions]}>
            {children}
        </TodoContext.Provider>
    )
}

export {
    TodoContext,
    TodoContextProvider
}