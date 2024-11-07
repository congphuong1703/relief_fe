import React, {createContext, useReducer} from "react";

export const ACTION_COLLAPSE_COLUMN = "ACTION_COLLAPSE_COLUMN";
export const ACTION_NOTIFICATION = "ACTION_NOTIFICATION";
export const ACTION_LOADING_TABLE = "ACTION_LOADING_TABLE";
export const ACTION_LOADING_FILTER = "ACTION_LOADING_FILTER";
export const ACTION_COLLAPSE_FILTER = "ACTION_COLLAPSE_FILTER";
export const ACTION_RESET_TABLE = "ACTION_RESET_TABLE";
export const ACTION_RESET_ELEMENT = "ACTION_RESET_ELEMENT";
export const ACTION_LOADING_BUTTON = "ACTION_LOADING_BUTTON";

const ContextGlobal = createContext(null);

const ContextProvider = (props) => {
    const initState = {
        isCollapseFilter: true,
        isCollapseColumn: false,
        isLoadingTable: false,
        isLoadingButton: false,
        isLoadingFilter: false,
        resetTable: false,
        resetElement: false,
        isNotification: false
    }

    const [state, dispatch] = useReducer((state, action) => {
        let newState = state;
        switch (action.type) {
            case ACTION_COLLAPSE_COLUMN: {
                newState = {...state, isCollapseColumn: action.payload}
                break;
            }
            case ACTION_NOTIFICATION: {
                newState = {...state, isNotification: action.payload}
                break;
            }
            case ACTION_LOADING_FILTER: {
                newState = {...state, isLoadingFilter: action.payload}
                break;
            }
            case ACTION_COLLAPSE_FILTER: {
                newState = {...state, isCollapseFilter: action.payload}
                break;
            }
            case ACTION_LOADING_TABLE: {
                newState = {...state, isLoadingTable: action.payload}
                break;
            }
            case ACTION_RESET_TABLE: {
                newState = {...state, resetTable: !state.resetTable}
                break;
            }
            case ACTION_RESET_ELEMENT: {
                newState = {...state, resetElement: !state.resetElement}
                break;
            }
            case ACTION_LOADING_BUTTON: {
                newState = {...state, isLoadingButton: action.payload}
                break;
            }
        }
        return newState

    }, initState)


    return <ContextGlobal.Provider value={{state, dispatch}}>
        {props.children}
    </ContextGlobal.Provider>
}

export {ContextGlobal, ContextProvider};