

export const initialState = {
    basket: [],
    user:null,
};

export const  reducer=(state,action) => {
   // console.log(action)
    switch(action.type){
        case "SET_USER":
        return{
            ...state,
            user: action.user

        }
        case 'ADD_TO_BASKET' :
        return {
            ...state,
            basket:[...state.basket,action.item]        
        };
        
        case 'REMOVE_FROM_BASKET' :
        let newBasket =[...state.basket];
        const index =newBasket.findIndex((basketItem) => basketItem.id === action.id);
       // console.warn(index);
        if(index >= 0){
            newBasket.splice(index,1);
        }

        return { ...state,basket:newBasket    
            };
        
        default:
        return state;
        

        
    }
}


export default reducer;