import { ADD_USER_DETAIL, ADD_PIZZA_DETAILS, ADD_CARD_DETAILS } from '../constants';

const initialState = {
    userDetails: [],
    pizzaDetails: null,
    cardDetails: null
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
        case ADD_CARD_DETAILS: {
            return {
                ...state,
                cardDetails: action.payload
            }
        }
        default:
            return state;
    };
};