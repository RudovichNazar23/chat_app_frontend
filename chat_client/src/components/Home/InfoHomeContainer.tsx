import { JSX } from "react";

interface InfoHomeContainerProps {
    children: Array<JSX.Element>;
}

export default function InfoHomeContainer({ children }: InfoHomeContainerProps): JSX.Element {
    return (
        <div className="p-5 grid grid-cols-3">
            <div></div>
            <div className={"p-5"}>
                { ...children }
            </div>
            <div></div>
        </div>
    );
}