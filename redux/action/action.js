
import { ADD_USER_DETAIL } from '../constants';

export const addUserDetailInStore = (data) => {
    return async dispatch => {
        dispatch({
            type: ADD_USER_DETAIL,
            payload: data
        });
    };
};