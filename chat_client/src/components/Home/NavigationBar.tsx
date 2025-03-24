import { JSX } from "react";

import NavButton from "./NavButton";

export default function NavigationBar(): JSX.Element {
    return (
        <>
            <div className={"md:col-span-1 md:inline hidden"}></div>
            <div className={"md:p-5 p-2.5 md:col-span-1 col-span-3"}>
                <div className={"grid grid-cols-3 gap-5"}>
                    <NavButton textValue={"Users"} name={"users"}/>
                    <NavButton textValue={"Profile"} name={"profile"}/>
                    <NavButton textValue={"Chats"} name={"chats"}/>
                </div>
            </div>
            <div className={"md:col-span-1 md:inline hidden"}></div>
        </>
    );
};