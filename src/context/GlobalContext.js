import React, { useReducer } from "react";
import { reducerFunc } from "./reducer";

const INITIAL_STATE = {
    contactList: localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [],
}

export const Context = React.createContext();

const GlobalContext = ({ children }) => {
    return (
        <Context.Provider value={useReducer(reducerFunc, INITIAL_STATE)}>
            {children}
        </Context.Provider>
    )
}

export default GlobalContext;