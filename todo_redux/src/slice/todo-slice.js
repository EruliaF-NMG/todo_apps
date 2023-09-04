import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import { httpRequset } from '../helpers/http-wrapper.helper';
import { getTodoListAPI,editTodoListAPI } from '../configs/api-end-points';

const initialState = {
    todoList:[],
    refreshStatus:true,
    count:0,
    isLoad:false,
};

export const requestData = createAsyncThunk( "TODO/GET_DATA", async ()=>{
    const data = await httpRequset(getTodoListAPI);
    return data.items;
});

export const addTodoItem = createAsyncThunk( "TODO/ADD_DATA", async (body)=>{
    const data = await httpRequset(getTodoListAPI,"POST",body);
    return data;
});

export const editTodoItem = createAsyncThunk( "TODO/EDIT_DATA", async ({id,body})=>{
    const data = await httpRequset(`${editTodoListAPI}/${id}`,"PUT",body);
    return data;
});

export const removeTodoItem = createAsyncThunk( "TODO/REMOVE_DATA", async (id)=>{
    const data = await httpRequset(`${editTodoListAPI}/${id}`,"DELETE");
    return data;
});

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
    },
    extraReducers:{
        [requestData.pending]:(state,action)=>{
            return {
                ...state,
                isLoad:true
            }
        },
        [requestData.fulfilled]:(state,action)=>{
            return {
                ...state,
                todoList:action.payload,
                isLoad:false
            }
        },
        [editTodoItem.fulfilled]:(state)=>{
            return {
                ...state,
                refreshStatus:!state.refreshStatus
            }
        },
        [removeTodoItem.fulfilled]:(state)=>{
            return {
                ...state,
                refreshStatus:!state.refreshStatus
            }
        },
        [addTodoItem.fulfilled]:(state)=>{
            return {
                ...state,
                refreshStatus:!state.refreshStatus
            }
        },
    }
  })

export const { increment } = todoSlice.actions;
const todoSliceReducer = todoSlice.reducer;
export default todoSliceReducer;