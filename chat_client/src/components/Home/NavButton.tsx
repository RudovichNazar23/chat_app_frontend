import React from "react";

import { useContext } from "react";

import { HomeContext } from "../../contexts/HomeContext.ts";
import { HomeStatusType } from "../../types/HomeStatusType.ts";

interface NavButtonProps {
    textValue: string;
    name: HomeStatusType;
}

export default function NavButton({ textValue, name }: NavButtonProps) {
    const homeContext = useContext(HomeContext);

    const onClickHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        homeContext?.homeStateDispatch({ status: name });
    };

    return (
        <a
            className={`text-center group`}
            href={"#"}
            onClick={onClickHandler}
        >
            {textValue}
            <span className={`${name === homeContext?.homeStatus ? "w-full" : "max-w-0 group-hover:max-w-full transition-all duration-1000"} block h-0.5 bg-white`}></span>
        </a>
    );
};