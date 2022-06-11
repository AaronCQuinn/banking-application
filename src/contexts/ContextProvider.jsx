import React, { createContext, useContext, useEffect, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = (({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);

    const handleClick = (clicked) => {
        /* Spread initial state, the property matching "clicked" set to true */
        setIsClicked({...initialState, [clicked]:true})
    }

    return ( 
    <StateContext.Provider value={{ activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize }}>
        {children} 
    </StateContext.Provider>
    );
});

export const useStateContext = () => useContext(StateContext);