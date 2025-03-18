import { RegistrationStateProps } from "../interfaces/RegistrationStateProps";

export function registrationReducer(state: RegistrationStateProps, newState: RegistrationStateProps ): RegistrationStateProps {
    switch(newState.status){
        case "loading":
            return {...newState, status: "loading"};
        case "initial":
            return {...newState, status: "initial"};
        default:
            return state;
    }
}