import { JSX } from "react";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Modal(): JSX.Element {
    const [seconds, setSeconds] = useState<number>(45);

    const navigate = useNavigate();

    useEffect(
        () => {
            if(seconds === 0){
                navigate("/login");
            }
            else{
                setTimeout(() => setSeconds(seconds - 1), 1000);
            }

        }, [seconds]
    );

    return(
        <div className="
            fixed
            inset-0
            flex
            items-center
            justify-center
            z-5
            transition-opacity
            opacity-100
            duration-250
            "
        >
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative transition-opacity
            opacity-100
            duration-2500">
                <h2 className="text-xl font-semibold text-black">Cannot login automatically</h2>
                <hr className="border-t border-gray-400" />
                <p className="mt-2 text-gray-600">
                    Something went wrong while logging in automatically.
                </p>
                <p>You have to log in manually</p>
                <p className="mt-2 text-gray-600">
                    You will be redirected to the login page automatically or you can go to the login page manually.
                </p>
                <div className="mt-2 text-gray-600">
                    Redirecting in {seconds}
                </div>
                <div className="text-gray-600 mt-5 ">
                    <a className="
                        border
                        rounded
                        border-gray-500
                        p-2.5
                        hover:bg-gray-400
                        hover:text-white
                        hover:border-r-5
                        "
                       href="/login"
                    >
                        Login
                    </a>
                </div>
            </div>
        </div>
    );
};