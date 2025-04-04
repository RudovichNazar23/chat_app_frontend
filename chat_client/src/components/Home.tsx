import { JSX } from "react";
import { useReducer } from "react";

import { HomeStateProps } from "../interfaces/HomeStateProps.ts";
import { homeReducer } from "../reducers/homeReducer.ts";
import { HomeContext } from "../contexts/HomeContext.ts";

import HeaderContainer from "./Home/HeaderContainer.tsx";
import NavigationBar from "./Home/NavigationBar.tsx";
import UserListContainer from "./Home/UserListContainer.tsx";

import Profile from "./Profile.tsx";

export default function Home(): JSX.Element {
    const INITIAL_STATE: HomeStateProps = {
        status: "users",
    };

    const [state, dispatch] = useReducer(homeReducer, INITIAL_STATE);

    const components = {
        "users": <UserListContainer/>,
        "profile": <Profile/>,
        "chats": <div>Chats</div>
    };

    return (
        <HomeContext.Provider value={{ homeStateDispatch: dispatch, homeStatus: state.status }}>
            <div className={"grid grid-cols-3 gap-5"}>
                <HeaderContainer/>
                <NavigationBar/>
                <div className={"col-span-3 p-2"}>
                    {
                        components[state.status]
                    }
                </div>
            </div>
        </HomeContext.Provider>
    );
}