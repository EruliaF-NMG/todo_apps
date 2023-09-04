import axios from 'axios';

import { requestTodoDataKey,refreshTodoDataKey } from '../../../configs/action-keys';
import { getTodoListAPI,editTodoListAPI } from '../../../configs/api-end-points';
import { httpRequset } from '../../../helpers/http-wrapper.helper';

const requestData= async (dispatch,uiActions)=>{
   try{
    uiActions.setPageLoader(true);
    //request data
    const data = await httpRequset(getTodoListAPI);
    uiActions.setPageLoader(false);
    //data set
    dispatch({
        type:requestTodoDataKey,
        payload:data.items
    });

   } catch(ex) {
    uiActions.setPageLoader(false);
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
const addTodoItem= async (dispatch,body,uiActions)=>{
    try{
        uiActions.setPageLoader(true);
        const data = await httpRequset(getTodoListAPI,"POST",body);
        uiActions.setPageLoader(false);
        dispatch({
            type:refreshTodoDataKey,
        });
       }catch(ex){
        uiActions.setPageLoader(false);
        console.log("Ex:- ",ex)
       }
}

const editTodoItem= async (dispatch,id,body,uiActions)=>{
    try{
        uiActions.setPageLoader(true);
        const data = await httpRequset(`${editTodoListAPI}/${id}`,"PUT",body);
        uiActions.setPageLoader(false);
        dispatch({
            type:refreshTodoDataKey,
        });
       }catch(ex){
        uiActions.setPageLoader(false);
        console.log("Ex:- ",ex)
       }
}

const removeTodoItem= async (dispatch,id,uiActions)=>{
    try{
        uiActions.setPageLoader(true);
        const data = await httpRequset(`${editTodoListAPI}/${id}`,"DELETE");
        uiActions.setPageLoader(false);
        dispatch({
            type:refreshTodoDataKey,
        });
       }catch(ex){
        uiActions.setPageLoader(false);
        console.log("Ex:- ",ex)
       }
}

const todoActions = (dispatch,uiActions) =>{
    return {
        requestData:() => requestData(dispatch,uiActions),
        addTodoItem:(body)=>addTodoItem(dispatch,body,uiActions),
        editTodoItem:(id,body)=>editTodoItem(dispatch,id,body,uiActions),
        removeTodoItem:(id)=>removeTodoItem(dispatch,id,uiActions),
    }
}

export {
    todoActions
}