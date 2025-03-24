import { JSX } from "react";

interface InfoHomeContainerProps {
    children: Array<JSX.Element>;
}

export default function InfoHomeContainer({ children }: InfoHomeContainerProps): JSX.Element {
    return (
        <div className="p-5 grid md:grid-cols-3 grid-cols-9">
            <div></div>
            <div className={"p-5 text-center"}>
                { ...children }
            </div>
            <div></div>
        </div>
    );
}