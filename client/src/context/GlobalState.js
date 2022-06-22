import React,{createContext, useReducer} from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

const initialState={
    login:0,
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
             }],
    retailers:[
        {
            retailerName: "Buzz Lightyear",
            phone: "123456789"
        },
        {
            retailerName: "Buzz Lightyear",
            phone: "123456789"
        }
    ],
    popularitem:[],
    popularretail:[],
}

export const GlobalContext =createContext(initialState);

export const GlobalProvider = ({children}) => {
    

    const [state,dispatch]= useReducer(AppReducer,initialState);
    
    async function getretailers(){
        try{
            const res = await axios.get("/retailer");

            console.log(res.data);
            dispatch({
                type:'GET_RETAILERS',
                payload:res.data
            });

        }catch(err){
            console.log("GlobalState Line-54");
        }

    }


    const changeRetailerlist= (itemUpdate) =>{
        dispatch({
            type:"UPDATE_RETAILER_LIST",
            payload:itemUpdate
        })
    }

    return ( <GlobalContext.Provider value={{
        login:state.login,
        retailerList:state.retailerList,
        changeRetailerlist,
        getretailers,
        popularitem:state.popularitem,
        popularretail:state.popularretail,
        retailers:state.retailers
    }
    }>
        {children}
    </GlobalContext.Provider>);
}