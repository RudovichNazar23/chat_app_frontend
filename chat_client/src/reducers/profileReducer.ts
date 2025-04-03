import { ProfileState } from "../interfaces/ProfileState.ts";

export function profileReducer(state: ProfileState, newState: ProfileState): ProfileState {
    switch (newState.status){
        case "initial":
            return { ...newState, status: "initial" };
        case "loading":
            return { ...newState, status: "loading" };
        case "error":
            return  { ...newState, status: "error" };
        default:
            return state;
    }
}