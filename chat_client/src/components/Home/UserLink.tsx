import { JSX } from "react";
import { useState } from "react";

import { User } from "../../interfaces/User.ts";

import UserDropDownContainer from "./UserDropDownContainer.tsx";

interface UserLinkProps {
    user: User;
}

export default  function UserLink({ user }: UserLinkProps): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`md:col-span-8 col-span-12 ${isOpen ? "md:mt-30 mt-30" : "mt-0"} transition-all duration-1200`}>
            <div className={"grid grid-cols-12 border border-blue-400 rounded-2xl gap-5 p-2.5 text-center"}>
                <div className={"md:col-span-10 col-span-8 p-1 self-center"}>
                    <div className={"grid grid-cols-8 self-center items-center p-1"}>
                        <div className={"md:col-span-2 col-span-6 group relative"}>
                            <UserDropDownContainer isOpen={isOpen} user={user}/>
                            <a
                                className={"text-white p-2 hover:text-blue-500 transition-all duration-1200 z-10 relative"}
                                href={"#"}
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                { user.username }
                            </a>
                            <span
                                className={"h-0.5 block bg-blue-500 max-w-0 group-hover:max-w-full transition-all duration-1200 z-10"}
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
    );
}