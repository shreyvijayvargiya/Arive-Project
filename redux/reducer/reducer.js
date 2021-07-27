import { ADD_USER_DETAIL } from '../constants';

const initialState = {
    userDetails: []
};
export const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_USER_DETAIL:{
            return {
                ...state, 
                userDetails: action.payload
            }
        }
        default:
            return state;
    };
};