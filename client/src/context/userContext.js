import { createContext, useReducer } from 'react';

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

    return (
        <userContext.Provider value={{ user, dispatch }}>
            {children}
        </userContext.Provider>
    )
}