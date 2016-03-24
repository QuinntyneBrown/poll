import * as actions from "./subject.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeSubjectReducer = (state, action) => {
    if (action instanceof actions.RemoveSubjectAction)
        pluckOut({ items: state.subjects, value: action.entity.id });
    return state;
}

export const addSubjectReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateSubjectAction) {
        addOrUpdate({ items: state.subjects, item: action.entity });
    }
    return state;
}

export const allSubjectsReducer = (state, action) => {
    if (action instanceof actions.AllSubjectsAction) {
        state.subjects = action.entities;
    }
    return state;
}

export const setCurrentSubjectReducer = (state, action) => {
    if (action instanceof actions.SetCurrentSubjectAction) {
        state.currentSubjectId = action.id;
    }
    return state;
}
