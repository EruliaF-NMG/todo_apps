import { configureStore } from '@reduxjs/toolkit';
import todoSliceReducer from '../slice/todo-slice';

export const store = configureStore({
  reducer: {
    'todo':todoSliceReducer
  },
})