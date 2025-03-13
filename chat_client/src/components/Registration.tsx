import { useState } from "react";

import { JSX } from "react";

import Header from "./Registration/Header";
import Logo from "./Registration/Logo";
import InfoContainer from "./Registration/InfoContainer";
import FormContainer from "./Registration/FormContainer";

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
            <FormContainer/>
        </div>
    );
};