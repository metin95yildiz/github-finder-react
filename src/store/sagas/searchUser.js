import { put, call, take, spawn } from "redux-saga/effects";
import {
    SUBMIT_SEARCH_USER,
    START_SEARCH_USER,
    COMPLETE_SEARCH_USER,
    FAIL_SEARCH_USER
} from "../actions/actionTypes";
import axios from "axios";

export function * searchUser() {
    const baseUrl = "https://api.github.com/users/";

    const { username } = yield take(SUBMIT_SEARCH_USER);
    yield put({ type: START_SEARCH_USER });
    try {
        const userResponse = yield call(axios.get, baseUrl + username);
        const reposResponse = yield call(axios.get, baseUrl + username + "/repos");
        const sortedRepos = Object.values(reposResponse.data).sort(((prev, next) => {
            return new Date(next.created_at) - new Date(prev.created_at)
        }));
        yield put({ type: COMPLETE_SEARCH_USER,
            user: userResponse.data, repos: sortedRepos})
    } catch (error) {
        yield put ({
            type: FAIL_SEARCH_USER,
            error: "The user you're looking for was not found..."
        })
    } finally {
        spawn(searchUser);
    }
}