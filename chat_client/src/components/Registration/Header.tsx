import { JSX } from "react";

export default function Header(): JSX.Element {
    return (
        <div className="flex align-middle justify-center text-center p-5 w-full">
            <h2 className="
                w-1/4 
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