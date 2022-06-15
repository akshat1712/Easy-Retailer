import React,{createContext, useReducer} from "react";
import AppReducer from "./AppReducer";

const initialState={
    login:0
}

export const GlobalContext =createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state,dispatch]= useReducer(AppReducer,initialState);

    return ( <GlobalContext.Provider value={{
        login:state.login

    }
    }>
        {children}
    </GlobalContext.Provider>);
}