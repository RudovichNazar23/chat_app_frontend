import { LoginStateProps } from "../interfaces/LoginStateProps.ts";

export function loginReducer(state: LoginStateProps, newState: LoginStateProps): LoginStateProps {
    switch (newState.status){
        case "initial":
            return { ...newState, status: "initial" };
        case "loading":
            return { ...newState, status: "loading" };
        default:
            return state;
    }
}