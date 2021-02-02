import { StateProvider } from "./StateProvider";
import React, { createContext, useContext, useReducer } from "react";


export const intialState = {
    basket: [0],
};

function reducer(state,action){
    switch(action.type){
        case 'ADD_TO_BASKET' :
        break;
        case 'REMOVE_FROM_BASKET' :
        break;
        default:
        return state;

        
    }
}


export default reducer;