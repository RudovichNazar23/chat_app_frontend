import { JSX } from "react";

export default function Logo(): JSX.Element {
    return (
        <div className="
            flex 
            align-middle 
            justify-center 
            md:p-2.5
            sm:p-0
            w-full"
        >
            <div className="md:w-50 md:h-50 h-25">
                <img className="" src="/comments.png" alt="logo"/>
            </div>
        </div>
    );
};