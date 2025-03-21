import { UserContainerProps } from "../interfaces/UserContainerProps.ts";

export function userContainerReducer(state: UserContainerProps, newState: UserContainerProps): UserContainerProps {
    switch (newState.status){
        case "initial":
            return {...newState, status: "initial"};
        case "loading":
            return {...newState, status: "loading"};
        case "error":
            return {...newState, status: "error"};
        default:
            return state;
    }
}