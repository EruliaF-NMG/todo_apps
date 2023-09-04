import axios from 'axios';

import { pageLoaderSatatusKey } from '../../../configs/action-keys';

const setPageLoader= async (dispatch,status)=>{
    dispatch({
        type:pageLoaderSatatusKey,
        payload:status
    });
}

const uiActions = (dispatch) =>{
    return {
        setPageLoader:(status) => setPageLoader(dispatch,status)
    }
}

export {
    uiActions
}