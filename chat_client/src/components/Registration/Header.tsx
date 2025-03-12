import { JSX } from "react";

export default function Header(): JSX.Element {
    return (
        <div className="flex align-middle justify-center text-center lg:p-5 sm:p-2.5 sm:transition sm:duration-1000 w-full">
            <h2 className="
                lg:w-1/2
                md:w-full
                sm:w-full
                p-2 
                border 
                rounded-2xl 
                text-white 
                bg-gradient-to-br 
                from-purple-600 
                to-blue-500 
                hover:bg-gradient-to-bl 
                focus:ring-4 
                focus:outline-none 
                focus:ring-blue-300 
                dark:focus:ring-blue-800 
                ">
                    Message.com
            </h2>
        </div>
    );
};