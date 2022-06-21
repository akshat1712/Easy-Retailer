import React,{createContext, useReducer} from "react";
import AppReducer from "./AppReducer";


const initialState={
    login:1,
    retailerList:[   {
                 Item: "Item",
                 Quantity: "Quantity"
             },
             {
                 Item: "Lays",
                 Quantity: "45"
             },
             {
                 Item: "Parle-G",
                 Quantity: "23"
             }]
}

export const GlobalContext =createContext(initialState);

export const GlobalProvider = ({children}) => {
    

    const [state,dispatch]= useReducer(AppReducer,initialState);
    
    const changeRetailerlist= (itemUpdate) =>{
        dispatch({
            type:"UPDATE_RETAILER_LIST",
            payload:itemUpdate
        })
    }

    return ( <GlobalContext.Provider value={{
        login:state.login,
        retailerList:state.retailerList,
        changeRetailerlist
    }
    }>
        {children}
    </GlobalContext.Provider>);
}