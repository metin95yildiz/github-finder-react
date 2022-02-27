import { createSelector } from "reselect";

export const profileDataMemo = createSelector(
    state => state.profile,
    profile => {
        return profile
    }
)