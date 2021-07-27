
import { ADD_USER_DETAIL, ADD_PIZZA_DETAILS, ADD_CARD_DETAILS } from '../constants';

export const addUserDetailInStore = (data) => {
    return async dispatch => {
        dispatch({
            type: ADD_USER_DETAIL,
            payload: data
        });
    };
};
export const addPizaDetails = payload => {
    return async dispatch => {
        dispatch({ 
            type: ADD_PIZZA_DETAILS,
            payload
        })
    }
};
export const addCardDetails = payload => {
    return async dispatch => {
        dispatch({
            type: ADD_CARD_DETAILS,
            payload
        })
    }
}