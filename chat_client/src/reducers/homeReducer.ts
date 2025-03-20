import { HomeStateProps } from "../interfaces/HomeStateProps.ts";

export function homeReducer(state: HomeStateProps, newState: HomeStateProps): HomeStateProps {
    switch (newState.status){
        case "users":
            return {...newState, status: "users" };
        case "profile":
            return {...newState, status: "profile" };
        case "chats":
            return {...newState, status: "chats" };
        default:
            return state;
    }
}