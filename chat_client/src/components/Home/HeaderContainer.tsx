import React, { JSX } from "react";
import { useNavigate } from "react-router-dom";

export default function HeaderContainer(): JSX.Element {
    const navigate = useNavigate();

    const onClickHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        localStorage.clear();
        navigate("/login");
    };

    return (
        <div className={"col-span-3 p-2.5 rounded-xl" +
            "text-white \n" +
            "bg-gradient-to-br \n" +
            "from-purple-600 \n" +
            "to-blue-500 \n" +
            "hover:bg-gradient-to-bl \n" +
            "focus:ring-4 \n" +
            "focus:outline-none \n" +
            "focus:ring-blue-300 \n" +
            "dark:focus:ring-blue-800 "}>
            <div className={"grid grid-cols-8 gap-5"}>
                <div className={"col-span-6 text-start self-center"}>
                    <div className={"text-2xl ml-5"}>
                        Message.com
                    </div>
                </div>
                <div className={"col-span-2 text-center p-2.5"}>
                    <a className={"grid grid-cols-2 gap-1"} href={""} onClick={onClickHandler}>
                        <div className={"p-1 text-end"}>
                            Logout
                        </div>
                        <div className={"self-center"}>
                            <img src={"/logout.png"} alt="Logout" width={30} height={30}/>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};