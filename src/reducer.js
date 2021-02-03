import { StateProvider } from "./StateProvider";
import React, { createContext, useContext, useReducer } from "react";


export const initialState = {
    basket: [],
    user:null,
};

export const  reducer=(state,action) => {
   // console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET' :
        return {
            ...state,
            basket:[...state.basket,action.item]        
        };
        
        case 'REMOVE_FROM_BASKET' :
        return {state};
        
        default:
        return state;
        

        
    }
}


export default reducer;