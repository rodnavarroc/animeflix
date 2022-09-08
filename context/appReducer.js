import {
    OPEN_MENU
} from "../types/index"

export default (state, action) => {
    switch (action.type) {
        case OPEN_MENU:
            return {
                ...state,
                open: action.payload
            }
        default: return state;
    }
}