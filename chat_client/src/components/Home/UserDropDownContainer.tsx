import { JSX } from "react";
import { User } from "../../interfaces/User.ts";

interface UserDropDownContainerProps {
    isOpen: boolean;
    user: User;
}

export default function UserDropDownContainer({ isOpen, user }: UserDropDownContainerProps): JSX.Element {
    const { username, email, first_name, last_name } = user;
    const userMap = new Map([
        ["Username", username],
        ["Email", email],
        ["First name", first_name],
        ["Last name", last_name],
    ]);

    return (
        <div
            className={`absolute top-[-120px] left-[120px] w-100 bg-white text-black p-2 rounded shadow-lg z-50 transition-all duration-300 ease-in-out 
           ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"} text-start`}
        >
            {
                Array.from(userMap.entries()).map(
                    (value, index) => {
                        return (
                            <p key={index}>
                                <strong>{ value[0]}:</strong> { " " }
                                { value[1] || <span className={"text-gray-400 italic"}>Not provided</span>}
                            </p>
                        );
                    }
                )
            }
        </div>
    );
};