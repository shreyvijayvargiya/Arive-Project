import { ADD_USER_DETAIL, ADD_PIZZA_DETAILS } from '../constants';

const initialState = {
    userDetails: [],
    pizzaDetails: null
};
export const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_USER_DETAIL:{
            return {
                ...state, 
                userDetails: action.payload
            }
        }
        case ADD_PIZZA_DETAILS: {
            return {
                ...state,
                pizzaDetails: action.payload
            }
        }
        default:
            return state;
    };
};