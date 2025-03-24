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
        <div className={"col-span-3 md:p-2.5 p-1 rounded-xl" +
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
                <div className={"md:col-span-6 col-span-4 text-start self-center"}>
                    <div className={"md:text-2xl text-xl md:ml-5 p-1"}>
                        Message.com
                    </div>
                </div>
                <div className={"md:col-span-2 col-span-4 md:text-center md:p-2.5 p-1 text-end"}>
                    <a className={"grid md:grid-cols-2 grid-cols-4 gap-1"} href={""} onClick={onClickHandler}>
                        <div className={"p-1 md:col-span-1 md:text-end col-span-3"}>
                            Logout
                        </div>
                        <div className={"self-center col-span-1"}>
                            <img src={"/logout.png"} alt="Logout" width={30} height={30}/>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};