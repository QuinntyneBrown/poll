import * as actions from "./vote.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeVoteReducer = (state, action) => {
    if (action instanceof actions.RemoveVoteAction)
        pluckOut({ items: state.votes, value: action.entity.id });
    return state;
}

export const addVoteReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateVoteAction) {
        addOrUpdate({ items: state.votes, item: action.entity });
    }
    return state;
}

export const allVotesReducer = (state, action) => {
    if (action instanceof actions.AllVotesAction) {
        state.votes = action.entities;
    }
    return state;
}

export const setCurrentVoteReducer = (state, action) => {
    if (action instanceof actions.SetCurrentVoteAction) {
        state.currentVoteId = action.id;
    }
    return state;
}
