import React, { createContext, useReducer, useContext, useEffect } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

import { userContext } from "./userContext";

const initialState = {
  login: 0,
  retailerList: [],
  retailers: [],
  popularitem: [],
  popularretail: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const { user } = useContext(userContext);


  useEffect(()=>{
    getretailers();
    getRetailerlist();
    console.log("HELLO");

  },[user]);

  async function getretailers() {
    try {
      console.log("NOW");
      const res = await axios.get("/retailer");
      dispatch({
        type: "GET_RETAILERS",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function getPopularRetailers() {
    try {
      const res = await axios.get("/customer/popularretailer");

      dispatch({
        type: "GET_POPULAR_RETAILERS",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function getPopularItems() {
    try {
      const res = await axios.get("/customer/popularitem");
      dispatch({
        type: "GET_POPULAR_ITEMS",
        payload: res.data,
      });
      // console.log(initialState);
    } catch (err) {
      console.log(err);
    }
  }

  async function changeRetailerlist(itemUpdate) {
    try {

      console.log(itemUpdate);
      
      dispatch({
        type: "UPDATE_RETAILER_LIST",
        payload: itemUpdate,
      });
      
      const res = await axios.put("/retailer/additems", {"inventory":[itemUpdate]}, {
        headers: {
          Authorization: `Bearer ${user.user.token}`,
        },
      });

    } catch (err) {
      console.log(err);
    }
  }

  async function getRetailerlist() {
    try {
      const res = await axios.get("/retailer/me", {
        headers: {
          Authorization: `Bearer ${user.user.token}`,
        },
      });
      dispatch({
        type: "GET_RETAILER_LIST",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        login: state.login,
        retailerList: state.retailerList,
        changeRetailerlist,
        getretailers,
        getPopularItems,
        getPopularRetailers,
        popularitem: state.popularitem,
        popularretail: state.popularretail,
        retailers: state.retailers,
        getRetailerlist,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
