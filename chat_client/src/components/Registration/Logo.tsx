import { JSX } from "react";

export default function Logo(): JSX.Element {
    return (
        <div className="flex align-middle justify-center p-2.5 w-full">
            <div className="w-50 h-50">
                <img className="" src="/comments.png" alt="logo"/>
            </div>
        </div>
    );
};