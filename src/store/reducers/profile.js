import {
    COMPLETE_SEARCH_USER,
    FAIL_SEARCH_USER
} from "../actions/actionTypes";

const initial = {
    user: "",
    repos: "",
    error: ""
}

export default function profile(state = initial, action) {
    switch(action.type) {
        case COMPLETE_SEARCH_USER: return {
            ...state,
            user: action.user,
            repos: action.repos
        };
        case FAIL_SEARCH_USER: return { user: "", repos: "", error: action.error };
        default: return state;
        }
}
