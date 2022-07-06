import { createContext, useReducer,useEffect } from 'react';

import { userReducer } from './userReducer';


const prevUser = JSON.parse(localStorage.getItem('ERuser'));

const initialState = {
    user: prevUser ? prevUser : null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ''
}

export const userContext = createContext(initialState);

export const UserContextProvider = ({ children }) => {

    const [user, dispatch] = useReducer(userReducer, initialState);

    useEffect(()=>{
        console.log("TODAY");
    },[user]);


    return (
        <userContext.Provider value={{ user, dispatch }}>
            {children}
        </userContext.Provider>
    )
}