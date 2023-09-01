import axios from 'axios';

import { requestTodoDataKey,refreshTodoDataKey } from '../../../configs/action-keys';
import { getTodoListAPI,editTodoListAPI } from '../../../configs/api-end-points';
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

/**
 * 
 * @param {*} dispatch 
 * @param {*} body 
 */
const addTodoItem= async (dispatch,body)=>{
    try{
        const data = await httpRequset(getTodoListAPI,"POST",body);
        dispatch({
            type:refreshTodoDataKey,
        });
       }catch(ex){
        console.log("Ex:- ",ex)
       }
}

const editTodoItem= async (dispatch,id,body)=>{
    try{
        const data = await httpRequset(`${editTodoListAPI}/${id}`,"PUT",body)
        dispatch({
            type:refreshTodoDataKey,
        });
       }catch(ex){
        console.log("Ex:- ",ex)
       }
}

const removeTodoItem= async (dispatch,id)=>{
    try{
        const data = await httpRequset(`${editTodoListAPI}/${id}`,"DELETE")
        dispatch({
            type:refreshTodoDataKey,
        });
       }catch(ex){
        console.log("Ex:- ",ex)
       }
}

const todoActions = (dispatch) =>{
    return {
        requestData:() => requestData(dispatch),
        addTodoItem:(body)=>addTodoItem(dispatch,body),
        editTodoItem:(id,body)=>editTodoItem(dispatch,id,body),
        removeTodoItem:(id)=>removeTodoItem(dispatch,id),
    }
}

export {
    todoActions
}