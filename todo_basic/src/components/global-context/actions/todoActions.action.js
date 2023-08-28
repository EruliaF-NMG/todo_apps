import axios from 'axios';

import { requestTodoDataKey } from '../../../configs/action-keys';
import { getTodoListAPI } from '../../../configs/api-end-points';
import { httpRequset } from '../../../helpers/http-wrapper.helper';

const requestData= async (dispatch)=>{
   try{
    //request data
    const data = await httpRequset(getTodoListAPI);
    //data set
    dispatch({
        type:requestTodoDataKey,
        payload:data.items
    });

   } catch(ex) {
    console.log("Ex:- ",ex);
    dispatch({
        type:requestTodoDataKey,
        payload:[]
    });
   }
}

const addTodoItem= async (dispatch)=>{
    try{
        const data = await httpRequset(getTodoListAPI)
        console.log(data.data.items);
        dispatch({
            type:requestTodoDataKey,
            payload:[]
        });
    
       }catch(ex){
        console.log("Ex:- ",ex)
       }
}

const editTodoItem= async (dispatch)=>{
    try{
        const data = await httpRequset(getTodoListAPI)
        console.log(data.data.items);
        dispatch({
            type:requestTodoDataKey,
            payload:[]
        });
    
       }catch(ex){
        console.log("Ex:- ",ex)
       }
}

const removeTodoItem= async (dispatch)=>{
    try{
        const data = await httpRequset(getTodoListAPI)
        console.log(data.data.items);
        dispatch({
            type:requestTodoDataKey,
            payload:[]
        });
    
       }catch(ex){
        console.log("Ex:- ",ex)
       }
}

const todoActions = (dispatch) =>{
    return {
        requestData:() => requestData(dispatch),
    }
}

export {
    todoActions
}