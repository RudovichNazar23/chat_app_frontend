import { JSX, useReducer, useEffect } from "react";

import { UserContainerProps } from "../../interfaces/UserContainerProps.ts";
import { userContainerReducer } from "../../reducers/userContainerReducer.ts";
import { api } from "../../utils/api.ts";
import { User } from "../../interfaces/User.ts";

import LoadingButton from "../LoadingButton.tsx";
import InfoHomeContainer from "./InfoHomeContainer.tsx";
import UserLink from "./UserLink.tsx";

export default function UserListContainer(): JSX.Element {
    const INITIAL_STATE: UserContainerProps = { status: "initial", data: [], errorMessage: "",};

    const [state, dispatch] = useReducer(userContainerReducer, INITIAL_STATE);

    useEffect(
        () => {
            dispatch({ ...state, status: "loading" });
            const response = api.get("/user_profile/user/");
            response
            .then(
                (res) => {
                    res.status === 200 && (
                      dispatch({...state, status: "initial", data: res.data})
                    );
                }
            )
            .catch((error)=> console.log(error));
        },
        []
    );

    const { status, data } = state;

    if(status === "loading") {
        return (
            <InfoHomeContainer
                children={[<LoadingButton/>,]}
            />
        );
    }

    if(status === "error"){
        return (
            <InfoHomeContainer
                children={
                    [
                        <p>Something went wrong while loading data...</p>,
                        <p>Please try again later.</p>
                    ]
                }
            />
        );
    }

    return (
        <>
            {
               data.length === 0 ? (
                   <InfoHomeContainer
                       children={[<p>There are not any available users for you</p>]}
                   />
               ) : (
                   <div className={"grid grid-cols-12 gap-5 p-2"}>
                       {
                           data.map(
                               (user: User): JSX.Element => (
                                   <>
                                       <div className={"col-span-2"}/>
                                        <UserLink user={user}/>
                                       <div className={"col-span-2"}/>
                                   </>
                               )
                           )
                       }
                   </div>
               )
            }
        </>
    );
};