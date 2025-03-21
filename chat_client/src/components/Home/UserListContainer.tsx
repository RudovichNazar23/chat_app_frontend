import { JSX, useReducer, useEffect } from "react";

import { UserContainerProps } from "../../interfaces/UserContainerProps.ts";
import { userContainerReducer } from "../../reducers/userContainerReducer.ts";
import { api } from "../../utils/api.ts";

import LoadingButton from "../LoadingButton.tsx";
import InfoHomeContainer from "./InfoHomeContainer.tsx";
import {User} from "../../interfaces/User.ts";

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
                               ({ username }: User, index: number): JSX.Element => (
                                   <>
                                       <div className={"col-span-2"}/>
                                       <div className={"col-span-8"}>
                                           <div className={"grid grid-cols-12 border border-blue-400 rounded-2xl gap-5 p-2.5 text-center"} key={index}>
                                               <div className={"col-span-10 p-1 self-center"}
                                               >
                                                   <div className={"grid grid-cols-8 self-center items-center p-1"}>
                                                       <div className={"col-span-1 group"}>
                                                           <a
                                                               className={"text-white hover:text-blue-500 transition-all duration-1200"}
                                                               href={"#"}
                                                           >
                                                               { username }
                                                           </a>
                                                           <span
                                                               className={"h-0.5 block bg-blue-500 max-w-0 group-hover:max-w-full transition-all duration-1200"}
                                                           />
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className={"col-span-2 p-1 self-center"}>
                                                   <a
                                                       className={"p-2 rounded-md text-white bg-blue-700 hover:bg-blue-500 transition-all duration-1200"}
                                                       href={"#"}
                                                   >
                                                       Add
                                                   </a>
                                               </div>
                                           </div>
                                       </div>
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