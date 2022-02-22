import * as ACTION from "./actionTypes";

export function submitSearch(username){
    return { type: ACTION.SUBMIT_SEARCH_USER, username}
}