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
            dispatch({
                type:'GET_RETAILERS',
                payload:res.data
            });

        }catch(err){
            console.log(err);
        }
    }

    async function getPopularRetailers(){
        try{
            const res= await axios.get("/customer/popularretailer");

            dispatch({
                type:'GET_POPULAR_RETAILERS',
                payload:res.data
            });
        }catch(err){
            console.log(err);
        }
    }

    async function getPopularItems(){
        try{
            const res= await axios.get("/customer/popularitem");
            dispatch({
                type:'GET_POPULAR_ITEMS',
                payload:res.data
            });
        }catch(err){
            console.log(err);
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
        getPopularItems,
        getPopularRetailers,
        popularitem:state.popularitem,
        popularretail:state.popularretail,
        retailers:state.retailers
    }
    }>
        {children}
    </GlobalContext.Provider>);
}