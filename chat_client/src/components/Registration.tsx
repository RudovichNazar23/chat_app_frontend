import { useState } from "react";

import { JSX } from "react";

import Header from "./Registration/Header";
import Logo from "./Registration/Logo";
import InfoContainer from "./Registration/InfoContainer";

export default function Registration(): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="flex flex-col gap-5 p-2.5 m-2 h-full">
            <div className={`h-screen flex flex-row gap-2.5 ${isOpen ? "p-0" : "p-15"} transition-all duration-1500`}>
                <div className={`${isOpen ? "md:w-1/2 md:opacity-100 opacity-0 w-0" : "w-full"} transition-all duration-1500 flex flex-col gap-5`}>
                    <Header/>
                    <Logo/>
                    <div className="p-2.5 flex flex-row items-center justify-center">
                        <button 
                            type="button" 
                            className={`
                            sm:w-full md:w-full lg:w-1/2
                            ${isOpen ? "opacity-0" : "opacity-100"}
                            transition-all duration-2000
                            text-white 
                            bg-blue-700 
                            hover:bg-blue-800 
                            focus:ring-4 
                            focus:ring-blue-300 
                            font-medium 
                            rounded-lg 
                            text-xs sm:text-sm md:text-base
                            px-4 sm:px-5 
                            py-2 sm:py-2.5
                            me-0 sm:me-2
                            mb-2
                            dark:bg-blue-600 
                            dark:hover:bg-blue-700 
                            focus:outline-none 
                            dark:focus:ring-blue-800
                            `}
                            onClick={() => setIsOpen(true)}
                        >
                            Learn more
                        </button>
                    </div>
                </div>
                <div className={`border-l ${isOpen ? "md:w-1/2 w-full opacity-100 " : "w-0 opacity-0"} transition-all duration-2000 p-2.5 transform`}>
                    <InfoContainer onClick={() => setIsOpen(false)} isOpen={isOpen}/>
                </div>
            </div>
            <hr className="h-px my-8 bg-white border-0"/>
            <div className="h-screen grid grid-cols-1 gap-2.5 place-content-center place-items-center">
                <h1 className="text-4xl font-extrabold">
                    Registration
                </h1>
                <form className="" id="form">
                    <div className="p-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Username:
                        </label>
                        <input 
                            type="text" 
                            className="
                            bg-gray-50 
                            border 
                            border-gray-300 
                            text-gray-900 
                            text-sm 
                            rounded-lg 
                            block 
                            w-full 
                            p-2.5 
                            dark:bg-gray-700 
                            dark:border-gray-600 
                            dark:placeholder-gray-400 
                            dark:text-white 
                            dark:focus:ring-blue-500 
                            dark:focus:border-blue-500" 
                            placeholder="superUser228"
                        />
                    </div>
                    <div className="p-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Password:
                        </label>
                        <input 
                            type="password"
                            className="
                            bg-gray-50 
                            border 
                            border-gray-300 
                            text-gray-900 
                            text-sm 
                            rounded-lg 
                            block 
                            w-full 
                            p-2.5 
                            dark:bg-gray-700 
                            dark:border-gray-600 
                            dark:placeholder-gray-400 
                            dark:text-white 
                            dark:focus:ring-blue-500 
                            dark:focus:border-blue-500"
                        />
                    </div>
                    <div className="p-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Repeat password:
                        </label>
                        <input 
                            type="password"
                            className="
                            bg-gray-50 
                            border 
                            border-gray-300 
                            text-gray-900 
                            text-sm 
                            rounded-lg 
                            block 
                            w-full 
                            p-2.5 
                            dark:bg-gray-700 
                            dark:border-gray-600 
                            dark:placeholder-gray-400 
                            dark:text-white 
                            dark:focus:ring-blue-500 
                            dark:focus:border-blue-500"
                        />
                    </div>
                    <div className="p-5">
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};