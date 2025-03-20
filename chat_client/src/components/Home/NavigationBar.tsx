import { JSX } from "react";

import NavButton from "./NavButton";

export default function NavigationBar(): JSX.Element {
    return (
        <>
            <div className={"col-span-1"}></div>
            <div className={"p-5 col-span-1"}>
                <div className={"grid grid-cols-3 gap-5"}>
                    <NavButton textValue={"Users"} name={"users"}/>
                    <NavButton textValue={"Profile"} name={"profile"}/>
                    <NavButton textValue={"Chats"} name={"chats"}/>
                </div>
            </div>
            <div className={"col-span-1"}></div>
        </>
    );
};