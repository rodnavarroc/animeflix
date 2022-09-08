import { useReducer } from "react";
import appContext from './appContext';
import appReducer from './appReducer';

import {
    OPEN_MENU
} from "../types/index"

const AppState = props => {

    const initialState = {
        open: false
    }

    const [ state, dispatch ] = useReducer( appReducer, initialState );

    const openMenu = bool => {
        dispatch({
            type: OPEN_MENU,
            payload: bool
        })
    }

    return (
        <appContext.Provider
            value={{
                open: state.open,
                openMenu
            }}
        >
            {props.children}
        </appContext.Provider>
    )

}

export default AppState;