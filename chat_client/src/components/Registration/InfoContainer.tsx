import { JSX } from "react";

interface InfoContainerProps {
    onClick: () => void;
    isOpen: boolean
}

export default function InfoContainer({ onClick, isOpen }: InfoContainerProps): JSX.Element {
    return (
        <>
            <div className="w-full flex lg:flex-row flex-col align-middle justify-between gap-2.5">
                <div className="w-full lg:w-1/4 p-2.5">
                    <button 
                        type="button" 
                        className="
                        w-full
                        text-white 
                        bg-gray-800 
                        hover:bg-gray-900 
                        focus:outline-none 
                        focus:ring-4 
                        focus:ring-gray-300  
                        rounded-lg 
                        text-sm 
                        p-2.5
                        dark:bg-gray-800 
                        dark:hover:bg-gray-700 
                        dark:focus:ring-gray-700 
                        dark:border-gray-700"
                        onClick={onClick}
                    >
                        Back
                    </button>
                </div>
                <div className="self-center p-2.5 sm:w-full lg:w-3/4 text-center">
                    About us
                </div>
                <div></div>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0"/>
            <div className={`${!isOpen ? "opacity-0" : "opacity-100"} transition-all duration-2000`}>
                <p>Hello, we are Message.com!!!</p>
                <p>
                    Here you can find new friends and chat with them. 
                    Just create account by using <a href="#form" className="text-blue-600 hover:underline">form</a> below or <a href="/login" className="text-blue-600 hover:underline">login</a> and start your journey
                </p>
            </div>
        </>
    );
};